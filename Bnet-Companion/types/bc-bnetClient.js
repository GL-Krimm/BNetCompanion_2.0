(function() {
	var $j = jQuery.noConflict();
	var devMode = false;
	var _newsFeed = null;	
	var _bungieRssUrl = "http://www.bungie.net/en-us/Rss/News";
	var _bungieLegacyRssUrl = "http://www.bungie.net/News/NewsRss.ashx";
	var _soundNode = null;
	var _newItemsCallback = null;
	
	BcBnetClient = function() {
	
		// treat this object as a singleton; not sure how the
		if ( arguments.callee._singletonInstance ) {
			return arguments.callee._singletonInstance;
		}
		
		arguments.callee._singletonInstance = this;
	
		if ( localStorage.newsFeed ) {
			_newsFeed = new BCNewsList(JSON.parse(localStorage.newsFeed));
		} else {
			_newsFeed = new BCNewsList();
		}
	
		// set or initialize the play notification setting
		localStorage.playNotificationsSound = localStorage.playNotificationsSound ? localStorage.playNotificationsSound : true;
				
		_soundNode = document.createElement('audio');
		_soundNode.id = 'bc-notification';
		_soundNode.setAttribute('type', 'audio/mp3');
		_soundNode.setAttribute('src', 'sounds/notification.mp3');
		document.body.appendChild(_soundNode);
		
		updateNews();
	};
	
	BcBnetClient.prototype.getNews = function() {	
		return _newsFeed;		
	};
	
	BcBnetClient.prototype.openItem = function(url) {
		window.open(url);
	};
	
	BcBnetClient.prototype.setPlayNotifications = function(value) {	
		localStorage.playNotificationsSound = value;
	};

	BcBnetClient.prototype.getPlayNotifications = function() {	
		return localStorage.playNotificationsSound;
	};

	BcBnetClient.prototype.playNotificationSound = function() {	
		playNewNewsSound();
	};
		
	BcBnetClient.prototype.clientConnectedToTwitter = function() {	
		return localStorage.hasOwnProperty('twitterAuthToken');	
	};
	
	BcBnetClient.prototype.requestTwitterToken = function() {	
		var callbackString = window.top.location + "?t=" + Date.now();
		var result = OAuthSimple().sign({
			action:"GET",
			method:"HMAC-SHA1",
			type:"text",
			path:"https://api.twitter.com/oauth/request_token",
			parameters:{
				oauth_version:"1.0",
				oauth_signature_method:"HMAC-SHA1",
				oauth_callback:window.top.location
			},
			signatures:{
				consumer_key:TwitterConsumerKey,
				shared_secret:TwitterConsumerSecret
			}
		});
		
		$j.ajax({
			url:result.signed_url,
			success:function(data) {
			
				var requestToken = null;
				
				data=data.split("&");
				for (var i in data) {
					var node = data[i].split("=");
					
					if ( node[0] == "oauth_token" ) {
						requestToken = node[1];
					}
					
				}
				if ( requestToken ) {
					chrome.tabs.create({
						url:"https://api.twitter.com/oauth/authorize?oauth_token=" + requestToken
					});
				}
				
			}
		});
	};
	
	BcBnetClient.prototype.signIntoTwitter = function(token, secret) {
		var auth_url = "https://api.twitter.com/oauth/access_token";
		console.log("signing in...");
		
		var getParams = this.getSearchParams;
		
		var callback = function(data) {
			console.log('signin callback called...');
			var tokens = getParams(data);
			
			localStorage.twitterAuthToken = tokens.oauth_token || null;
			localStorage.twitterAuthTokenSecret = tokens.oauth_token_secret || null;
		};
		try {
			sendTwitterRequest(auth_url, null, 'POST', token, secret, callback);
		} catch ( e ) {
			console.log(e);
		}
		
	};
	
	BcBnetClient.prototype.signOutFromTwitter = function() {
		delete localStorage.twitterAuthToken;
		delete localStorage.twitterAuthTokenSecret;
	};
	
	BcBnetClient.prototype.reply = function(tweetKey, msg) {
		var url = "https://api.twitter.com/1/statuses/update.json";
		
		console.log("replying: " + tweetKey + " " + msg);
		
		var params = [['status', msg],['in_reply_to_status_id',tweetKey]];
		
		oauthRequest({url:url, parameters:params, method:'POST', token:localStorage.twitterAuthToken,tokenSecret:localStorage.twitterAuthTokenSecret});
	};

	BcBnetClient.prototype.retweet = function(tweetKey) {
	
		var twitterUrl = "https://api.twitter.com/1/statuses/retweet/"+tweetKey+".json";
		
		try {
			oauthRequest({url:twitterUrl, method:'POST', token:localStorage.twitterAuthToken,tokenSecret:localStorage.twitterAuthTokenSecret});
		} catch ( e ) {
			console.log(e);
		}
	};
	
	//https://api.twitter.com/1/favorites/create/:id.format
	BcBnetClient.prototype.favoriteTweet = function(tweetKey) {
	
		var twitterUrl = "https://api.twitter.com/1/favorites/create/" +tweetKey+ ".json";
		
		try {
			oauthRequest({url:twitterUrl, method:'POST', token:localStorage.twitterAuthToken,tokenSecret:localStorage.twitterAuthTokenSecret});
		} catch ( e ) {
			console.log(e);
		}
	};
	
	BcBnetClient.prototype.getSearchParams = function(searchStr) {
		var params = {};
		searchStr.replace('?','').split('&').forEach(function(item) {
			var p = item.split('=');
			params[p[0]] = p[1];
		});
		return params;
	};
	
//method:"POST",url:"https://api.twitter.com/1/statuses/retweet/"+d+".json",account:a
    var oauthRequest=function(d){
		var accessor={
			consumerSecret:TwitterConsumerSecret
		};
		
		var message={
			action:d.url,
			method:d.method||"GET",
			parameters:[["oauth_consumer_key",TwitterConsumerKey],
			["oauth_signature_method","HMAC-SHA1"],
			["oauth_version","1.0"]]
		};	
		
		if(d.token){
			message.parameters.push(["oauth_token",d.token])
		}
		
		if(d.tokenSecret){
			accessor.tokenSecret=d.tokenSecret
		}
		
		for(var a in d.parameters) {
			message.parameters.push(d.parameters[a])
		}
		
		OAuth.setTimestampAndNonce(message);
		OAuth.SignatureMethod.sign(message,accessor);
		
		console.log(OAuth.getParameterMap(message.parameters));
		
		$j.ajax({
			url:message.action,
			type:message.method,
			data:OAuth.getParameterMap(message.parameters),
			dataType:"json",
			success:function(data) {
				if (d.success) {d.success(data);}
			}
		});
	};		
		
	var sendTwitterRequest = function(url, params, method, token, secret, callback) {
		
		var request = null;
		
		OAuthSimple().reset();
		request = OAuthSimple(TwitterConsumerKey,TwitterConsumerSecret).sign({
			action:method,
			dataType:"JSON",
			path:url,
			parameters:{
				oauth_token:token,
				oauth_token_secret:secret
			}
		});
		
		console.log(request);
		
		$j.ajax({
			url:request.signed_url,
			type:method,
			data:request.parameters,
			success:callback
		});		
			
	};
	
	var playNewNewsSound = function() {
		if ( localStorage.playNotificationsSound == 'true') {
			_soundNode.play();
		}
	};
	
	var updateNews = function() {
		
		if ( devMode ) {
			_newsFeed = getNewsFeedMock();
		} else {
			try {
				getTwitterFeed();
				getBungieBlog();
				getBungieLegacyBlog();
				getYoutubeFeed();
			} catch ( e ) {
				console.log('An exception occurred when attempting to fetch the news feed:');
				console.log(e);
			}
			
		}
				
		//if ( !devMode ) {
			localStorage.newsFeed = JSON.stringify(_newsFeed);
		//}				
		
		try {
			var latestEntry = _newsFeed.getLatestEntry().replace(/^[bty]-/,'');
			
			// detect and store latest news item
			if ( localStorage.latestPubDate && latestEntry ) {
				var fetched = new Date(latestEntry);
				var stored = new Date(localStorage.latestPubDate);
				
				if ( fetched > stored ) {
					// new item detected. Notify user.
					localStorage.latestPubDate = latestEntry;
					localStorage.newItemsFetched = true;
					playNewNewsSound();
				}
				
			} else {
				localStorage.latestPubDate = latestEntry;
			}
		} catch ( e ) {
			console.log(e);
		}
		
		// update every 30 seconds after a complete update
		setTimeout(arguments.callee, 30 * 1000); 		
	}
	
	var getBungieBlog = function() {
	
		var link, title, createdAt, item;
		
		$j.ajax({
			url: _bungieRssUrl,
			type:'GET',
			dataType:'XML',
			async:false,
			success:function(data) {
				
				$j($j(data).find('item')).each(function() {						
					
					title = $j(this).find('title').text();
					link = $j(this).find('link').text();
					
					createdAt = $j(this).find('pubDate').text().replace("+0000", "GMT");
					
					_newsFeed.add({title:title, url:link, pubDate:createdAt, source:'bnet'});
				});
			}
		});
	};
	
	var getBungieLegacyBlog = function() {
	
		var link, title, createdAt, item;

		$j.ajax({
			url: _bungieLegacyRssUrl,
			type:'GET',
			dataType:'XML',
			async:false,
			success:function(data) {
				
				$j($j(data).find('item')).each(function() {						
					
					title = $j(this).find('title').text();
					link = $j(this).find('link').text();
					
					createdAt = $j(this).find('pubDate').text().replace("+0000", "GMT");
					
					_newsFeed.add({title:title, url:link, pubDate:createdAt, source:'bnet'});
				});	
			}
		});
		
	};
	
	var getTwitterFeed = function() {
		
		
		if ( localStorage.twitterAuthToken ) {		
			getSignedTwitterFeed();
		} else {
			// for testing twitter funcs - 180827393
			// bungie twitter uid - 26280712
			var twitterUrl = "http://api.twitter.com/1/statuses/user_timeline.json?user_id=26280712&count=80&include_rts=1";
			
			var link;
			var item;
			
			$j.ajax({
				url:twitterUrl,
				dataType:'JSON',
				async:false,
				success:function(data) {
					for ( var i = 0; i < data.length; i++ ) {
					//title, url, pubDate, source, itemId
						link = "http://twitter.com/bungie/statuses/" + data[i].id_str;
						
						_newsFeed.add({title:data[i].text, url:link, pubDate:data[i].created_at, source:'twitter', itemId:data[i].id_str});
					}
				}
			
			});
		}	
		
	};
	
	var getSignedTwitterFeed = function() {
			
		var params = {
			user_id:180827393,
			include_rts:1,
			count:40
		};
		
		sendTwitterRequest("https://api.twitter.com/1/statuses/user_timeline.json?user_id=26280712&count=80&include_rts=1", params, 'GET', localStorage.twitterAuthToken, localStorage.twitterAuthTokenSecret, processTwitterResponse);
		
	};
	
	var processTwitterResponse = function(data) {
		for ( var i = 0; i < data.length; i++ ) {
		//title, url, pubDate, source, itemId
			link = "http://twitter.com/bungie/statuses/" + data[i].id_str;
			_newsFeed.add({title:data[i].text, url:link, pubDate:data[i].created_at, source:'twitter', itemId:data[i].id_str});
		}
	};
	
	var getYoutubeFeed = function() {
		$j.ajax({
			url:"https://gdata.youtube.com/feeds/api/users/bungie/uploads?max-results=10",
			type:"GET",
			async:false,
			dataType:"XML",
			success:function(data) {
				$j($j(data).find('entry')).each(function() {
					var item = {};
					item.source = 'youtube';
					item.title = $j(this).find('title').text();					
					item.title = item.title.substring(0,item.title.length / 2);
					item.pubDate = $j(this).find('published').text();
					
					var links = $j(this).find('link');
					
					for ( i = 0; i < links.length; i++ ) {
						var tLink = $j(links[i]).attr('href');
						
						if ( tLink.indexOf('watch') > -1 ) {
							item.url = tLink;
							break;
						}
						
					}
					_newsFeed.add(item);
				});
			}
		});
	};
	
	var getNewsFeedMock = function() { 
	
		var mockList = new BCNewsList();
		
		var limit = 1;
		var currentItem = null;
		var title = null;
		while (limit < 4) {
			
			currentItem = new Date();
			currentItem.setHours(currentItem.getHours() + limit);
			
			title = "item: " + currentItem.toString()
			
			mockList.add({title:title,url:'http://www.bungie.net',pubDate:currentItem.toString(),source:'bnet'});
			
			limit++;
		}
		return mockList;	
	}
	
	var TwitterConsumerKey = 'lwCCH94saDQSOqEcuGD7w';
	var TwitterConsumerSecret = 'Au2wXTBYyEyaDW2lv1jMDAtFj6aUhyRBxYf9h9YfA';

})();
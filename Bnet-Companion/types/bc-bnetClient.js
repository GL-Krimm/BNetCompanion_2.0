(function() {
	var $j = jQuery.noConflict();
	var devMode = false;
	var _newsFeed = null;	
	var _bungieFeed = null;
	var _twitterFeed = null;
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
			
		} else if (localStorage.bungieFeed && localStorage.twitterFeed) {
			_bungieFeed = new BCNewsList(JSON.parse(localStorage.bungieFeed));
			_twitterFeed = new BCNewsList(JSON.parse(localStorage.twitterFeed));
		} else {
			_newsFeed = new BCNewsList();
			_bungieFeed = new BCNewsList();
			_twitterFeed = new BCNewsList();
		}
		
		chrome.browserAction.setBadgeBackgroundColor({color:[0, 150, 219, 255]});
	
		// set or initialize the play notification setting
		localStorage.playNotificationsSound = localStorage.playNotificationsSound ? localStorage.playNotificationsSound : true;
		localStorage.showNotifications	= localStorage.showNotifications ? localStorage.showNotifications : false;
		
		_soundNode = document.createElement('audio');
		_soundNode.id = 'bc-notification';
		_soundNode.setAttribute('type', 'audio/mp3');
		_soundNode.setAttribute('src', 'sounds/notification.mp3');
		document.body.appendChild(_soundNode);
		
		updateNews();
	};
	
	BcBnetClient.prototype.setBadgeText = function(text) {	
		setBadge(text);
	};
	
	BcBnetClient.prototype.getNews = function() {	
		return _newsFeed;		
	};

	BcBnetClient.prototype.getBungieNews = function() {	
		return _bungieFeed;		
	};

	BcBnetClient.prototype.getTwitterNews = function() {	
		return _twitterFeed;		
	};
	
	BcBnetClient.prototype.openItem = function(url) {
		window.open(url);
	};
	
	BcBnetClient.prototype.setNotificationSetting = function(settingName, value) {	
		localStorage[settingName] = value;
	};

	BcBnetClient.prototype.getNotificationSetting = function(settingName) {	
		return localStorage[settingName];
	};

	BcBnetClient.prototype.playNotificationSound = function() {	
		playNewNewsSound();
	};
		
	BcBnetClient.prototype.clientConnectedToTwitter = function() {	
		return localStorage.hasOwnProperty('twitterAuthToken');	
	};
	
	BcBnetClient.prototype.requestTwitterToken = function() {	
		var callbackString = window.top.location + "?t=" + Date.now();
		
		var params = [
			['oauth_callback', callbackString]
		];
				
		oauthRequest({
			url:"https://api.twitter.com/oauth/request_token",
			method:'POST',
			parameters:params, 
			format:'TEXT',
			success:function(data) {
			
				var returnedParams = getCallbackParams(data);
				if ( returnedParams.oauth_token ) {
					chrome.tabs.create({
						url:"https://api.twitter.com/oauth/authorize?oauth_token=" + returnedParams.oauth_token
					});
				}
			},error:function(e) {
				console.lot('error');
				console.log(e);
			}
		});
		
	};
	
	BcBnetClient.prototype.signIntoTwitter = function(token, secret, callback) {
		var auth_url = "https://api.twitter.com/oauth/access_token";
		
		var authCallback = function(data) {
			var tokens = getCallbackParams(data);
			
			localStorage.twitterAuthToken = tokens.oauth_token || null;
			localStorage.twitterAuthTokenSecret = tokens.oauth_token_secret || null;
			
			callback();
		};
		try {
			oauthRequest({url:auth_url, method:'POST', async:true, format:'TEXT', token:token, tokenSecret:secret, success:authCallback});
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
		
		var params = [['status', msg],['in_reply_to_status_id',tweetKey]];
		
		oauthRequest({url:url, parameters:params, method:'POST', token:localStorage.twitterAuthToken, tokenSecret:localStorage.twitterAuthTokenSecret});
	};

	BcBnetClient.prototype.retweet = function(tweetKey) {
	
		var twitterUrl = "https://api.twitter.com/1/statuses/retweet/"+tweetKey+".json";
		
		try {
			oauthRequest({url:twitterUrl, method:'POST', token:localStorage.twitterAuthToken, tokenSecret:localStorage.twitterAuthTokenSecret});
		} catch ( e ) {
		}
	};
	
	//https://api.twitter.com/1/favorites/create/:id.format
	BcBnetClient.prototype.favoriteTweet = function(tweetKey) {
	
		var twitterUrl = "https://api.twitter.com/1/favorites/create/" +tweetKey+ ".json";
		
		try {
			oauthRequest({url:twitterUrl, method:'POST', token:localStorage.twitterAuthToken, tokenSecret:localStorage.twitterAuthTokenSecret});
		} catch ( e ) {
		}
	};
	
	if ( devMode ) {
		BcBnetClient.prototype.testNotifications = function() {
			setTimeout(notifyUser,2000);
		};
	}
		
	BcBnetClient.prototype.getSearchParams = function(searchStr) {
		return getCallbackParams(searchStr);
	};
	
	var getCallbackParams = function(searchStr) {
		var params = {};
		searchStr.replace('?','').split('&').forEach(function(item) {
			var p = item.split('=');
			params[p[0]] = p[1];
		});
		return params;
	
	};
	
    var oauthRequest=function(d){
	
		var accessor={
			consumerSecret:TwitterConsumerSecret
		};
		
		var message={
			action:d.url,
			method:d.method||"GET",
			parameters:[
				["oauth_consumer_key",TwitterConsumerKey],
				["oauth_signature_method","HMAC-SHA1"],
				["oauth_version","1.0"]
			]
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
		
		try {
			$j.ajax({
				url:message.action,
				async:d.async||true,
				type:message.method||'GET',
				data:OAuth.getParameterMap(message.parameters),
				dataType:d.format||'JSON',
				success:function(data) {
					if (d.success) {d.success(data);}
				}
			});
		} catch ( e ) {
		}

	};

	var playNewNewsSound = function() {
		if ( localStorage.playNotificationsSound == 'true') {
			_soundNode.play();
		}
	};
	
	var notifyUser = function() {
		
		if ( localStorage.showNotifications === 'true' ) {
			chrome.tabs.getSelected(null, function (tab) { 
				if ( tab.id ) {
					chrome.tabs.sendMessage(tab.id, {req:"notify"}); 
				}
			});
		}
	};
	
	var updateNews = function() {
		
		if ( devMode ) {
			_newsFeed = getNewsFeedMock();
		} else {
			try {
				getTwitterFeed();
				console.log('got twitter');
				getBungieBlog();
				getBungieLegacyBlog();
				console.log('got bungie');
			} catch ( e ) {
				console.log('An exception occurred when attempting to fetch the news feed:');
				console.log(e);
			}
			
		}
				
		//if ( !devMode ) {
			localStorage.newsFeed = JSON.stringify(_newsFeed);
			localStorage.twitterFeed = JSON.stringify(_twitterFeed);
			localStorage.bungieFeed = JSON.stringify(_bungieFeed);
		//}				
		
		try {
			var latestEntry = _newsFeed.getLatestEntry().replace(/^[bty]-/,'');
			
			// detect and store latest news item
			if ( localStorage.latestPubDate && latestEntry ) {
				var fetched = new Date(latestEntry);
				var stored = new Date(localStorage.latestPubDate);
				
				if ( fetched > stored ) {
					// new item detected. Notify user.
					setBadge('New');
					localStorage.latestPubDate = latestEntry;
					localStorage.newItemsFetched = true;
					playNewNewsSound();
					notifyUser();
				}
				
			} else {
				localStorage.latestPubDate = latestEntry;
			}
		} catch ( e ) {
		}
		
		// update every 30 seconds after a complete update
		setTimeout(arguments.callee, 30 * 1000); 		
	}
	
	var setBadge = function(text) {
		chrome.browserAction.setBadgeText({text:text});	
	};
	
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
					console.log('adding to bfeed');
					_bungieFeed.add({title:title, url:link, pubDate:createdAt, source:'bnet'});
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
					console.log('adding to b legacy feed');
					_bungieFeed.add({title:title, url:link, pubDate:createdAt, source:'bnet'});
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
						
						_twitterFeed.add({title:data[i].text, url:link, pubDate:data[i].created_at, source:'twitter', itemId:data[i].id_str});
					}
				}
			
			});
		}	
		
	};
	
	var getSignedTwitterFeed = function() {
			
		var params = [
			['user_id', '26280712'],
			['include_rts', '1'],
			['count', '40']
		];
		
		oauthRequest({
			url:"https://api.twitter.com/1/statuses/user_timeline.json",
			parameters:params,
			token:localStorage.twitterAuthToken,
			tokenSecret:localStorage.twitterAuthTokenSecret,
			success:processTwitterResponse
		});
		
	};
	
	var processTwitterResponse = function(data) {
		for ( var i = 0; i < data.length; i++ ) {
		//title, url, pubDate, source, itemId
			link = "http://twitter.com/bungie/statuses/" + data[i].id_str;
			_twitterFeed.add({title:data[i].text, url:link, pubDate:data[i].created_at, source:'twitter', itemId:data[i].id_str});
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
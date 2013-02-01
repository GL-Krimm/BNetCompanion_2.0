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

	BcBnetClient.prototype.setTwitterAuthToken = function(token) {	
		localStorage.twitterAuthToken = token;
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
		var feedData = new Array();
		
		var twitterUrl = "http://api.twitter.com/1/statuses/user_timeline.json?user_id=26280712&count=40&include_rts=1";
		
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

})();
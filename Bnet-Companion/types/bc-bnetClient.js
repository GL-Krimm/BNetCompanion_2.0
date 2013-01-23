(function() {
	var $j = jQuery.noConflict();
	var devMode = false;
	var _newsFeed = null;	
	var _testFeed = null;
	var _bungieRssUrl = 'http://www.bungie.net/en-us/Rss/News';
	
	BcBnetClient = function() {
		//if ( localStorage.newsFeed ) {
		//	_testFeed = new BCNewsList(JSON.parse(localStorage.newsFeed));
		//	console.log(_testFeed);
		//} else {
			_testFeed = new BCNewsList();
		//}
		
		updateNews();
	};
	
	BcBnetClient.prototype.getNews = function() {
		if ( devMode ) {
			return getNewsFeedMock();
		} else {
			return _testFeed;
		}
		
	};
	
	BcBnetClient.prototype.openItem = function(url) {
		window.open(url);
	};
	
	var updateNews = function() {
		getTwitterFeed();
		getBungieBlog();
				
		localStorage.newsFeed = JSON.stringify(_testFeed);
		
		// detect and store latest news item
		/*if ( localStorage.latestPubDate && _newsFeed[0] ) {
			var fetched = new Date(_newsFeed[0]._pubDate);
			var stored = new Date(localStorage.latestPubDate);
			
			if ( fetched > stored ) {
				// new item detected. Notify user.
				localStorage.latestPubDate = _newsFeed[0]._pubDate;
			}
			
		} else {
			localStorage.latestPubDate = _newsFeed[0]._pubDate;
		}*/
		
		// update every 30 seconds after a complete update
		setTimeout(arguments.callee, 30 * 1000); 		
	}
	
	var getBungieBlog = function() {
		var bungieBlog = new Array();
		
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
					
					item = new BCNewsItem(title, link, createdAt, 'bnet');
					
					_testFeed.add(item);
				});
			}
		});
		
		return bungieBlog;
	};
	

	var getTwitterFeed = function() {
		var feedData = new Array();
		
		var twitterUrl = "http://api.twitter.com/1/statuses/user_timeline.json?user_id=26280712&count=40";
		
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
					
					item = new BCNewsItem(data[i].text, link, data[i].created_at, 'twitter', data[i].id_str);
					_testFeed.add(item);
				}
			}
		
		});
	}
	
	var sortFeed = function(feed) {
		return feed.sort(function(a,b) {
			return (new Date(b._pubDate) - new Date(a._pubDate));
		});
	}
	
	
	var getNewsFeedMock = function() { 
		return [new BCNewsItem('Bungie has released Bungie.next to beta!', 'http://www.bungie.net', 'Wed Jan 16 00:42:25 +0000 2013', 'twitter', 'g7g7g7'), new BCNewsItem('Bungie has released Bungie.next to beta!', 'http://www.bungie.net', 'Wed Jan 16 00:42:25 +0000 2013', 'twitter', 'g7g7g7')];
	}

})();
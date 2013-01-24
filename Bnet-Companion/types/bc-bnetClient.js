(function() {
	var $j = jQuery.noConflict();
	var devMode = false;
	var _newsFeed = null;	
	var _bungieRssUrl = 'http://www.bungie.net/en-us/Rss/News';
	
	BcBnetClient = function() {
		if ( localStorage.newsFeed ) {
			_newsFeed = new BCNewsList(JSON.parse(localStorage.newsFeed));
		} else {
			_newsFeed = new BCNewsList();
		}
		
		updateNews();
	};
	
	BcBnetClient.prototype.getNews = function() {
	
			return _newsFeed;
		
	};
	
	BcBnetClient.prototype.openItem = function(url) {
		window.open(url);
	};
	
	var updateNews = function() {
	
		if ( devMode ) {
			_newsFeed = getNewsFeedMock();
		} else {
			try {
				getTwitterFeed();
				getBungieBlog();
				getYoutubeFeed();
			} catch ( e ) {
				console.log('An exception occurred when attempting to fetch the news feed:');
				console.log(e);
			}
			
		}
				
		localStorage.newsFeed = JSON.stringify(_newsFeed);
		
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
					
					item = new BCNewsItem({title:title, url:link, pubDate:createdAt, source:'bnet'});
					
					_newsFeed.add(item);
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
					
					item = new BCNewsItem({title:data[i].text, url:link, pubDate:data[i].created_at, source:'twitter', itemId:data[i].id_str});
					_newsFeed.add(item);
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
	
		console.log('mockingjay...');
		var mockList = new BCNewsList();
		mockList.add(new BCNewsItem({title:'Bungie has released Bungie.next to beta!', url:'http://www.bungie.net', pubDate:'Wed Jan 16 00:42:25 +0000 2013', source:'twitter', itemId:'g7g7g7'}));
		mockList.add(new BCNewsItem({title:'Se7enty 7', url:'http://www.bungie.net', pubDate:'Wed Jan 16 09:42:25 +0000 2013', source:'bnet'}));
		mockList.add(new BCNewsItem({title:'O Brave New World', url:'http://www.youtube.com', pubDate:'Wed Jan 16 09:42:25 +0000 2013', source:'youtube'}));
		
		mockList.add(new BCNewsItem({title:'Bungie has released Bungie.next to beta!', url:'http://www.bungie.net', pubDate:'Wed Jan 16 01:42:25 +0000 2013', source:'twitter', itemId:'g7g7g7'}));
		mockList.add(new BCNewsItem({title:'Se7enty 7', url:'http://www.bungie.net', pubDate:'Wed Jan 16 10:42:25 +0000 2013', source:'bnet'}));
		mockList.add(new BCNewsItem({title:'O Brave New World', url:'http://www.youtube.com', pubDate:'Wed Jan 16 10:42:25 +0000 2013', source:'youtube'}));
		
		mockList.add(new BCNewsItem({title:'Bungie has released Bungie.next to beta!', url:'http://www.bungie.net', pubDate:'Wed Jan 16 02:42:25 +0000 2013', source:'twitter', itemId:'g7g7g7'}));
		mockList.add(new BCNewsItem({title:'Se7enty 7', url:'http://www.bungie.net', pubDate:'Wed Jan 16 11:42:25 +0000 2013', source:'bnet'}));
		mockList.add(new BCNewsItem({title:'O Brave New World', url:'http://www.youtube.com', pubDate:'Wed Jan 16 12:42:25 +0000 2013', source:'youtube'}));
		return mockList;
	
	}

})();
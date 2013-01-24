// main front end manager. Maintains all resources and passes them
// to calling pages and elements for display and interaction.
(function() {
	var $j = jQuery.noConflict();
	var _bnetClient = null;
	var _pages = {};
	var _contentBody = null;
	var _navMenuWidget = null;
	
	BNetCompanion = function() {
		_bnetClient = chrome.extension.getBackgroundPage().bnetClient;		
		_contentBody = document.getElementById('bc-content');
		
		_navMenuWidget = new BCNavMenuWidget(this);
		_navMenuWidget.render();
		
		_pages['newsPage'] = new BCNewsWidget(this);
		_pages['newsPage'].render();
	};
	
	BNetCompanion.prototype.start = function() {
	};
	
	BNetCompanion.prototype.getNewsFeed = function() {
		return _bnetClient.getNews();
	};
	
	BNetCompanion.prototype.bind = function(selector, event, handler) {
		$j(selector).bind(event, handler);
	};

	BNetCompanion.prototype.on = function(parent, selector, event, handler) {
		console.log('hi ho...');
		$j(parent).on(event, selector, handler);
	};
	
	BNetCompanion.prototype.openPage = function(pageKey) {
		$j(_contentBody).children().remove();
		_pages[pageKey + 'Page'].render();
	};
	
	BNetCompanion.prototype.openItem = function(url) {
		_bnetClient.openItem(url);
	};
	
})();

(function() {
	var _sandbox = null;	
	
	BCNewsWidget = function(sandbox) {
		_sandbox = sandbox;
		
	};
	
	BCNewsWidget.prototype.render = function() {
		var root = document.getElementById('bc-content');
		
		var newsUl = root.appendChild(document.createElement('ul'));
		newsUl.className = 'bc-news-list';
		
		var newsFeed = _sandbox.getNewsFeed();
		
		for ( var i in newsFeed.keys ) {
			if ( newsFeed.keys.hasOwnProperty(i) ) {
				drawNewsItem(newsUl, newsFeed.items[newsFeed.keys[i]]);
			}
		}
		_sandbox.bind('.bc-news-item', 'click', openNewsItem);
	};
		
	var drawNewsItem = function(parent, item) {
		// set up the containing LI
		var newsItemBox = parent.appendChild(document.createElement('li'));
		newsItemBox.className = 'bc-news-item';
		newsItemBox.setAttribute('data-item-link', item.url);
		
		// now add the image
		var itemImg = newsItemBox.appendChild(document.createElement('img'));
		itemImg.src = 'images/' + item.source + (item.source[0] == 'y' ? '.png' : '.gif');
		
		// render the title
		var itemText = newsItemBox.appendChild(document.createElement('p'));
		itemText.className = 'bc-news-details';
		itemText.innerText = item.title.substring(0,60).concat('...');
		
		// lastly, the pubdate
		var itemDate = newsItemBox.appendChild(document.createElement('span'));
		itemDate.className = 'bc-news-pub-date';
		itemDate.innerText = item.pubDate;
	};
	
	var openNewsItem = function() {
		console.log('clicked! ');
		console.log(this.getAttribute('data-item-link'));
		_sandbox.openItem(this.getAttribute('data-item-link'));
	};
	
})();



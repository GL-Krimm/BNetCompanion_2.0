// main front end manager. Maintains all resources and passes them
// to calling pages and elements for display and interaction.
(function() {
	var $j = jQuery.noConflict();
	var _bnetClient = null;
	var _pages = {};
	
	BNetCompanion = function() {
		_bnetClient = chrome.extension.getBackgroundPage().bnetClient;		
		_pages.newsPage = new BCNewsPage(this);
		_pages.newsPage.render();
	};
	
	BNetCompanion.prototype.start = function() {
	};
	
	BNetCompanion.prototype.getNewsFeed = function() {
		return _bnetClient.getNews();
	};
	
	BNetCompanion.prototype.bind = function(selector, event, handler) {
		$j(selector).bind(event, handler);
	};
	
	BNetCompanion.prototype.openItem = function(url) {
		_bnetClient.openItem(url);
	};
	
})();
	
(function() {
	var _sandbox = null;
	
	BCPage = function(sandbox) {
		_sandbox = sandbox;
	};
	
	BCPage.prototype.render = function() {
		
	};
	
})();

(function() {
	var _sandbox = null;

	BCNewsPage = function(sandbox) {
		_sandbox = sandbox;
	}
	
	BCNewsPage.prototype.render = function() {
		
		var list = _sandbox.getNewsFeed();
		var keys = list.getKeys();
		
		if ( keys ) {
			var titleElem = document.getElementById('bc-page-title');
		titleElem.innerText = "Bungie News";

		var contentElem = document.getElementById('bc-content');
		var newsUl = contentElem.appendChild(document.createElement('ul'));
		newsUl.id = 'bc-news';
		newsUl.className = 'bc-news-list';
		
		keys.forEach(function(key) {
			console.log(list.item(key));
			list.item(key).render(newsUl);
		});
		
		_sandbox.bind('.bc-news-item', 'click', openNewsItem);

		}
		
			
	};
	
	openNewsItem = function() {
		_sandbox.openItem(this.getAttribute('data-item-link'));
	};
	
})();


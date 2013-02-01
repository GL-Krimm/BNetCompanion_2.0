// main front end manager. Maintains all resources and passes them
// to calling pages and elements for display and interaction.
(function() {
	var $j = jQuery.noConflict();
	var _bnetClient = null;
	var _pages = {};
	var _contentBody = null;
	var _navMenuWidget = null;
	var _contentRoot = null;
	var _currentPageKey = null;
	
	BNetCompanion = function() {
	
		_contentRoot = document.getElementById('bc-content');
	
		_bnetClient = chrome.extension.getBackgroundPage().bnetClient;		
		_contentBody = document.getElementById('bc-content');
		
		_navMenuWidget = new BCNavMenuWidget(this);
		_navMenuWidget.render();
		
		_pages['profilePage'] = new BCProfilePageWidget(this);
		_pages['newsPage'] = new BCNewsWidget(this);
		_pages['morePage'] = new BCMorePageWidget(this);
		
		for ( var i = 0; i < bcTextPages.length; i ++ ) {
			_pages[bcTextPages[i].title + 'Page'] = new BCGenericTextPage(this, bcTextPages[i].messages);
		}

		_pages['settingsPage'] = new BCSettingsWidget(this);
		
		this.openPage('news');
		this.checkForAndRenderNewNews();		
	};
	
	BNetCompanion.prototype.getNewsFeed = function() {
		return _bnetClient.getNews();
	};
	
	BNetCompanion.prototype.bind = function(selector, event, handler) {
		$j(selector).bind(event, handler);
	};

	BNetCompanion.prototype.on = function(parent, selector, event, handler) {
		$j(parent).on(event, selector, handler);
	};
	
	BNetCompanion.prototype.removeClass = function(selector, className) {
		$j(selector).removeClass(className);
	};
	
	BNetCompanion.prototype.getContentRoot = function() {
		return _contentRoot;
	};
	
	BNetCompanion.prototype.openPage = function(pageKey) {
		openPageFromKey(pageKey);	
	};
	
	BNetCompanion.prototype.openItem = function(url) {
		_bnetClient.openItem(url);
	};
	
	BNetCompanion.prototype.getNotificationSetting = function() {
		return _bnetClient.getPlayNotifications();
	};	

	BNetCompanion.prototype.setNotificationSetting = function(value) {
		return _bnetClient.setPlayNotifications(value);
	};

	// responsible for finding and rendering new news
	// items in the event the window is still open when
	// new news is received
	BNetCompanion.prototype.checkForAndRenderNewNews = function() {
		if ( ( _currentPageKey == 'news' ) && localStorage.newItemsFetched == 'true' ) {
			localStorage.newItemsFetched = false;
			openPageFromKey('news');
		}
		setTimeout(arguments.callee,1000);
	};
	
	var openPageFromKey = function(pageKey) {
		_currentPageKey = pageKey;
	
		var pageTitle = pageKey.replace('Page','');
		
		pageTitle = pageTitle[0].toUpperCase() + pageTitle.substring(1, pageTitle.length);
		
		var pageTitleElem = document.getElementById('bc-page-title');
		pageTitleElem.innerText = pageTitle;
		
		$j(_contentBody).children().remove();
		
		if ( _pages[pageKey + 'Page'] ) {
			_pages[pageKey + 'Page'].render();
		}	
	};
		
})();

// news widget
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
		
		var keys = newsFeed.getKeys();
		for ( var i in keys ) {
			if ( keys.hasOwnProperty(i) ) {
				drawNewsItem(newsUl, newsFeed.item( keys[i] ) );
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
		_sandbox.openItem(this.getAttribute('data-item-link'));
	};
	
})();

//profile page widget
(function() {
	var _sandbox = null;
	
	BCProfilePageWidget = function(sandbox) {
		_sandbox = sandbox;
		this.menu = new BCInPageMenuWidget(_sandbox, bcProfilePageButtons);
	};
	
	BCProfilePageWidget.prototype.render = function() {
		var root = document.getElementById('bc-content');
		
		this.menu.render(root);
	};	
	
})();

// mroe page widget
(function() {
	var _sandbox = null;
	var _menuRenderer = null;
	
	BCMorePageWidget = function(sandbox) {
		_sandbox = sandbox;
		_menuRenderer = new BCInPageMenuWidget(_sandbox, bcMorePageButtons);
	};
	
	BCMorePageWidget.prototype.render = function() {
		var root = document.getElementById('bc-content');
		
		_menuRenderer.render(root);
		
		_sandbox.bind('.bc-nav-list li', 'click', openMenuItem);
				
	};
	
	var drawMenuItem = function(container, btn, bottom) {
		var menuBtn = container.appendChild(document.createElement('li'));
		
		if ( bottom ) {
			menuBtn.className = 'bottom-border';
		}
				
		if ( btn.externPage ) {
			menuBtn.setAttribute('data-extern-page', btn.externPage);
		} else if ( btn.targetPage ) {
			menuBtn.setAttribute('data-target-page', btn.targetPage);
		}
		
		var img = menuBtn.appendChild(document.createElement('img'));
		img.src = 'images/' + btn.img;
		
		var titleSpan = menuBtn.appendChild(document.createElement('span'));
		titleSpan.innerText = btn.title;
		
		var arrowSpan = menuBtn.appendChild(document.createElement('span'));
		arrowSpan.className = 'right';
		
		var strong = arrowSpan.appendChild(document.createElement('strong'));
		strong.innerText = '>';
		
	};
	
	var openMenuItem = function() {
		if ( this.getAttribute('data-extern-page') ) {
			_sandbox.openItem(this.getAttribute('data-extern-page'));
		} else if (this.getAttribute('data-target-page')) {
			_sandbox.openPage(this.getAttribute('data-target-page'));
		}
	};
	
})();

// back button widget
(function() {
	var _sandbox = null;
	
	BCBackButton = function(sandbox) {
		_sandbox = sandbox;
	};
	
	BCBackButton.prototype.render = function() {
		var btn = _sandbox.getContentRoot().appendChild(document.createElement('span'));
		btn.className = 'bc-button';
		btn.id = 'bc-back-more';
		btn.innerText = "< More";
		
		//special case for the more button - hook up click handler here
		//since it may or may not be there in other views
		_sandbox.bind(btn, 'click', function() {
			_sandbox.openPage('more');
		});
		
	};
	
})();

// Generic Text Pages
(function() {
	var _sandbox = null;
	var _backButton = null;
	
	BCGenericTextPage = function(sandbox, messages) {
		_sandbox = sandbox;
		_backButton = new BCBackButton(_sandbox);
		this._messages = messages;
	};
	
	BCGenericTextPage.prototype.render = function() {
		_backButton.render();
		var msgElem = null;
		
		this._messages.forEach(function(message) {
			_sandbox.getContentRoot().appendChild(document.createElement('br'));
			msgElem = _sandbox.getContentRoot().appendChild(document.createElement('p'));
			msgElem.innerText = message;			
		});
		
	};
	
})();

// generic in-page menu 'sub-widget'
(function() {
	var _sandbox = null;
	
	BCInPageMenuWidget = function(sandbox, menu) {
		_sandbox = sandbox;
		this.menu = menu;
	};
	//this.menu
	BCInPageMenuWidget.prototype.render = function(rootElem) {
		var menuContainer = rootElem.appendChild(document.createElement('ul'));
		menuContainer.className = 'bc-nav-list';
		
	    var i = 0;
		var limit = this.menu.length;
		var bottom = true;
		
		for ( i; i < limit; i++ ) {
			if ( i == limit - 1 ) {
				bottom = false;
			}
			drawMenuItem(menuContainer, this.menu[i], bottom);
		}
				
	};
	
	var drawMenuItem = function(container, btn, bottom) {
		var menuBtn = container.appendChild(document.createElement('li'));
		
		if ( bottom ) {
			menuBtn.className = 'bottom-border';
		}
				
		if ( btn.externPage ) {
			menuBtn.setAttribute('data-extern-page', btn.externPage);
		} else if ( btn.targetPage ) {
			menuBtn.setAttribute('data-target-page', btn.targetPage);
		}
		
		var img = menuBtn.appendChild(document.createElement('img'));
		img.src = 'images/' + btn.img;
		
		var titleSpan = menuBtn.appendChild(document.createElement('span'));
		titleSpan.innerText = btn.title;
		
		var arrowSpan = menuBtn.appendChild(document.createElement('span'));
		arrowSpan.className = 'right';
		
		var strong = arrowSpan.appendChild(document.createElement('strong'));
		strong.innerText = '>';
		
	};
	
})();

// Settings page
(function() {
	var _sandbox = null;
	var _backButton = null;
	
	BCSettingsWidget = function(sandbox) {
		_sandbox = sandbox;
		_backButton = new BCBackButton(_sandbox);
	};
	
	BCSettingsWidget.prototype.render = function() {
		_backButton.render();
		
		var container = _sandbox.getContentRoot().appendChild(document.createElement('div'));
		container.className = 'align-left ';
		
		
		container.appendChild(document.createElement('br'));
		var storage = container.appendChild(document.createElement('p'));
		
		storage.innerText = bcTextResources.settingsConnectWithTwitter;
		
		container.appendChild(document.createElement('br'));
		
		var connectBtn = container.appendChild(document.createElement('span'));
		connectBtn.className = 'span-button'
		connectBtn.innerText = 'Connect with Twitter';
		connectBtn.setAttribute('style', 'margin-left:0.5em;');
		
		container.appendChild(document.createElement('br'));
		container.appendChild(document.createElement('br'));
		
		//Play notification sounds? 
		var notificationSpan = container.appendChild(document.createElement('span'));
		notificationSpan.innerText = 'Play notification sound?';
		notificationSpan.setAttribute('style', 'margin-left:0.5em;');
		
		var chckBox = container.appendChild(document.createElement('input'));
		chckBox.setAttribute('type', 'checkbox');
		chckBox.setAttribute('style', 'margin-left:0.5em;');
		chckBox.checked = _sandbox.getNotificationSetting() == 'true';	
		
		_sandbox.bind(chckBox, 'change', changeNotificationSettings);
		
	};
	
	var changeNotificationSettings = function() {
		_sandbox.setNotificationSetting(this.checked);
		console.log(_sandbox.getNotificationSetting());
	};
})();
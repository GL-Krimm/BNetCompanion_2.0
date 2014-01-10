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
		_bnetClient.setBadgeText('');		
		
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

	BNetCompanion.prototype.focus = function(selector) {
		$j(selector).focus();
	};
	
	BNetCompanion.prototype.removeClass = function(selector, className) {
		$j(selector).removeClass(className);
	};
	
	BNetCompanion.prototype.focus = function(selector) {
		$j(selector).focus();
	};
	
	BNetCompanion.prototype.slideRemove = function(selector) {
		$j(selector).fadeOut(function() {
			$j(selector).slideUp('slowest', function() {
				$j(selector).remove();
			});
		});
	};
		
	BNetCompanion.prototype.slideDown = function(selector) {
		$j(selector).slideDown('slow');
	};

	BNetCompanion.prototype.slideUp = function(selector) {
		$j(selector).animate({height:0}, 'slow');
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
	
	BNetCompanion.prototype.connectedToTwitter = function() {
		return _bnetClient.clientConnectedToTwitter();
	};	
	
	BNetCompanion.prototype.getNotificationSetting = function(settingName) {
		return _bnetClient.getNotificationSetting(settingName);
	};	

	BNetCompanion.prototype.setNotificationSetting = function(settingName, value) {
		return _bnetClient.setNotificationSetting(settingName, value);
	};

	BNetCompanion.prototype.sendRetweet = function(tweetId) {
		_bnetClient.retweet(tweetId);
	};	
	
	BNetCompanion.prototype.favoriteTweet = function(tweetId) {
		_bnetClient.favoriteTweet(tweetId);
	};	
	
	BNetCompanion.prototype.sendReply = function(tweetId, msg) {
		_bnetClient.reply(tweetId, msg);
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
	
	BNetCompanion.prototype.requestTwitterToken = function() {
		_bnetClient.requestTwitterToken();
	};
	
	BNetCompanion.prototype.signOutFromTwitter = function() {
		_bnetClient.signOutFromTwitter();
		openPageFromKey(_currentPageKey);
	};
	
	var openPageFromKey = function(pageKey) {
		_currentPageKey = pageKey;
	
		//var pageTitle = pageKey.replace('Page','');
		
		var pageTitle = pageKey[0].toUpperCase() + pageKey.substring(1, pageKey.length);
		
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
		_sandbox.bind('.bc-twitter-task', 'click', handleTwitterCommand);
	};
		
	var drawNewsItem = function(parent, item) {
		// set up the containing LI
		var newsItemBox = parent.appendChild(document.createElement('li'));
		newsItemBox.className = 'bc-news-item';
		newsItemBox.setAttribute('data-item-link', item.url);
		newsItemBox.setAttribute('data-full-tweet', item.title);
		
		
		// now add the image
		var itemImg = newsItemBox.appendChild(document.createElement('img'));
		itemImg.src = 'images/' + item.source + (item.source[0] == 'y' ? '.png' : '.gif');
		
		// render the title
		var itemText = newsItemBox.appendChild(document.createElement('p'));
		itemText.className = 'bc-news-details';
		console.log(JSON.stringify(item));
		itemText.innerText = item.title.substring(0,60).concat('...');
		
		// lastly, the pubdate
		var itemDate = newsItemBox.appendChild(document.createElement('span'));
		itemDate.className = 'bc-news-pub-date';
		itemDate.innerText = item.pubDate;
		
		if ( item.source == 'twitter' &&  _sandbox.getNotificationSetting('twitterAuthToken') ) {
			
			newsItemBox.setAttribute('data-tweet-id', item.itemId);
		
			//render reply button
			var twitterOptions = newsItemBox.appendChild(document.createElement('div'));
			twitterOptions.className = 'bc-twitter-options';
			
			var btn = twitterOptions.appendChild(document.createElement('span'));
			//btn.textContent = "F";
			btn.className = 'bc-twitter-task bc-twitter-favorite';
			btn.setAttribute('data-action', 'favorite');
			btn.title = 'Favorite';
			
			btn = twitterOptions.appendChild(document.createElement('span'));
			//btn.textContent = " RT";
			btn.className = 'bc-twitter-task bc-twitter-retweet';
			btn.setAttribute('data-action', 'retweet');
			btn.title = 'Retweet';
			
			btn = twitterOptions.appendChild(document.createElement('span'));
			//btn.textContent = " R";
			btn.className = 'bc-twitter-task bc-twitter-reply';
			btn.setAttribute('data-action', 'reply');
			btn.title = 'Reply';
		}
		
	};
	
	var handleTwitterCommand = function(e) {
		e.stopPropagation();
		var task = this.getAttribute('data-action');
		switch ( task ) {
			case 'reply' : {
				openReplyBox(this);
			} break;
			case 'retweet' : {
				sendRetweet(this);
			} break;
			case 'favorite' : {
				favoriteTweet(this);
			} break;
		}
		
	};
	
	var openReplyBox = function(btn) {
		var container = btn.parentNode.parentNode; //refactor into something more flexible
		
		if ( container.getElementsByClassName('bc-tweet-reply-cont').length == 0 ) {
			var sendField = container.appendChild(document.createElement('div'));
			sendField.className = 'bc-tweet-reply-cont hidden';
			
			var tArea = sendField.appendChild(document.createElement('textarea'));
			tArea.className = 'bc-retweet-field';
			_sandbox.focus(tArea);
			tArea.value = container.getAttribute('data-full-tweet').match(/@[a-z0-9]+[\s]/gi).join('');
			
			if ( tArea.value.toLowerCase().indexOf('@bungie') < 0 ) {
				tArea.value = '@Bungie ' + tArea.value;
			}
			
			var sendBtn = sendField.appendChild(document.createElement('button'));
			sendBtn.className = 'send-tweet-reply';
			sendBtn.textContent = 'Send';
			
			var cancelBtn = sendField.appendChild(document.createElement('button'));
			cancelBtn.className = 'send-tweet-reply';
			cancelBtn.textContent = 'Cancel';

			_sandbox.slideDown(sendField);
			_sandbox.focus(tArea);
			
			_sandbox.bind(sendBtn, 'click', function(e) {
				e.stopPropagation();
								
				_sandbox.sendReply(container.getAttribute('data-tweet-id'), tArea.value);
				_sandbox.slideRemove(sendField);
			});
			
			_sandbox.bind(cancelBtn, 'click', function(e) {
				e.stopPropagation();
				_sandbox.slideRemove(sendField);
			});
			
			_sandbox.bind(sendField, 'click', function(e) {
				//console.log('user entered field...');
				e.stopPropagation(); // don't allow clicks into the text field to open the containing item
			});
		}
	};
	
	var sendRetweet = function(button) {
		_sandbox.sendRetweet(button.parentNode.parentNode.getAttribute('data-tweet-id'));
	};
	
	var favoriteTweet = function(button) {
		_sandbox.favoriteTweet(button.parentNode.parentNode.getAttribute('data-tweet-id'));
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

// more page widget
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
		
		renderTwitterButton(container);
		
		container.appendChild(document.createElement('br'));
		container.appendChild(document.createElement('br'));
		
		//Play notification sounds? 
		var notificationSpan = container.appendChild(document.createElement('span'));
		notificationSpan.innerText = 'Play notification sound?';
		notificationSpan.setAttribute('style', 'margin-left:0.5em;');
		
		var chckBox = container.appendChild(document.createElement('input'));
		chckBox.setAttribute('type', 'checkbox');
		chckBox.setAttribute('style', 'margin-left:0.5em;');
		chckBox.setAttribute('data-setting-name', 'playNotificationsSound');
		chckBox.checked = _sandbox.getNotificationSetting('playNotificationsSound') == 'true';	
		
		_sandbox.bind(chckBox, 'change', changeNotificationSettings);
		
		container.appendChild(document.createElement('br'));
		
		//Show notification popups? 
		var popupSpan = container.appendChild(document.createElement('span'));
		popupSpan.innerText = 'Show notification popups?';
		popupSpan.setAttribute('style', 'margin-left:0.5em;');
		
		var notifCheckBx = container.appendChild(document.createElement('input'));
		notifCheckBx.setAttribute('type', 'checkbox');
		notifCheckBx.setAttribute('style', 'margin-left:0.5em;');
		notifCheckBx.setAttribute('data-setting-name', 'showNotifications');
		notifCheckBx.checked = _sandbox.getNotificationSetting('showNotifications') == 'true';	
		
		_sandbox.bind(notifCheckBx, 'change', changeNotificationSettings);
				
	};
	
	var changeNotificationSettings = function() {
		_sandbox.setNotificationSetting(this.getAttribute('data-setting-name'), this.checked);
	};
	
	var renderTwitterButton = function(container) {
		var btnKey = _sandbox.connectedToTwitter() ? 'signedIn' : 'signedOut';
		
		var connectBtn = container.appendChild(document.createElement('span'));
		connectBtn.className = 'span-button ' + bcTwitterButtons[btnKey].className;
		connectBtn.innerText = bcTwitterButtons[btnKey].text;
		connectBtn.setAttribute('style', 'margin-left:0.5em;');
		
		var btnHandler = _sandbox.connectedToTwitter() ? _sandbox.signOutFromTwitter : _sandbox.requestTwitterToken;
		
		_sandbox.bind(connectBtn, 'click', btnHandler);
	};
	
})();
// menu button
(function() {	

	var _title = null;
	var _targetPage = null;
	var _thumbnail = null;
	
	BCMenuItem = function(title, page, thumbnail) {
		_title = title;
		_targetPage = page;
		_thumbnail = thumbnail;
		
		open = function() {
			//_targetPage.render();
		};
	};
	
	BCMenuItem.prototype.render = function(parent) {
		var menuItemBox = parent.appendChild(document.createElement('li'));
		var thumbNailBox = menuItemBox.appendChild(document.createElement('img'));
		thumbNailBox.src = _thumbnail;
		
		var menuItemText = menuItemBox.appendChild(document.createElement('span'));
		menuItemText.innerText = _title;
		
		var openSpan = menuItemBox.appendChild(document.createElement('span'));
		openSpan.className = 'right';
		
		var strongNode = openSpan.appendChild(document.createElement('strong'));
		strongNode.innerText = ">";
	};
	
})();

// drives the bottom nav buttons - inherits base functionality from
// BCMenuItem object and overrides the render method.

BCNavButton.prototype = new BCMenuItem();

function BCNavButton(title, target, thumbnail) {
	BCMenuItem.call(this, title, target, thumbnail);
}

BCNavButton.prototype.render = function(parent) {
	var btnBox = parent.appendChild(document.createElement('li'));
	btnBox.className = 'bc-nav-item';
	btnBox.innerText = _title;
};
	


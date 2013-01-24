// menu button
(function() {	
	
	BCMenuItem = function(title, page, thumbnail) {
		this._title = title;
		this._targetPage = page;
		this._thumbnail = 'images/' + thumbnail;
	};
	
	/*
	<li intref="news" id="bc-news-button" class="bc-nav-item bc-nav-active">
		<img src="images/news-selected.png">
		<br>
		News
	</li>
	*/
	
	BCMenuItem.prototype.render = function(parent) {
		var menuItemBox = parent.appendChild(document.createElement('li'));
		var thumbNailBox = menuItemBox.appendChild(document.createElement('img'));
		thumbNailBox.src = this._thumbnail;
		
		var menuItemText = menuItemBox.appendChild(document.createElement('span'));
		menuItemText.innerText = this._title;
		
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
	
	var img = btnBox.appendChild(document.createElement('img'));
	img.src = this._thumbnail;
	
	btnBox.appendChild(document.createElement('br'));
	
	btnBox.appendChild(document.createTextNode(this._title));
};
	


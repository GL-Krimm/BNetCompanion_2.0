// news item
(function() {	
	BCNewsItem = function(title, url, pubDate, source, itemId) {
		this._title = title;	
		this._url = url;
		this._pubDate = pubDate;
		this._source = source;
		
		this.itemId = null;
		
		if ( itemId ) {
			this._itemId = itemId;
		}
		
		this._thumbnail = "images/" + source + '.gif';
		
		this.render = function(parent) {
			// set up the containing LI
			var newsItemBox = parent.appendChild(document.createElement('li'));
			newsItemBox.className = 'bc-news-item';
			newsItemBox.setAttribute('data-item-link', this._url);
			
			// now add the image
			var itemImg = newsItemBox.appendChild(document.createElement('img'));
			itemImg.src = this._thumbnail;
			
			// render the title
			var itemText = newsItemBox.appendChild(document.createElement('p'));
			itemText.className = 'bc-news-details';
			itemText.innerText = this._title.substring(0,60).concat('...');
			
			// lastly, the pubdate
			var itemDate = newsItemBox.appendChild(document.createElement('span'));
			itemDate.className = 'bc-news-pub-date';
			itemDate.innerText = this._pubDate;
		};
	};
		
	// Creates and wires the news ite on the page
	/*BCNewsItem.prototype.render = function(parent) {
	
		// set up the containing LI
		var newsItemBox = parent.appendChild(document.createElement('li'));
		newsItemBox.className = 'bc-news-item';
		newsItemBox.setAttribute('data-item-link', this._url);
		
		// now add the image
		var itemImg = newsItemBox.appendChild(document.createElement('img'));
		itemImg.src = this._thumbnail;
		
		// render the title
		var itemText = newsItemBox.appendChild(document.createElement('p'));
		itemText.className = 'bc-news-details';
		itemText.innerText = this._title.substring(0,60).concat('...');
		
		// lastly, the pubdate
		var itemDate = newsItemBox.appendChild(document.createElement('span'));
		itemDate.className = 'bc-news-pub-date';
		itemDate.innerText = this._pubDate;
	};*/
	
})();

// news item list
(function() {
	BCNewsList = function(storedList) {
		this.keys = new Array();
		this.items = {};
		
		if ( storedList ) {
			this.keys = storedList.keys;
			this.items = storedList.items;
		}
		
	};
	
	BCNewsList.prototype.getKeys = function() {
		return this.keys.sort(sortKeys);
	};
	
	BCNewsList.prototype.speak = function(msg) {
		console.log(msg);
	};
	
	BCNewsList.prototype.add = function(item) {
		var key = item._source[0] + '-';
		key += item._pubDate;
		
		if ( !this.items[key] ) {
			this.items[key] = item;
			this.keys.push(key);
		
			console.log(this.items[key]._title);
		}
	};
	
	BCNewsList.prototype.item = function(key) {
		return this.items[key];
	};
	
	BCNewsList.prototype.itemAt = function(index) {
		return this.items[this.keys[index]];
	};
	
	var sortKeys = function(a,b) {
		var dateA = a.replace(/^[bty]-/,'');
		dateA = new Date(dateA);
		
		var dateB = b.replace(/^[bty]-/,'');
		dateB = new Date(dateB);
	};
	
})();
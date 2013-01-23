// news item
(function() {	
	BCNewsItem = function(itemHash) {
		this.title = null;	
		this.url = null;
		this.pubDate = null;
		this.source = null;		
		this.itemId = null;
		this.thumbnail = null;
		
		this.title = itemHash.title;
		this.url = itemHash.url;
		this.pubDate = itemHash.pubDate;
		this.source = itemHash.source;
		
		this.thumbnail = 'images/' + this.source + '.gif';
		
		if ( itemHash.itemId ) {
			this.itemId = itemHash.itemId;
		} 
		
	};
		
	// Creates and wires the news ite on the page
	BCNewsItem.prototype.render = function(parent) {
	
		// set up the containing LI
		var newsItemBox = parent.appendChild(document.createElement('li'));
		newsItemBox.className = 'bc-news-item';
		newsItemBox.setAttribute('data-item-link', this.url);
		
		// now add the image
		var itemImg = newsItemBox.appendChild(document.createElement('img'));
		itemImg.src = this.thumbnail;
		
		// render the title
		var itemText = newsItemBox.appendChild(document.createElement('p'));
		itemText.className = 'bc-news-details';
		itemText.innerText = this.title.substring(0,60).concat('...');
		
		// lastly, the pubdate
		var itemDate = newsItemBox.appendChild(document.createElement('span'));
		itemDate.className = 'bc-news-pub-date';
		itemDate.innerText = this.pubDate;
	};
	
})();

// news item list
(function() {
	BCNewsList = function(storedList) {
		this.keys = new Array();
		this.items = {};
		
		if ( storedList ) {
			this.keys = storedList.keys;
			for (var item in storedList.items) {
				
				if ( storedList.items.hasOwnProperty(item) ) {
					
					this.items[item] = new BCNewsItem(storedList.items[item]);
				} 
			}
		}
		
	};
	
	BCNewsList.prototype.getKeys = function() {
		return this.keys.sort(sortKeys);
	};
	
	BCNewsList.prototype.add = function(item) {
		var key = item.source[0] + '-';
		key += item.pubDate;
		
		if ( !this.items[key] ) {
			this.items[key] = item;
			this.keys.push(key);
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
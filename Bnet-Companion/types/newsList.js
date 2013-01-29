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
	
	BCNewsList.prototype.add = function(item) {
	
		var key = item.source[0] + '-';
		key += new Date(item.pubDate);//.getUTCSeconds();
		
		console.log(key);
		
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
		console.log(a);
		var dateA = a.replace(/^[bty]-/,'');
		console.log(dateA);
		
		dateA = new Date(dateA);
		
		console.log(b);
		var dateB = b.replace(/^[bty]-/,'');
		console.log(dateB);
		
		dateB = new Date(dateB);
				
		var delta = dateB - dateA;
		
		console.log(delta);
		return delta;
	};
	
})();
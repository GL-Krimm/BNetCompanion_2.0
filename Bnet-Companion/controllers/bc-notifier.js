/*
	Content script for putting in-window notifications out when new items are discovered.
*/

(function() {
	var _sandbox = null;
	
	BcNotifierWidget = function(sandbox) {
		//_sandbox = sandbox;
	};
	
	BcNotifierWidget.prototype.notify = function() {
		var notification = document.createElement('span');
		notification.textContent = 'Hello, World!';
		document.body.insertBefore(notification, document.body.firstChild);
	};
	
})();

notifier = new BcNotifierWidget();
var bnetClient;

(function() {
	bnetClient = new BcBnetClient();
	
	chrome.browserAction.setBadgeBackgroundColor({color:[0, 150, 219, 255]});
	chrome.browserAction.setBadgeText({text:"Dev"});
	
})();
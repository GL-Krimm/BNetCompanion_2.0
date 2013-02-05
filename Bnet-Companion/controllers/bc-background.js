var bnetClient;

function getSearchParams() {
	var params = {};
	window.location.search.replace('?','').split('&').forEach(function(item) {
		var p = item.split('=');
		params[p[0]] = p[1];
	});
	return params;
}

jQuery(document).ready(function() {
	
	bnetClient = new BcBnetClient();
	
	chrome.browserAction.setBadgeBackgroundColor({color:[0, 150, 219, 255]});
	chrome.browserAction.setBadgeText({text:"Dev"});
	
	var params = null;
	if ( window.location.search ) {
		console.log(window.location.search);
		// check item and get it in the same call.
		if ( params = getSearchParams() ) {
			bnetClient.setTwitterAuthToken(params.oauth_token);
		
			window.open('', '_self', ''); //gets a handle on the background page when opened by omniauth callback...
			window.close(); //then closes it
		}

	}
	
});
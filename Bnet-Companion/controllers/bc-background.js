var bnetClient;

function getSearchParams(searchStr) {
	var params = {};
	searchStr.replace('?','').split('&').forEach(function(item) {
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
		// check item and get it in the same call.
		if ( params = bnetClient.getSearchParams(window.location.search) ) {
			console.log('hi');
			bnetClient.signIntoTwitter(params.oauth_token, params.oauth_verifier);
		
			window.open('', '_self', ''); //gets a handle on the background page when opened by omniauth callback...
			//window.close(); //then closes it
		}

	}
	
});
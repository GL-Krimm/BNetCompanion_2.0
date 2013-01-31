var bnetClient;

jQuery(document).ready(function() {
	
	bnetClient = new BcBnetClient();
	
	chrome.browserAction.setBadgeBackgroundColor({color:[0, 150, 219, 255]});
	chrome.browserAction.setBadgeText({text:"Dev"});
	
	
	var d = window.location.href.split("?");
	
	if (d[1]) {
		d = d[1].split("&");
		for ( var i in d ) {
			var c = d[i].split("=");
			if ( c[0] == "oauth_token" ) {
				//bnetClient.setTwitterAuthToken(c[1]);
				//localStorage.accessToken = c[1];
			}
		}
		window.open('', '_self', ''); //gets a handle on the background page when opened by omniauth callback...
		window.close(); //then closes it
	}
	
});
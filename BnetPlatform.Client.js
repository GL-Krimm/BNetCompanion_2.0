 
Globals = {};

Globals.ForumTopicsSortEnum = {
	Default : 0,
	LastReplied : 1,
	MostReplied : 2,
	Popularity : 3,
	Controversiality : 4
};





Globals.ForumTopicsCategoryFiltersEnum = {
	None : 0,
	Links : 1,
	Questions : 2,
	AnsweredQuestions : 4,
	Media : 8,
	TextOnly : 16,
	Announcement : 32,
	BungieOfficial : 64
};





Globals.ForumPostCategoryEnums = {
	None : 0,
	TextOnly : 1,
	Media : 2,
	Link : 4,
	Poll : 8,
	Question : 16,
	Answered : 32,
	Announcement : 64,
	ContentComment : 128,
	BungieOfficial : 256,
	NinjaOfficial : 512
};





Globals.ForumTopicsQuickDateEnum = {
	All : 0,
	LastYear : 1,
	LastMonth : 2,
	LastWeek : 3,
	LastDay : 4
};





Globals.NotificationType = {
	MESSAGE : 1,
	FORUM_REPLY : 2,
	NEW_ACTIVITY_ROLLUP : 3,
	SETTINGS_CHANGE : 4,
	GROUP_ACCEPTANCE : 5,
	GROUP_JOIN_REQUEST : 6,
	FOLLOW_USER_ACTIVITY : 7,
	FRIEND_USER_ACTIVITY : 8,
	FORUM_LIKE : 9,
	FOLLOWED : 10,
	GROUP_BANNED : 11,
	BANNED : 12,
	UNBANNED : 13
};





Globals.NotificationMethod = {
	EMAIL : 1,
	MOBILE_PUSH : 2,
	WEB_ONLY : 4
};





Globals.GroupDateRange = {
	All : 0,
	PastDay : 1,
	PastWeek : 2,
	PastMonth : 3,
	PastYear : 4
};





Globals.GroupSortBy = {
	Name : 0,
	Date : 1,
	Popularity : 2,
	Id : 3
};





Globals.TextParameterSearchType = {
	Contains : 0,
	Exact : 1,
	StartsWith : 2,
	EndsWith : 3
};





Globals.IgnoredItemType = {
	All : 0,
	Post : 1,
	Group : 2,
	User : 3,
	Tag : 4
};





Globals.IgnoreLength = {
	None : 0,
	Week : 1,
	TwoWeeks : 2,
	ThreeWeeks : 3,
	Month : 4,
	ThreeMonths : 5,
	SixMonths : 6,
	Year : 7,
	Forever : 8,
	ThreeMinutes : 9,
	Hour : 10
};





Globals.CredentialTypeEnum = {
	None : 0,
	Xuid : 1,
	Psnid : 2,
	Wlid : 3,
	UnusedSlot1 : 4,
	Facebook : 5,
	UnusedSlot2 : 6,
	UnusedSlot3 : 7,
	Google : 8,
	Windows : 9
};





Globals.ActivityAggregationType = {
	None : 0,
	Activities : 1,
	Followers : 2
};





Globals.ActivityType = {
	Create : 0,
	Edit : 1,
	Delete : 2,
	Rate : 3,
	Follow : 4,
	Unfollow : 5,
	Apply : 6,
	Rescind : 7,
	Approve : 8,
	Deny : 9,
	Kick : 10,
	EditMembershipType : 11,
	Like : 12,
	Unlike : 13,
	Share : 14,
	TaggedGroup : 15,
	TaggedTopic : 16,
	AvatarChanged : 17,
	DisplayNameChanged : 18,
	TitleChanged : 19,
	TitleUnlocked : 20,
	GroupTopicCreate : 21,
	GroupReplyCreate : 22,
	Reply : 23,
	None : -1
};





Globals.AffectedItemType = {
	User : 0,
	Post : 1,
	Topic : 2,
	Group : 3,
	Tag : 4,
	None : -1
};





Globals.ActivityStatus = {
	Processing : 0,
	Failed : 1,
	Skipped : 2,
	Complete : 3
};





Globals.ActivityItemOrigin = {
	FollowedGroup : 0,
	FollowedUser : 1,
	ActivitiesAboutMe : 2,
	MyActivities : 3,
	Undetermined : -1
};





Globals.ActivityQueryFilter = {
	All : 0,
	Friends : 1,
	Following : 2,
	Groups : 3,
	Mine : 4,
	Tags : 5
};





Globals.ForumFlagsEnum = {
	None : 0,
	BungieStaffPost : 1,
	ForumNinjaPost : 2
};





Globals.AclEnum = {
	None : 0,
	BNextForumNinja : 1,
	BNextUnlimitedGroups : 2,
	BNextFounderInAllGroups : 3,
	BNextBungieGold : 4,
	BNextNinjaColors : 5,
	BNextMakeOfficialTopics : 6,
	BNextMakeNinjaTopics : 7,
	BNextDeleteForumTopics : 8,
	BNextOverturnReports : 9,
	BNextBrowseReports : 10,
	BNextGlobalIgnore : 11,
	BNextEditAnyPublicPost : 12
};





Globals.IgnoreStatus = {
	NotIgnored : 0,
	IgnoredUser : 1,
	IgnoredGroup : 2,
	IgnoredByGroup : 4,
	IgnoredPost : 8,
	IgnoredTag : 16,
	IgnoredGlobal : 32
};





Globals.ContentDateRange = {
	All : 0,
	Today : 1,
	Yesterday : 2,
	ThisMonth : 3,
	ThisYear : 4,
	LastYear : 5,
	EarlierThanLastYear : 6
};





Globals.ContentSortBy = {
	CreationDate : 0,
	CmsPath : 1
};





Globals.FriendOnlineStatus = {
	Offline : 0,
	Online : 1,
	Idle : 2
};





Globals.ForumPostPopularity = {
	Empty : 0,
	Default : 1,
	Discussed : 2,
	CoolStory : 3,
	HeatingUp : 4,
	Hot : 5
};





Globals.MembershipOption = {
	Reviewed : 0,
	Open : 1,
	Closed : 2
};





Globals.SuccessMessages = {
	Following : 1,
	Unfollowing : 2,
	ManagingGroupMembers : 8,
	UpdatingSettings : 16,
	ManagingGroups : 32
};





Globals.ExternalService = {
	None : 0,
	Twitter : 1,
	Facebook : 2,
	Youtube : 3
};





/****** This code is auto-generated. Modifications to this file will not be saved. Alter the associated tt file instead. ******/

var bungieNetPlatform = {};
/* stores all the current requests made via bungienetPlatform, removed when completes (fail or success), makes it possible to abort specific calls or all calls */
var currentRequests = [];

(function ($) {
    bungieNetPlatform.platformSettings = {
        initialize: function (options) {
            bungieNetPlatform.platformSettings = $.extend(
                bungieNetPlatform.platformSettings,
                $.extend({
                    platformUrl: "/Platform",
                    renderContentEditLinks: false
                }, options)
            );
        }
    };

})(jQuery);

(function ($) {

    function evaluateSuccess(data, callbackSuccess, callbackFailure, dfd, ajax) {
        if (data.Response && data.Response != 0) {
			callbackSuccess(data.Response);
            dfd.resolve(data.Response);
        } else {
            if (data.ErrorCode == 1) {
                callbackSuccess(data.Response);
                dfd.resolve(data.Response);
            } else {
                var error = {
                    errorCode: data.ErrorCode,
                    errorStatus: data.ErrorStatus,
                    errorMessage: data.Message,
					messageData: data.MessageData
                };
                callbackFailure(error);
                dfd.reject(error);	
            }
            
        }
		currentRequest = currentRequests.splice($.inArray(ajax, currentRequests), 1);
    }

    function evaluateFailure(xhr, extype, exObj, callbackFailure, dfd) {
        var error = {
            errorCode: 0,
            errorStatus: "UnknownError",
            errorMessage: "An unknown error occurred.",
			messageData: []
        };
        callbackFailure(error);
        dfd.reject(error);
		currentRequest = currentRequests.splice($.inArray(xhr, currentRequests), 1);
    }

	function getCSRFHeader() {
		var	csfrIdCookie = Cookies.GetMulti(ServerVars.WebAuthCookieName, 'tk');
		if (csfrIdCookie) {return {'x-csrf':csfrIdCookie};}
		//return empty dictionary
		return {};
    }

    bungieNetPlatform.serviceLibrary = {
        /*-- post : a method to standardize the encoding and data/content types we use in POST requests to our web services.
        url = The URL of the web service to be posted to
        properties = an object with members that are used in the given service.
        callbackSuccess = the function to call on success, with results returned (data, jqStatus, jqXHR passed back)
        passed the raw data.Response, whatever it would be.
        callbackFailure = the function to call when an error occurs
        passed object with:
        - errorCode
        - errorStatus
        */
        post: function (url, properties, callbackSuccess, callbackFailure) {
            var dfd = $.Deferred();

            var ajax = $.ajax({
                type: 'POST',
                url: url,
                data: JSON.stringify(properties),
                dataType: 'json',
                contentType: 'application/json; charset=utf-8;',
                processData: false,
				headers:  getCSRFHeader(),
                success: function (data, jqStatus, jqXHR) {
                    evaluateSuccess(data, callbackSuccess, callbackFailure, dfd, jqXHR);
                },
                error: function (xhr, extype, exObj) {
                    evaluateFailure(xhr, extype, exObj, callbackFailure, dfd);
                }
            });
			currentRequests.push(ajax);
            return dfd.promise();
        },
        get: function (url, callbackSuccess, callbackFailure) {
            var dfd = $.Deferred();

            var ajax = $.ajax({
				type: 'GET',
				url: url,
				dataType: 'json',
				headers:  getCSRFHeader(),
                success: function (data, jqStatus, jqXHR) {
                    evaluateSuccess(data, callbackSuccess, callbackFailure, dfd, jqXHR);
                },
				error:function (xhr, extype, exObj) {
                    evaluateFailure(xhr, extype, exObj, callbackFailure, dfd);
                }
            });
			currentRequests.push(ajax);
            return dfd.promise();
        },
		postForm: function (url, formData, isResponseContainer, callbackSuccess, callbackFailure) {
			var dfd = $.Deferred();

            var ajax = $.ajax({
                type: 'POST',
                url: url,
                data: formData,
				headers:  getCSRFHeader(),
				cache: false,
                contentType: false,
                processData: false,
                success: function (data, jqStatus, jqXHR) {
					if (isResponseContainer) {
						evaluateSuccess(data, callbackSuccess, callbackFailure, dfd, jqXHR);
					} else {
						var result = JSON.parse(data);
						callbackSuccess(result);
						dfd.resolve(result);
					}
                },
                error: function (xhr, extype, exObj) {
                    evaluateFailure(xhr, extype, exObj, callbackFailure, dfd);
                }
            });
			currentRequests.push(ajax);
            return dfd.promise();
		}

    };

})(jQuery);

(function ($) {
    bungieNetPlatform.jsonpService = { 
        dataStore: [],
        jsonpData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.jsonpService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.jsonpService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.jsonpService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.jsonpService.dataStore["Set_" + item.id] = item;
            }
        },

        //Gets the signed-in user. 
        GetCurrentUser: function ( qcallback, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/JSONP/GetBungieNetUser/';
            
            var queryString = '?' + 'callback=' + encodeURIComponent(qcallback);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.userService = { 
        dataStore: [],
        userData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.userService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.userService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.userService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.userService.dataStore["Set_" + item.id] = item;
            }
        },

        //Creates a new user. 
        CreateUser: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/CreateUser/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Updates a user based on the current logged in user info. 
        UpdateUser: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/UpdateUser/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Updates a notification setting for the current user. 
        UpdateNotificationSetting: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/Notification/Update/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Updates message flags for the 'success' category of UI messages for a user. 
        EditSuccessMessageFlags: function ( flags, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/MessageFlags/Success/Update/' + encodeURIComponent(flags) + '';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Gets the signed-in user. 
        GetCurrentUser: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetBungieNetUser/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Loads a bungienet user by membership id. 
        GetBungieNetUserById: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetBungieNetUserById/' + encodeURIComponent(id) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Loads aliases of a bungienet membership id. 
        GetUserAliases: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetUserAliases/' + encodeURIComponent(id) + '/';
 
            //cache enabled ... cache profile is: CacheFor5Minutes 
            var cacheValue = bungieNetPlatform.userService.userData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.userService.userData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Returns a list of possible users based on the search string 
        SearchUsers: function ( qq, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/SearchUsers/';
            
            var queryString = '?' + 'q=' + encodeURIComponent(qq);
            url = url + queryString;
 
            //cache enabled ... cache profile is: CacheFor5MinutesPerUserClientQuery 
            var cacheValue = bungieNetPlatform.userService.userData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.userService.userData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Returns this users notification settings. 
        GetNotificationSettings: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetNotificationSettings/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Returns a list of credential types attached to the caller's account 
        GetCredentialTypesForAccount: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetCredentialTypesForAccount/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Returns a list of all available avatars for the signed-in user. 
        GetAvailableAvatars: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetAvailableAvatars/';
 
            //cache enabled ... cache profile is: CacheFor60SecondsPerUserClient 
            var cacheValue = bungieNetPlatform.userService.userData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.userService.userData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Allows a user to pair a mobile app to their account. 
        RegisterMobileAppPair: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/RegisterMobileAppPair/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Allows a user to unregister a mobile app from their account. 
        UnregisterMobileAppPair: function ( appType, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/UnregisterMobileAppPair/' + encodeURIComponent(appType) + '';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Allows a user to pair a mobile app to their account. 
        UpdateStateInfoForMobileAppPair: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/UpdateStateInfoForMobileAppPair/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Gets a user's mobile app pairing states. 
        GetMobileAppPairings: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetMobileAppPairings/';
 
            //cache enabled ... cache profile is: CacheFor60SecondsPerUserClient 
            var cacheValue = bungieNetPlatform.userService.userData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.userService.userData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Gets a user's mobile app pairing states without using the cache. 
        GetMobileAppPairingsUncached: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetMobileAppPairingsUncached/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Gets the url string that will sign the user out if the user's http client is directed to it. 
        GetSignOutUrl: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/User/GetSignOutUrl/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.messageService = { 
        dataStore: [],
        messageData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.messageService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.messageService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.messageService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.messageService.dataStore["Set_" + item.id] = item;
            }
        },

        //Returns a conversation sent to the current logged in user. 
        GetConversationById: function ( conversationId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Message/GetConversationById/' + encodeURIComponent(conversationId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Returns a conversation sent to the current logged in user and another member. 
        GetConversationWithMemberId: function ( membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Message/GetConversationWithMember/' + encodeURIComponent(membershipId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Creates a message based on the current logged in user info. 
        SaveMessageV2: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Message/SaveMessageV2/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Returns conversations sent to the current logged in user. 
        GetConversationsV2: function ( page, pagesize, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Message/GetConversationsV2/' + encodeURIComponent(page) + '/' + encodeURIComponent(pagesize) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Returns the thread between all current users int he conversation. 
        GetConversationThreadV2: function ( conversationId, page, pagesize, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Message/GetConversationThreadV2/' + encodeURIComponent(conversationId) + '/' + encodeURIComponent(page) + '/' + encodeURIComponent(pagesize) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Returns the unread count for the current user 
        GetUnreadConversationCountV2: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Message/GetUnreadConversationCountV2/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Removes the logged in user from the conversation. 
        LeaveConversation: function ( conversationId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Message/LeaveConversation/' + encodeURIComponent(conversationId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.notificationService = { 
        dataStore: [],
        notificationData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.notificationService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.notificationService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.notificationService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.notificationService.dataStore["Set_" + item.id] = item;
            }
        },

        //Gets the recent notifications for the signed in user. 
        GetRecentNotifications: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Notification/GetRecent/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Gets the number of new notifications for the signed-in user. 
        GetRecentNotificationCount: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Notification/GetCount/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Resets the notificaiton list for the signed-in user. 
        ResetNotification: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Notification/Reset/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.contentService = { 
        dataStore: [],
        contentData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.contentService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.contentService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.contentService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.contentService.dataStore["Set_" + item.id] = item;
            }
        },

        //Gets an object describing a particular variant of content. 
        GetContentType: function ( type, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Content/GetContentType/' + encodeURIComponent(type) + '/';
 
            //cache enabled ... cache profile is: CacheFor15Minutes 
            var cacheValue = bungieNetPlatform.contentService.contentData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.contentService.contentData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Returns a content item referenced by path 
        GetContentByPath: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Content/GetContentByPath';
 
            //cache enabled ... cache profile is: CacheFor60Seconds 
            var cacheValue = bungieNetPlatform.contentService.contentData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.contentService.contentData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Returns a content item referenced by id 
        GetContentById: function ( id, locale, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Content/GetContentById/' + encodeURIComponent(id) + '/' + encodeURIComponent(locale) + '/';
 
            //cache enabled ... cache profile is: CacheFor60Seconds 
            var cacheValue = bungieNetPlatform.contentService.contentData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.contentService.contentData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Gets content based on querystring information passed in.  Provides additional search capabilities through POSTed JSON data. 
        SearchContentEx: function ( input, locale, qhead, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Content/SearchEx/' + encodeURIComponent(locale) + '/';
            
            var queryString = '?' + 'head=' + encodeURIComponent(qhead);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Gets content relevant to the homepage. 
        GetHomepageContent: function ( locale, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Content/Site/Homepage/' + encodeURIComponent(locale) + '/';
 
            //cache enabled ... cache profile is: CacheFor60Seconds 
            var cacheValue = bungieNetPlatform.contentService.contentData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.contentService.contentData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Gets all Job data. 
        GetJobs: function ( locale, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Content/Site/Jobs/' + encodeURIComponent(locale) + '/';
 
            //cache enabled ... cache profile is: CacheFor60Seconds 
            var cacheValue = bungieNetPlatform.contentService.contentData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.contentService.contentData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.externalSocialService = { 
        dataStore: [],
        externalSocialData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.externalSocialService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.externalSocialService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.externalSocialService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.externalSocialService.dataStore["Set_" + item.id] = item;
            }
        },

        //Loads the latest Bungie feed from a set of social services limited by item number (limit). 
        GetAggregatedSocialFeed: function ( limit, qtypes, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/ExternalSocial/GetAggregatedSocialFeed/' + encodeURIComponent(limit) + '/';
            
            var queryString = '?' + 'types=' + encodeURIComponent(qtypes);
            url = url + queryString;
 
            //cache enabled ... cache profile is: CacheFor15Minutes 
            var cacheValue = bungieNetPlatform.externalSocialService.externalSocialData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.externalSocialService.externalSocialData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.surveyService = { 
        dataStore: [],
        surveyData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.surveyService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.surveyService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.surveyService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.surveyService.dataStore["Set_" + item.id] = item;
            }
        },

        //Gets the survey from xml file 
        GetSurvey: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Survey/GetSurvey/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.forumService = { 
        dataStore: [],
        forumData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.forumService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.forumService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.forumService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.forumService.dataStore["Set_" + item.id] = item;
            }
        },

        //Allows a user to create a new forum post or reply to an existing post.  Returns the post. 
        CreatePost: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/CreatePost/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Allows a user to create a top level reply comment to content in the Content Management System.  Returns the post created by this action. 
        CreateContentComment: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/CreateContentComment/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Allows a user to edit a forum post.  Returns the updated post. 
        EditPost: function ( input, postid, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/EditPost/' + encodeURIComponent(postid) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Allows deletion of a topic and its posts by a user of an appropriate security level. 
        DeletePost: function ( postid, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/DeletePost/' + encodeURIComponent(postid) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Allows a user to rate a post from 0 to 100, overwriting any existing rating.  Returns the updated rating average. 
        RatePost: function ( postId, rating, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/RatePost/' + encodeURIComponent(postId) + '/' + encodeURIComponent(rating) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Undo a rating that was performed in error. 
        UndoRating: function ( postId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/UndoRating/' + encodeURIComponent(postId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Share your love for a Post with others. 
        SharePost: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/Post/' + encodeURIComponent(id) + '/Share/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Moderate a post.  Only accessible to authorized users. 
        ModeratePost: function ( input, postId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/Post/' + encodeURIComponent(postId) + '/Moderate/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Moderate a Tag.  Only accessible to authorized users. 
        ModerateTag: function ( input, tagText, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/Tags/' + encodeURIComponent(tagText) + '/Moderate/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Moderate a group post.  Only accessible to admins and founders of that group. 
        ModerateGroupPost: function ( input, postId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/Post/' + encodeURIComponent(postId) + '/GroupModerate/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //The simple version of getting tagged topics, with only the most common filters. 
        GetTopicsPaged: function ( page, pageSize, group, sort, quickDate, categoryFilter, qtagstring, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetTopicsPaged/' + encodeURIComponent(page) + '/' + encodeURIComponent(pageSize) + '/' + encodeURIComponent(group) + '/' + encodeURIComponent(sort) + '/' + encodeURIComponent(quickDate) + '/' + encodeURIComponent(categoryFilter) + '/';
            
            var queryString = '?' + 'tagstring=' + encodeURIComponent(qtagstring);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //The complex version of getting tagged topics, with the filters being passed as an object. 
        GetTopicsComplexPaged: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetTopicsComplexPaged/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Gets the most popular topics, but without paying attention to the user state. 
        GetPopularTopicsAnonymously: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetPopularTopicsAnonymously/';
 
            //cache enabled ... cache profile is: CacheFor5Minutes 
            var cacheValue = bungieNetPlatform.forumService.forumData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.forumService.forumData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent. 
        GetPostsThreadedPaged: function ( parentPostId, page, pageSize, replySize, getParentPost, rootThreadMode, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetPostsThreadedPaged/' + encodeURIComponent(parentPostId) + '/' + encodeURIComponent(page) + '/' + encodeURIComponent(pageSize) + '/' + encodeURIComponent(replySize) + '/' + encodeURIComponent(getParentPost) + '/' + encodeURIComponent(rootThreadMode) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent. 
        GetPostsThreadedPagedFromChild: function ( childPostId, page, pageSize, replySize, rootThreadMode, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetPostsThreadedPagedFromChild/' + encodeURIComponent(childPostId) + '/' + encodeURIComponent(page) + '/' + encodeURIComponent(pageSize) + '/' + encodeURIComponent(replySize) + '/' + encodeURIComponent(rootThreadMode) + '/';
 
            //cache enabled ... cache profile is: CacheFor60SecondsPerUserClient 
            var cacheValue = bungieNetPlatform.forumService.forumData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.forumService.forumData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Returns the post specified and its immediate parent. 
        GetPostAndParent: function ( childPostId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetPostAndParent/' + encodeURIComponent(childPostId) + '/';
 
            //cache enabled ... cache profile is: CacheFor60SecondsPerUserClient 
            var cacheValue = bungieNetPlatform.forumService.forumData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.forumService.forumData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Gets the popular tags in the forum using our estimated counts. 
        GetPopularTags: function ( qquantity, qtagsSinceDate, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetPopularTags/';
            
            var queryString = '?' + 'quantity=' + encodeURIComponent(qquantity) + '&tagsSinceDate=' + encodeURIComponent(qtagsSinceDate);
            url = url + queryString;
 
            //cache enabled ... cache profile is: CacheFor60SecondsPerUserClientQuery 
            var cacheValue = bungieNetPlatform.forumService.forumData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.forumService.forumData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Gets the post Id for the given content item's comments, if it exists. 
        GetTopicForContent: function ( contentId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetTopicForContent/' + encodeURIComponent(contentId) + '/';
 
            //cache enabled ... cache profile is: CacheFor60Seconds 
            var cacheValue = bungieNetPlatform.forumService.forumData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.forumService.forumData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums. 
        GetForumTagSuggestions: function ( qpartialtag, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Forum/GetForumTagSuggestions/';
            
            var queryString = '?' + 'partialtag=' + encodeURIComponent(qpartialtag);
            url = url + queryString;
 
            //cache enabled ... cache profile is: CacheFor60SecondsPerUserClientQuery 
            var cacheValue = bungieNetPlatform.forumService.forumData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.forumService.forumData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.activityService = { 
        dataStore: [],
        activityData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.activityService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.activityService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.activityService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.activityService.dataStore["Set_" + item.id] = item;
            }
        },

        //Get the recent activities for everything you follow. 
        GetAggregatedActivitiesForCurrentUser: function ( qtypefilter, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Aggregation/';
            
            var queryString = '?' + 'typefilter=' + encodeURIComponent(qtypefilter);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of entities that you follow. 
        GetEntitiesFollowedByCurrentUser: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Following/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of entities that you follow. 
        GetGroupsFollowedByCurrentUser: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Following/Groups/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of groups that a given user follows. 
        GetGroupsFollowedByUser: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/User/' + encodeURIComponent(id) + '/Following/Groups/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of entities that the given user follows. 
        GetEntitiesFollowedByUser: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/User/' + encodeURIComponent(id) + '/Following/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of users that follow the given user. 
        GetFollowersOfUser: function ( id, qitemsperpage, qcurrentpage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/User/' + encodeURIComponent(id) + '/Followers/';
            
            var queryString = '?' + 'itemsperpage=' + encodeURIComponent(qitemsperpage) + '&currentpage=' + encodeURIComponent(qcurrentpage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Follow the user with the given Membership Id. 
        FollowUser: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/User/' + encodeURIComponent(id) + '/Follow/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Unfollow the user with the given Membership Id. 
        UnfollowUser: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/User/' + encodeURIComponent(id) + '/Unfollow/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get the recent Like and Share activities for another user. 
        GetLikeAndShareActivityForUser: function ( id, qitemsperpage, qcurrentpage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/User/' + encodeURIComponent(id) + '/Activities/LikesAndShares/';
            
            var queryString = '?' + 'itemsperpage=' + encodeURIComponent(qitemsperpage) + '&currentpage=' + encodeURIComponent(qcurrentpage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the recent Forum activities for another user. 
        GetForumActivityForUser: function ( id, qitemsperpage, qcurrentpage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/User/' + encodeURIComponent(id) + '/Activities/Forums/';
            
            var queryString = '?' + 'itemsperpage=' + encodeURIComponent(qitemsperpage) + '&currentpage=' + encodeURIComponent(qcurrentpage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of users that follow the given Group. 
        GetFollowersOfGroup: function ( id, qitemsperpage, qcurrentpage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Group/' + encodeURIComponent(id) + '/Followers/';
            
            var queryString = '?' + 'itemsperpage=' + encodeURIComponent(qitemsperpage) + '&currentpage=' + encodeURIComponent(qcurrentpage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Follow the group with the given Group Id. 
        FollowGroup: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Group/' + encodeURIComponent(id) + '/Follow/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Unfollow the group with the given Group Id. 
        UnfollowGroup: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Group/' + encodeURIComponent(id) + '/Unfollow/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get the recent activities performed by the Group with the given Group Id. 
        GetGroupActivities: function ( id, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Group/' + encodeURIComponent(id) + '/Activities/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of users that follow the given Tag. 
        GetFollowersOfTag: function ( qtag, qitemsperpage, qcurrentpage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Tag/Followers/';
            
            var queryString = '?' + 'tag=' + encodeURIComponent(qtag) + '&itemsperpage=' + encodeURIComponent(qitemsperpage) + '&currentpage=' + encodeURIComponent(qcurrentpage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Follow the Tag with the given Tag. 
        FollowTag: function ( qtag, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Tag/Follow/';
            
            var queryString = '?' + 'tag=' + encodeURIComponent(qtag);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Unfollow the Tag with the given Tag. 
        UnfollowTag: function ( qtag, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Tag/Unfollow/';
            
            var queryString = '?' + 'tag=' + encodeURIComponent(qtag);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get the recent activities for all of your friends in external systems. 
        GetFriendActivities: function ( qformat, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Friends/Activities/';
            
            var queryString = '?' + 'format=' + encodeURIComponent(qformat);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get your cross-platform friends for any platform you've registered. 
        GetFriends: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Activity/Friends/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.groupService = { 
        dataStore: [],
        groupData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.groupService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.groupService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.groupService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.groupService.dataStore["Set_" + item.id] = item;
            }
        },

        //Returns a list of all available group avatars for the signed-in user. 
        GetAvailableAvatars: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/GetAvailableAvatars/';
 
            //cache enabled ... cache profile is: CacheFor60SecondsPerUserClient 
            var cacheValue = bungieNetPlatform.groupService.groupData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.groupService.groupData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        },

        //Search for Groups. 
        GroupSearch: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/Search/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get information about the groups that you have joined. 
        GetJoinedGroupsForCurrentMember: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/MyGroups/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about the groups that you've applied to join. 
        GetPendingGroupsForCurrentMember: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/MyPendingGroups/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about groups that you've joined as well as groups that you've applied to join. 
        GetAllGroupsForCurrentMember: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/MyGroups/All/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about groups you created or were a founder of that have been deleted. 
        GetDeletedGroupsForCurrentMember: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/MyGroups/Deleted/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about the groups that a given member has joined. 
        GetJoinedGroupsForMember: function ( membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/User/' + encodeURIComponent(membershipId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about the groups that a given member has applied to join. 
        GetPendingGroupsForMember: function ( membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/User/' + encodeURIComponent(membershipId) + '/Pending/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about groups that a given member has joined as well as groups that they've applied to join. 
        GetAllGroupsForMember: function ( membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/User/' + encodeURIComponent(membershipId) + '/All/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about a specific group of the given ID. 
        GetGroup: function ( groupId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get information about a specific group with the given name. 
        GetGroupByName: function ( groupName, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/Name/' + encodeURIComponent(groupName) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Gets tag suggestions based on partial text entry, matching them with other tags previously used for groups. 
        GetGroupTagSuggestions: function ( qpartialtag, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/GetGroupTagSuggestions/';
            
            var queryString = '?' + 'partialtag=' + encodeURIComponent(qpartialtag);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Create a new group. 
        CreateGroup: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/Create/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Edit an existing group.  You must have suitable permissions in the group to perform this operation. 
        EditGroup: function ( input, groupId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Edit/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Edit an existing group.  You must have suitable permissions in the group to perform this operation. 
        SetPrivacy: function ( groupId, isPublic, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Privacy/' + encodeURIComponent(isPublic) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Undelete the group, if you were the one who deleted it or the original founder. 
        UndeleteGroup: function ( groupId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Undelete/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get the list of Bungie.Net users who are awaiting a decision on their application to join a given group. 
        GetPendingMemberships: function ( groupId, qitemsPerPage, qcurrentPage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/Pending/';
            
            var queryString = '?' + 'itemsPerPage=' + encodeURIComponent(qitemsPerPage) + '&currentPage=' + encodeURIComponent(qcurrentPage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Request permission to join the given group. 
        RequestGroupMembership: function ( groupId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/Apply/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Rescind your application to join the given group. 
        RescindGroupMembership: function ( groupId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/Rescind/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Approve the given Bungie.Net user to join the given group.  You must have suitable permissions in the group to perform this operation. 
        ApproveGroupMembership: function ( groupId, membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/' + encodeURIComponent(membershipId) + '/Approve/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Deny the given Bungie.Net user's application to join the given group.  You must have suitable permissions in the group to perform this operation. 
        DenyGroupMembership: function ( groupId, membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/' + encodeURIComponent(membershipId) + '/Deny/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get the list of members in a given group. 
        GetMembersOfGroup: function ( groupId, qitemsPerPage, qcurrentPage, qmemberType, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/';
            
            var queryString = '?' + 'itemsPerPage=' + encodeURIComponent(qitemsPerPage) + '&currentPage=' + encodeURIComponent(qcurrentPage) + '&memberType=' + encodeURIComponent(qmemberType);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Get the list of Administrators and the founder of the given group. 
        GetAdminsOfGroup: function ( groupId, qitemsPerPage, qcurrentPage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Admins/';
            
            var queryString = '?' + 'itemsPerPage=' + encodeURIComponent(qitemsPerPage) + '&currentPage=' + encodeURIComponent(qcurrentPage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Edit the membership type of a given member.  You must have suitable permissions in the group to perform this operation. 
        EditGroupMembership: function ( groupId, membershipId, membershipType, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/' + encodeURIComponent(membershipId) + '/SetMembershipType/' + encodeURIComponent(membershipType) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Kick a member from the given group, forcing them to reapply if they wish to re-join the group.  You must have suitable permissions in the group to perform this operation. 
        KickMember: function ( groupId, membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/' + encodeURIComponent(membershipId) + '/Kick/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Bans the requested member from the requested group for the specified period of time. 
        BanMember: function ( input, groupId, membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/' + encodeURIComponent(membershipId) + '/Ban/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Unbans the requested member, allowing them to re-apply for membership. 
        UnbanMember: function ( groupId, membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Members/' + encodeURIComponent(membershipId) + '/Unban/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get the list of banned members in a given group.  Only accessible to group Admins and above. 
        GetBannedMembersOfGroup: function ( groupId, qitemsPerPage, qcurrentPage, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Group/' + encodeURIComponent(groupId) + '/Banned/';
            
            var queryString = '?' + 'itemsPerPage=' + encodeURIComponent(qitemsPerPage) + '&currentPage=' + encodeURIComponent(qcurrentPage);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.ignoreService = { 
        dataStore: [],
        ignoreData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.ignoreService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.ignoreService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.ignoreService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.ignoreService.dataStore["Set_" + item.id] = item;
            }
        },

        //Search for Group Ignores. 
        GetIgnoreStatusForPost: function ( postId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Ignore/MyIgnores/Posts/' + encodeURIComponent(postId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Search for Group Ignores. 
        GetIgnoreStatusForUser: function ( membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Ignore/MyIgnores/Users/' + encodeURIComponent(membershipId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Search for Group Ignores. 
        GetIgnoreStatusForGroup: function ( groupId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Ignore/MyIgnores/Groups/' + encodeURIComponent(groupId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Search for User Ignores. 
        GetIgnoresForUser: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Ignore/MyIgnores/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Ignore an item. 
        IgnoreItem: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Ignore/Ignore/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Unignore an item. 
        UnignoreItem: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Ignore/Unignore/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.gameService = { 
        dataStore: [],
        gameData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.gameService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.gameService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.gameService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.gameService.dataStore["Set_" + item.id] = item;
            }
        },

        //Returns all legacy game data for the supplied membership id. 
        GetPlayerGamesById: function ( membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Game/GetPlayerGamesById/' + encodeURIComponent(membershipId) + '/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.adminService = { 
        dataStore: [],
        adminData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.adminService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.adminService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.adminService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.adminService.dataStore["Set_" + item.id] = item;
            }
        },

        //Get your assigned reports, or have new ones generated if you don't have a full queue. 
        GetAssignedReports: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Assigned/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 null,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Resolve a report that's been assigned to you. 
        ResolveReport: function ( input, reportId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Assigned/' + encodeURIComponent(reportId) + '/Resolve/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Overturn the results of a report, given sufficient credentials. 
        OverturnReport: function ( input, reportId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Reports/' + encodeURIComponent(reportId) + '/Overturn/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get a paginated list of all of the the reports that resulted in discipline against a given Member. 
        GetDisciplinedReportsForMember: function ( input, membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Member/' + encodeURIComponent(membershipId) + '/Reports/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Get a paginated set of all reports that have been resolved. 
        GetResolvedReports: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Reports/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Globally ignore an item, given sufficient credentials. 
        GloballyIgnoreItem: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Ignores/GloballyIgnore/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Manually set the date for which a user should be banned. 
        OverrideBanOnUser: function ( input, membershipId, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Member/' + encodeURIComponent(membershipId) + '/SetBan/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Manually set the date for which an item should be globally ignored. 
        OverrideGlobalIgnore: function ( input, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Ignores/OverrideGlobalIgnore/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
           return bungieNetPlatform.serviceLibrary.post(
                url,
                 input,                 function (result) {
                    success(result);
                },
                error
            ); 
        
        },

        //Returns a list of possible users based on the search string.  Uncached for purposes of the admin interface, with additional admin-only information. 
        AdminUserSearch: function ( qq, success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '/Admin/Member/Search/';
            
            var queryString = '?' + 'q=' + encodeURIComponent(qq);
            url = url + queryString;
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);

(function ($) {
    bungieNetPlatform.coreService = { 
        dataStore: [],
        coreData: {
            getCacheItem: function (id) {
                return bungieNetPlatform.coreService.dataStore[id + ""];
            },
            setCacheItem: function (item) {
                bungieNetPlatform.coreService.dataStore[item.id + ""] = item;
            },
            getCacheSet: function (id) {
                return bungieNetPlatform.coreService.dataStore["Set_" + id];
            },
            setCacheSet: function (item) {
                bungieNetPlatform.coreService.dataStore["Set_" + item.id] = item;
            }
        },

        //Smoketest function 
        HelloWorld: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '//HelloWorld/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Smoketest function for data cache. 
        CacheTest: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '//CacheTest/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //Test error handling 
        TestUnhandledError: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '//TestUnhandledError/';
            //cache disabled
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
					success(result);
                },
                error
            );
        
        },

        //List of available localization cultures 
        GetAvailableLocales: function ( success, error ) {
            var url = bungieNetPlatform.platformSettings.platformUrl + '//GetAvailableLocales/';
 
            //cache enabled ... cache profile is: CacheFor15Minutes 
            var cacheValue = bungieNetPlatform.coreService.coreData.getCacheItem(url);
            if (cacheValue) {
                 return $.Deferred(function (dfd) { success(cacheValue); dfd.resolve(cacheValue); }).promise(); 
            }
			if (typeof _gaq !== "undefined") { _gaq.push(['_trackPageview', url]); }
          
            return bungieNetPlatform.serviceLibrary.get(
                url,
                function (result) {
                    bungieNetPlatform.coreService.coreData.setCacheItem(result);
					success(result);
                },
                error
            );
        
        }
    };   
})(jQuery);


//Contract Input Classes
 
var CreateBungieProfileRequest = function ( input, displayName, email, emailUsage, credentialPublic, termsAccepted, authProviderType) {
    this.displayName = displayName; 
    this.email = email; 
    this.emailUsage = emailUsage; 
    this.credentialPublic = credentialPublic; 
    this.termsAccepted = termsAccepted; 
    this.authProviderType = authProviderType; 
}
 
var UserEditRequest = function ( input, membershipId, displayName, uniqueName, preferredLanguage, profilePicture, userTitle, about, emailUsage, emailAddress, showActivity, profileTheme, showGamertagPublic, showFacebookPublic, showPsnPublic, adultMode, isThemeLight) {
    this.membershipId = membershipId; 
    this.displayName = displayName; 
    this.uniqueName = uniqueName; 
    this.preferredLanguage = preferredLanguage; 
    this.profilePicture = profilePicture; 
    this.userTitle = userTitle; 
    this.about = about; 
    this.emailUsage = emailUsage; 
    this.emailAddress = emailAddress; 
    this.showActivity = showActivity; 
    this.profileTheme = profileTheme; 
    this.showGamertagPublic = showGamertagPublic; 
    this.showFacebookPublic = showFacebookPublic; 
    this.showPsnPublic = showPsnPublic; 
    this.adultMode = adultMode; 
    this.isThemeLight = isThemeLight; 
}
 
var NotificationUpdateRequest = function ( input, settings) {
    this.settings = settings; 
}
 
var WebAuthMobileAppPair = function ( input, MembershipId, MembershipType, AppType, AppInstallationId, DeviceType, ApnToken, ApnLocale, C2dmRegistrationId, PairingDate) {
    this.MembershipId = MembershipId; 
    this.MembershipType = MembershipType; 
    this.AppType = AppType; 
    this.AppInstallationId = AppInstallationId; 
    this.DeviceType = DeviceType; 
    this.ApnToken = ApnToken; 
    this.ApnLocale = ApnLocale; 
    this.C2dmRegistrationId = C2dmRegistrationId; 
    this.PairingDate = PairingDate; 
}
 
var SaveMessageRequestV2 = function ( input, membersToId, conversationId, subject, body) {
    this.membersToId = membersToId; 
    this.conversationId = conversationId; 
    this.subject = subject; 
    this.body = body; 
}
 
var ContentQueryPublic = function ( input, contentTypes, tag, notTag, sortBy, creationDate, modifiedDate, locale, itemsPerPage, currentPage) {
    this.contentTypes = contentTypes; 
    this.tag = tag; 
    this.notTag = notTag; 
    this.sortBy = sortBy; 
    this.creationDate = creationDate; 
    this.modifiedDate = modifiedDate; 
    this.locale = locale; 
    this.itemsPerPage = itemsPerPage; 
    this.currentPage = currentPage; 
}
 
var CreatePostRequest = function ( input, parentPostId, subTopicOverride, subject, body, tagInput, tagCategory, category, groupId, isGroupPrivate, urlLinkOrImage, metadata) {
    this.parentPostId = parentPostId; 
    this.subTopicOverride = subTopicOverride; 
    this.subject = subject; 
    this.body = body; 
    this.tagInput = tagInput; 
    this.tagCategory = tagCategory; 
    this.category = category; 
    this.groupId = groupId; 
    this.isGroupPrivate = isGroupPrivate; 
    this.urlLinkOrImage = urlLinkOrImage; 
    this.metadata = metadata; 
}
 
var CreateContentCommentRequest = function ( input, contentId, subTopicOverride, subject, body, tagInput, tagCategory, category, urlLinkOrImage, metadata) {
    this.contentId = contentId; 
    this.subTopicOverride = subTopicOverride; 
    this.subject = subject; 
    this.body = body; 
    this.tagInput = tagInput; 
    this.tagCategory = tagCategory; 
    this.category = category; 
    this.urlLinkOrImage = urlLinkOrImage; 
    this.metadata = metadata; 
}
 
var EditPostRequest = function ( input, subject, body, tagInput, tagCategory, urlLinkOrImage, metadata, category, disableBits, isGroupPostPrivate) {
    this.subject = subject; 
    this.body = body; 
    this.tagInput = tagInput; 
    this.tagCategory = tagCategory; 
    this.urlLinkOrImage = urlLinkOrImage; 
    this.metadata = metadata; 
    this.category = category; 
    this.disableBits = disableBits; 
    this.isGroupPostPrivate = isGroupPostPrivate; 
}
 
var ModerationRequest = function ( input, moderatedItemId, moderatedItemType, comments, reason) {
    this.moderatedItemId = moderatedItemId; 
    this.moderatedItemType = moderatedItemType; 
    this.comments = comments; 
    this.reason = reason; 
}
 
var GetTopicsComplexRequest = function ( input, tags, authors, groupId, sort, categoryFilter, createdBeforeUtc, createdAfterUtc, minimumRating, flags, page, pageSize) {
    this.tags = tags; 
    this.authors = authors; 
    this.groupId = groupId; 
    this.sort = sort; 
    this.categoryFilter = categoryFilter; 
    this.createdBeforeUtc = createdBeforeUtc; 
    this.createdAfterUtc = createdAfterUtc; 
    this.minimumRating = minimumRating; 
    this.flags = flags; 
    this.page = page; 
    this.pageSize = pageSize; 
}
 
var GroupQuery = function ( input, contents, creationDate, sortBy, tagText, itemsPerPage, currentPage) {
    this.contents = contents; 
    this.creationDate = creationDate; 
    this.sortBy = sortBy; 
    this.tagText = tagText; 
    this.itemsPerPage = itemsPerPage; 
    this.currentPage = currentPage; 
}
 
var GroupCreateAction = function ( input, name, about, theme, avatarImageIndex, tags, isPublic, membershipOption, isPublicTopicAdminOnly, isDefaultPostPublic) {
    this.name = name; 
    this.about = about; 
    this.theme = theme; 
    this.avatarImageIndex = avatarImageIndex; 
    this.tags = tags; 
    this.isPublic = isPublic; 
    this.membershipOption = membershipOption; 
    this.isPublicTopicAdminOnly = isPublicTopicAdminOnly; 
    this.isDefaultPostPublic = isDefaultPostPublic; 
}
 
var GroupEditAction = function ( input, name, about, theme, avatarImageIndex, tags, isPublic, membershipOption, isPublicTopicAdminOnly, isDefaultPostPublic, groupId) {
    this.name = name; 
    this.about = about; 
    this.theme = theme; 
    this.avatarImageIndex = avatarImageIndex; 
    this.tags = tags; 
    this.isPublic = isPublic; 
    this.membershipOption = membershipOption; 
    this.isPublicTopicAdminOnly = isPublicTopicAdminOnly; 
    this.isDefaultPostPublic = isDefaultPostPublic; 
    this.groupId = groupId; 
}
 
var GroupBanRequest = function ( input, comment, length) {
    this.comment = comment; 
    this.length = length; 
}
 
var IgnoreQuery = function ( input, itemType, itemsPerPage, currentPage) {
    this.itemType = itemType; 
    this.itemsPerPage = itemsPerPage; 
    this.currentPage = currentPage; 
}
 
var IgnoreItemRequest = function ( input, ignoredItemId, ignoredItemType, comment, reason) {
    this.ignoredItemId = ignoredItemId; 
    this.ignoredItemType = ignoredItemType; 
    this.comment = comment; 
    this.reason = reason; 
}
 
var UnignoreItemRequest = function ( input, ignoredItemId, ignoredItemType) {
    this.ignoredItemId = ignoredItemId; 
    this.ignoredItemType = ignoredItemType; 
}
 
var ReportResolution = function ( input, reportId, result, comments) {
    this.reportId = reportId; 
    this.result = result; 
    this.comments = comments; 
}
 
var PagedQuery = function ( input, itemsPerPage, currentPage) {
    this.itemsPerPage = itemsPerPage; 
    this.currentPage = currentPage; 
}
 
var UserBanRequest = function ( input, comment, banExpireDate) {
    this.comment = comment; 
    this.banExpireDate = banExpireDate; 
}
 
var IgnoreItemOverrideRequest = function ( input, globalIgnoreEndDate, ignoredItemId, ignoredItemType, comment) {
    this.globalIgnoreEndDate = globalIgnoreEndDate; 
    this.ignoredItemId = ignoredItemId; 
    this.ignoredItemType = ignoredItemType; 
    this.comment = comment; 
}



//Contract Output Classes
var GeneralUser = {
	membershipId: 0,
	uniqueName: [],
	normalizedName: [],
	displayName: [],
	preferredLanguage: [],
	profilePicture: 0,
	profileTheme: 0,
	userTitle: 0,
	successMessageFlags: 0,
	isDeleted: false,
	about: [],
	firstAccess: null,
	lastUpdate: null,
	legacyPortalUID: 0,
	context: {
		isFollowing: false,
		ignoreStatus: {
			isIgnored: false,
			ignoreFlags: 0
		},
		globalIgnoreEndDate: null
	},
	banExpireDate: null,
	psnDisplayName: [],
	xboxDisplayName: [],
	fbDisplayName: [],
	showActivity: false,
	followerCount: 0,
	globalIgnoreEndDate: null,
	isThemeLight: false,
	adultMode: false,
	profilePicturePath: [],
	profileThemeName: [],
	userTitleDisplay: []
};
var UserDetail = {
	user: {
		membershipId: 0,
		uniqueName: [],
		normalizedName: [],
		displayName: [],
		preferredLanguage: [],
		profilePicture: 0,
		profileTheme: 0,
		userTitle: 0,
		successMessageFlags: 0,
		isDeleted: false,
		about: [],
		firstAccess: null,
		lastUpdate: null,
		legacyPortalUID: 0,
		context: {
			isFollowing: false,
			ignoreStatus: {
				isIgnored: false,
				ignoreFlags: 0
			},
			globalIgnoreEndDate: null
		},
		banExpireDate: null,
		psnDisplayName: [],
		xboxDisplayName: [],
		fbDisplayName: [],
		showActivity: false,
		followerCount: 0,
		globalIgnoreEndDate: null,
		isThemeLight: false,
		adultMode: false,
		profilePicturePath: [],
		profileThemeName: [],
		userTitleDisplay: []
	},
	email: [],
	emailStatus: 0,
	emailUsage: 0,
	realName: [],
	gamerTag: [],
	psnId: [],
	facebookName: [],
	userAcls: [],
	showGamertagPublic: false,
	showFacebookPublic: false,
	showPsnPublic: false,
	isThemeLight: false,
	adultMode: false
};
var ConversationV2 = {
	starter: 0,
	lastRead: null,
	status: 0,
	subject: [],
	body: [],
	isAutoResponse: false,
	isRead: false,
	conversationId: 0,
	memberFromId: 0,
	dateStarted: null,
	totalMessageCount: 0,
	lastMessageSent: null,
	lastMessageId: 0,
	isGlobal: false,
	isLocked: false,
	memberToId: 0,
	membersToId: [],
	usersTo: []
};
var NotificationResponse = {
	notifications: [],
	tagActivityCount: 0,
	groupActivityCount: 0
};
var ContentTypeDescription = {
	cType: [],
	name: [],
	contentDescription: [],
	previewImage: [],
	properties: [],
	tagMetadata: [],
	usageExamples: [],
	showInContentEditor: false,
	typeOf: [],
	bindIdentifierToProperty: [],
	boundRegex: [],
	allowComments: false,
	previews: []
};
var ContentItemPublicContract = {
	contentId: 0,
	cType: [],
	cmsPath: [],
	creationDate: null,
	modifyDate: null,
	allowComments: false,
	hasAgeGate: false,
	minimumAge: 0,
	ratingImagePath: [],
	authorMembershipId: 0,
	author: {
		membershipId: 0,
		uniqueName: [],
		normalizedName: [],
		displayName: [],
		preferredLanguage: [],
		profilePicture: 0,
		profileTheme: 0,
		userTitle: 0,
		successMessageFlags: 0,
		isDeleted: false,
		about: [],
		firstAccess: null,
		lastUpdate: null,
		legacyPortalUID: 0,
		context: {
			isFollowing: false,
			ignoreStatus: {
				isIgnored: false,
				ignoreFlags: 0
			},
			globalIgnoreEndDate: null
		},
		banExpireDate: null,
		psnDisplayName: [],
		xboxDisplayName: [],
		fbDisplayName: [],
		showActivity: false,
		followerCount: 0,
		globalIgnoreEndDate: null,
		isThemeLight: false,
		adultMode: false,
		profilePicturePath: [],
		profileThemeName: [],
		userTitleDisplay: []
	},
	properties: [],
	representations: [],
	tags: [],
	hasGoneLive: false,
	isDeletedLive: false,
	commentSummary: {
		topicId: 0,
		commentCount: 0
	}
};
var SearchResultOfContentItemPublicContract = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var FrontPageContentResponse = {
	rotator: {
		Response: {
			totalResults: 0,
			results: [],
			hasMore: false,
			query: {
				itemsPerPage: 0,
				currentPage: 0
			},
			explicitHasMore: false
		},
		ErrorCode: 0,
		ErrorStatus: [],
		MessageData: [],
		Debug: [],
		Message: []
	},
	blog: {
		Response: {
			totalResults: 0,
			results: [],
			hasMore: false,
			query: {
				itemsPerPage: 0,
				currentPage: 0
			},
			explicitHasMore: false
		},
		ErrorCode: 0,
		ErrorStatus: [],
		MessageData: [],
		Debug: [],
		Message: []
	},
	primaryPanel: {
		Response: {
			totalResults: 0,
			results: [],
			hasMore: false,
			query: {
				itemsPerPage: 0,
				currentPage: 0
			},
			explicitHasMore: false
		},
		ErrorCode: 0,
		ErrorStatus: [],
		MessageData: [],
		Debug: [],
		Message: []
	},
	secondaryPanel: {
		Response: {
			totalResults: 0,
			results: [],
			hasMore: false,
			query: {
				itemsPerPage: 0,
				currentPage: 0
			},
			explicitHasMore: false
		},
		ErrorCode: 0,
		ErrorStatus: [],
		MessageData: [],
		Debug: [],
		Message: []
	}
};
var Survey = {
};
var PostResponse = {
	popularity: 0,
	isActive: false,
	isAnnouncement: false,
	userRating: 0,
	userHasRated: false,
	userHasMutedPost: false,
	latestReplyPostId: 0,
	latestReplyAuthorId: 0,
	ignoreStatus: {
		isIgnored: false,
		ignoreFlags: 0
	},
	postId: {
	},
	parentPostId: {
	},
	topicId: {
	},
	lastReplyId: {
	},
	threadDepth: 0,
	category: 0,
	authorMembershipId: 0,
	editorMembershipId: 0,
	subject: [],
	body: [],
	urlLinkOrImage: [],
	metadata: {
	},
	creationDate: null,
	lastModified: null,
	lastReplyDate: null,
	editCount: 0,
	replyCount: 0,
	topicReplyCount: 0,
	ratingCount: 0,
	rating: 0,
	groupOwnerId: 0,
	isGroupPrivate: false,
	actualIsGroupPrivate: false,
	parentGroupId: 0,
	parentTopicId: 0,
	flags: 0,
	lockedForReplies: false,
	parentAuthorId: 0,
	topicAuthorId: 0,
	tags: [],
	isTopicBanned: false,
	actualParentPostId: 0,
	tagIds: []
};
var PostSearchResponse = {
	relatedPosts: [],
	authors: [],
	groups: [],
	searchedTags: [],
	availablePages: 0,
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var AggregatedActivitySearchResponse = {
	users: [],
	groups: [],
	posts: [],
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var SearchResultOfFollowingResponse = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var GroupSearchResponse = {
	founders: [],
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var SearchResultOfFollowerResponse = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var ActivityMessageSearchResponse = {
	users: [],
	groups: [],
	posts: [],
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var GroupResponse = {
	detail: {
		groupId: 0,
		name: [],
		membershipIdCreated: 0,
		creationDate: null,
		groupType: 0,
		about: [],
		isDeleted: false,
		deletionDate: null,
		deletedByMembershipId: 0,
		tags: [],
		rating: 0,
		ratingCount: 0,
		memberCount: 0,
		pendingMemberCount: 0,
		isPublic: false,
		isMembershipClosed: false,
		isMembershipReviewed: false,
		isPublicTopicAdminOnly: false,
		isDefaultPostPublic: false,
		globalIgnoreEndDate: null,
		theme: [],
		avatarImageIndex: 0,
		founderMembershipId: 0,
		bannerPath: [],
		avatarPath: []
	},
	founderMembershipId: 0,
	founder: {
		membershipId: 0,
		uniqueName: [],
		normalizedName: [],
		displayName: [],
		preferredLanguage: [],
		profilePicture: 0,
		profileTheme: 0,
		userTitle: 0,
		successMessageFlags: 0,
		isDeleted: false,
		about: [],
		firstAccess: null,
		lastUpdate: null,
		legacyPortalUID: 0,
		context: {
			isFollowing: false,
			ignoreStatus: {
				isIgnored: false,
				ignoreFlags: 0
			},
			globalIgnoreEndDate: null
		},
		banExpireDate: null,
		psnDisplayName: [],
		xboxDisplayName: [],
		fbDisplayName: [],
		showActivity: false,
		followerCount: 0,
		globalIgnoreEndDate: null,
		isThemeLight: false,
		adultMode: false,
		profilePicturePath: [],
		profileThemeName: [],
		userTitleDisplay: []
	},
	followerCount: 0,
	currentUserStatus: {
		isFollowing: false,
		membershipStatus: {
			Response: {
				groupId: 0,
				membershipId: 0,
				hasPendingApplication: false,
				isMember: false,
				hasRated: false,
				approvalDate: null,
				approvedByMembershipId: 0,
				deactivationDate: null,
				deactivatedByMembershipId: 0,
				rating: 0,
				memberType: 0,
				isOriginalFounder: false,
				user: {
					membershipId: 0,
					uniqueName: [],
					normalizedName: [],
					displayName: [],
					preferredLanguage: [],
					profilePicture: 0,
					profileTheme: 0,
					userTitle: 0,
					successMessageFlags: 0,
					isDeleted: false,
					about: [],
					firstAccess: null,
					lastUpdate: null,
					legacyPortalUID: 0,
					context: {
						isFollowing: false,
						ignoreStatus: {
							isIgnored: false,
							ignoreFlags: 0
						},
						globalIgnoreEndDate: null
					},
					banExpireDate: null,
					psnDisplayName: [],
					xboxDisplayName: [],
					fbDisplayName: [],
					showActivity: false,
					followerCount: 0,
					globalIgnoreEndDate: null,
					isThemeLight: false,
					adultMode: false,
					profilePicturePath: [],
					profileThemeName: [],
					userTitleDisplay: []
				}
			},
			ErrorCode: 0,
			ErrorStatus: [],
			MessageData: [],
			Debug: [],
			Message: []
		},
		ignoreStatus: {
			isIgnored: false,
			ignoreFlags: 0
		}
	}
};
var TagResponse = {
	tagText: [],
	ignoreStatus: {
		isIgnored: false,
		ignoreFlags: 0
	},
	globalIgnoreEndDate: null
};
var FriendSearchResponse = {
	users: [],
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var SearchResultOfGeneralUser = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var SearchResultOfGroupMemberDetail = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var SearchResultOfGroup = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var SearchResultOfGroupBanResponse = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
var IgnoreSearchResult = {
	tags: [],
	groups: [],
	posts: [],
	users: [],
	totalResults: 0,
	hasMore: false,
	availablePages: 0,
	currentPage: 0,
	itemsPerPage: 0
};
var IgnoreDetailResponse = {
	displayName: [],
	dateCreated: null,
	dateExpires: null,
	dateModified: null,
	comment: [],
	flags: 0,
	reason: 0
};
var LegacyGamePlayer = {
	HaloReach: {
		Gamertag: [],
		GamesPlayed: {
		},
		EmblemUrl: [],
		PlayerModelUrl: [],
		PlayerModelAvatarUrl: [],
		Status: 0
	},
	Halo3Odst: {
		Gamertag: [],
		GamesPlayed: {
		},
		EmblemUrl: [],
		PlayerModelUrl: [],
		PlayerModelAvatarUrl: [],
		Status: 0
	},
	Halo3: {
		Gamertag: [],
		GamesPlayed: {
		},
		EmblemUrl: [],
		PlayerModelUrl: [],
		PlayerModelAvatarUrl: [],
		Status: 0
	},
	Halo2: {
		Gamertag: [],
		GamesPlayed: {
		},
		EmblemUrl: [],
		PlayerModelUrl: [],
		PlayerModelAvatarUrl: [],
		Status: 0
	}
};
var SearchResultOfReportedItemResponse = {
	totalResults: 0,
	results: [],
	hasMore: false,
	query: {
		itemsPerPage: 0,
		currentPage: 0
	},
	explicitHasMore: false
};
 



var matchURL = "extensions";
var popupTimeout = 3000;

function initialize(tab) {
  console.log("Tab URL:" + tab.url );
  if (tab.url.indexOf(matchURL) > -1) {

    var retry = 0;
    var timer = setInterval(function() {

      var callback = function(chromeWindow) {
        // Test that popup can be created
        if (chrome.runtime.lastError) {
          retry += 1;
          chrome.browserAction.setBadgeText({text: ""+retry});
        } else {
          chrome.browserAction.setBadgeText({text: ""});
          clearInterval(timer);
        }
      };

      chrome.browserAction.openPopup(callback);

    }, popupTimeout);
  };

}

document.addEventListener("DOMContentLoaded", function(event) {
  chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      chrome.tabs.query({currentWindow:true, active:true},
                        function(tabs) {
        initialize(tabs[0]);
      });
    }
  });

});

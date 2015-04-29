var matchURL = "extensions";
var popupTimeout = 3000;

function initialize(tab) {
  console.log("Tab URL (pm2):" + tab.url );
  if (tab.url.indexOf(matchURL) > -1) {
    setTimeout(function() {
      chrome.browserAction.openPopup(function(chromeWindow) {
        if (!chromeWindow) {
          chrome.browserAction.setBadgeText({text: "!"})
        } else {
          console.log("chromeWindow.innerHeight :" + chromeWindow.innerHeight);}
      });
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

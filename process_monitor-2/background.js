var matchURL = "extensions";

function initialize(tab) {

    console.log("Initializing ab URL:" + tab.url );

    if (tab.url.indexOf(matchURL) > -1) {
    
    setTimeout(function() {
      chrome.browserAction.openPopup(function(chromeWindow) {
        console.log("chromeWindow.innerHeight :" + chromeWindow.innerHeight);
      });
    }, 2000);
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

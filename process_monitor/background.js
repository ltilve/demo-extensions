var matchURL = "extensions";

function initialize(tab) {

    console.log("Initializing ab URL (process1):" + tab.url );

    if (tab.url.indexOf(matchURL) > -1) {
    chrome.browserAction.openPopup(function(chromeWindow) {
      console.log("chromeWindow.innerHeight (process1) :" + chromeWindow.innerHeight);
    })
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

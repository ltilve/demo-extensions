# demo-extensions
Demos and examples to test different chromium extension APIs.
Versions of some existing samples available at https://developer.chrome.com/extensions/samples.

* __process_monitor__
   * Call browserAction.openPopup() when the tab url contains matchURL expression.
* __process_monitor-2__
   * Same as process_monitor, but configured to do it after a few seconds, showing a badge if it's popup could not be displayed.
* __process_monitor-3__
   * Also as process_monitor, but retries silently showing the popup till it's possible to do it.


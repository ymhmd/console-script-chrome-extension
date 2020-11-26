'use strict';


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    chrome.storage.sync.get(['script', 'containsUrl'], function (result) {
      
      if (tab.url.includes(result.containsUrl) === true) {
        const code = `
        function() {
          const scriptTag = document.createElement('script')
          scriptTag.text = '(function(){${result.script}})();'
          document.documentElement.appendChild(scriptTag)
        }
        `;

        chrome.tabs.executeScript({
          runAt: 'document_end',
          code: `(${code})()`,
        });
      }

    });
  }
});

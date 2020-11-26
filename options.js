'use strict';

function constructOptions() {
  // UI elements 
  const saveButton = document.getElementById('saveButton');
  const scriptInput = document.getElementById('scriptInput');
  const urlInput = document.getElementById('urlInput');

  
  saveButton.onclick = function (element) {
    const script = scriptInput.value.replaceAll("'", "\\'");
    const url = urlInput.value;
    
    chrome.storage.sync.set({ script: script }, function () {
      console.log(`SCRIPT is ${scriptInput.value}`);
    })

    chrome.storage.sync.set({ containsUrl: url }, function () {
      console.log(`containsUrl is ${urlInput.value}`);
    })
  }
}
constructOptions();

// Require setup.html open upon install

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.get(['apiKey'], function(result) {
      if (!result.apiKey) {
          chrome.tabs.create({url: 'setup.html'}); // Open the setup page
      }
  });
});

// Opens the side panel when the extension icon is clicked

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'openSidePanel',
    title: 'Open side panel',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Context menu clicked");
  if (info.menuItemId === 'openSidePanel') {
    chrome.windows.getCurrent({populate: false}, function(window) {
      chrome.sidePanel.open({
        windowId: window.id
      }).then(() => {
        console.log('Side panel opened successfully.');
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: getSelectedText
        }, (results) => {
          if (chrome.runtime.lastError) {
            console.error('Script execution failed:', chrome.runtime.lastError.message);
            return;
          }
          if (results && results.length > 0) {
            const selectedText = results[0].result;
            console.log('Selected text:', selectedText);
            chrome.runtime.sendMessage({type: 'sendText', text: selectedText});
          }
        });
      }).catch(error => {
        console.error('Failed to open side panel:', error);
      });
    });
  }
});



function getSelectedText() {
  return window.getSelection().toString();
}



//Commented GPT Stuff
/* function getGPTResponse(apiKey, message, sendResponse) {
    // TODO: implement sending requests to GPT.
}
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'openSidePanel',
      title: 'Open side panel',
      contexts: ['selection']
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'openSidePanel') {
      // This will open the panel in all the pages on the current window.
      chrome.sidePanel.open({ windowId: tab.windowId });
    }
  });
*/
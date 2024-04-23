chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
      id: 'openSidePanel',
      title: 'Open side panel',
      contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'openSidePanel') {
      chrome.scripting.executeScript({
          target: {tabId: tab.id},
          function: getSelectedText
      });
  }
});

function getSelectedText() {
  chrome.tabs.executeScript({
      code: 'window.getSelection().toString();'
  }, function(selection) {
      chrome.sidePanel.open({
          windowId: chrome.windows.WINDOW_ID_CURRENT
      }, () => {
          chrome.runtime.sendMessage({type: 'sendText', text: selection[0]});
      });
  });
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
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'sendText') {
        const wordCount = request.text.split(/\s+/).filter(Boolean).length;
        document.getElementById('wordCountDisplay').textContent = `Words: ${wordCount}`;
    }
});
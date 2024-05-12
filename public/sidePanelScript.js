chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'sendText') {
        const wordCount = request.text.split(/\s+/).filter(Boolean).length;
        document.getElementById('wordCountDisplay').textContent = `${wordCount}`;
        const charCount = request.text.length;
        document.getElementById('charCountDisplay').textContent = `${charCount}`;
        const charCountNoSpace = request.text.replace(/\s/g, "").length;
        document.getElementById('charCountNoSpaceDisplay').textContent = `${charCountNoSpace}`;
    }
});
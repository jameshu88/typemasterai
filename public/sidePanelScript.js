chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'sendText') {
        const wordCount = request.text.split(/\s+/).filter(Boolean).length;
        document.getElementById('wordCountDisplay').textContent = `Words: ${wordCount}`;
        const charCount = request.text.length;
        document.getElementById('charCountDisplay').textContent = `Characters: ${charCount}`;
        const charCountNoSpace = request.text.replace(/\s/g, "").length;
        document.getElementById('charCountNoSpaceDisplay').textContent = `Characters (without spaces): ${charCountNoSpace}`;
    }
});
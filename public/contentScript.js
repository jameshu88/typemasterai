document.addEventListener('mouseup', function (e) {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        chrome.runtime.sendMessage({
            type: 'selectedText',
            text: selectedText
        });
    }
});

// Commented GPT Stuff
/* // This function is called when the user releases the mouse button (mouseup event)
document.addEventListener('mouseup', function (e) {
    // Get the selected text and remove any leading/trailing whitespace
    const selectedText = window.getSelection().toString().trim();
  
    // Check if any text is selected
    if (selectedText.length > 0) {
        console.log("[Content] selectedText: " + selectedText);
        let characterCount = selectedText.length;
        let characterWithoutSpaceCount = selectedText.replace(/\s/g, "").length;

        // Split selected string based on the following delimiters.
        let wordCount = selectedText.split(new RegExp(' [/.,;\n]', 'g')).length;
        // TODO: add functionality here to create side panel and signal GPT response.
    }
  });
*/
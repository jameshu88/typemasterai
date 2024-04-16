// This function is called when the user releases the mouse button (mouseup event)
document.addEventListener('mouseup', function (e) {
    // Get the selected text and remove any leading/trailing whitespace
    const selectedText = window.getSelection().toString().trim();
  
    // Check if any text is selected
    if (selectedText.length > 0) {
        console.log("[Content] selectedText: " + selectedText);
        // Split selected string based on the following delimiters.
        let rawElements = str.split(new RegExp(' [/.,;\n]', 'g'));
        let wordCount = rawElements.length;
        // TODO: add functionality here to create side panel and signal GPT response.
    }
  });
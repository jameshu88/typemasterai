chrome.storage.local.get(['initialData'], function(result) {
    var initialData = result.initialData;
    console.log(initialData);
        const wordCount = initialData.split(/\s+/).filter(Boolean).length;
        console.log(wordCount);
        document.getElementById('wordCountDisplay').textContent = `${wordCount}`;
        const charCount = initialData.length;
        document.getElementById('charCountDisplay').textContent = `${charCount}`;
        const charCountNoSpace = initialData.replace(/\s/g, "").length;
        document.getElementById('charCountNoSpaceDisplay').textContent = `${charCountNoSpace}`;
    
  });

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

//OpenAI functionality

document.querySelector('button').addEventListener('click', function() {
    // const selectedText = ////;
    // if (selectedText) {
    //     sendTextToOpenAI(selectedText);
    // }

    chrome.storage.local.get(['initialData'], function(result) {
        var selectedText = result.initialData;

        // Ensure there's text retrieved before sending it to OpenAI
        if (selectedText) {
            sendTextToOpenAI(selectedText);
        } else {
            console.log("No text was selected or stored.");
        }
    });
});

function sendTextToOpenAI(text) {
    chrome.storage.sync.get(['apiKey'], function(result) {
        if (result.apiKey) {
            const apiKey = result.apiKey;
            const data = {
                model: "gpt-3.5-turbo", // Specify the model here
                messages: [{ // This should be an array of message objects
                    "role": "user",
                    "content": `Rewrite the following to sound more professional: ${text}`
                }],
                max_tokens: 150
            };
            console.log('API KEY', apiKey);
            fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.choices && data.choices.length > 0) {
                    const feedbackText = data.choices[0].message.content;
                    document.getElementById('feedbackText').textContent = `${feedbackText}`;
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('API key is not set. Please configure your API key first.');
        }
    });
}


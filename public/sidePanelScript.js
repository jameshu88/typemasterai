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
    const selectedText = document.getElementById('wordCountDisplay').textContent; // Assuming text is stored here
    if (selectedText) {
        sendTextToOpenAI(selectedText);
    }
});

function sendTextToOpenAI(text) {
    chrome.storage.sync.get(['apiKey'], function(result) {
        if (result.apiKey) {
            const apiKey = result.apiKey;
            const data = {
                model: "gpt-3.5-turbo", // Specify the model here
                prompt: `Rewrite the following to sound more professional: ${text}`,
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
                    const feedbackText = data.choices[0].text;
                    document.querySelector('.feedback-text').textContent = feedbackText;
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('API key is not set. Please configure your API key first.');
        }
    });
}

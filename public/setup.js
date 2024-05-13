//external script for SP directive script-src 'self' compliance
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('saveButton').addEventListener('click', function () {
        const apiKey = document.getElementById('apiKey').value;
        chrome.storage.sync.set({ 'apiKey': apiKey }, function () {
            alert('API Key saved successfully!');
            window.close(); // Optionally close the setup window
        });
    });
});
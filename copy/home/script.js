document.getElementById('copyButton').addEventListener('click', function() {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    // Set its value to the content to be copied
    textarea.value = document.getElementById('content').innerText;
    // Append it to the body (it must be in the document to work)
    document.body.appendChild(textarea);
    // Select the textarea content
    textarea.select();
    // Execute the copy command
    document.execCommand('copy');
    // Remove the textarea from the document
    document.body.removeChild(textarea);
    // Provide feedback to the user
    alert('Content copied to clipboard!');
});

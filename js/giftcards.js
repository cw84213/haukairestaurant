// Function to show pop-up message
function showPopup(message) {
    // Create a div element for the pop-up
    var popup = document.createElement('div');
    popup.className = 'popup';
    
    // Create a paragraph element for the message
    var messagePara = document.createElement('p');
    messagePara.textContent = message;
    
    // Create a button element to close the pop-up
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function() {
        popup.remove(); // Remove the pop-up when the close button is clicked
    });
    
    // Append message and close button to the pop-up
    popup.appendChild(messagePara);
    popup.appendChild(closeButton);
    
    // Append the pop-up to the body
    document.body.appendChild(popup);
}

// Call the function with the message
showPopup('The gift voucher will be sent to your email address with instructions.');
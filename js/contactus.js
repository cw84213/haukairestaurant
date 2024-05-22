// contactus.js
// Function to show pop-up message
function showMessage() {
    // Collecting form field values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;    
    var message = document.getElementById("message").value;
    
    // Constructing the confirmation message
    var confirmationMessage = "Your message has been sent successfully!\n\n";
    confirmationMessage += "Name: " + name + "\n";
    confirmationMessage += "Email: " + email + "\n";   
    confirmationMessage += "Message: " + message + "\n";
    
    // Displaying the confirmation message
    alert(confirmationMessage);
}
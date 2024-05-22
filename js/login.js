// login.js
// Function to login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Authentication process
    if (authenticate(username, password)) {
        document.getElementById("login-error").style.display = "none";
        displayGoogleCalendar();
    } else {
        document.getElementById("login-error").style.display = "block";
        clearCalendar();
        hideShiftSwapButton();
    }
}
// Function to authenticate
function authenticate(username, password) {    
    return username === 'haukaiemployees' && password === 'havealovelyday';
}
// Function to display the calendar
function displayGoogleCalendar() {
    // Display Google Calendar using an iframe
    var calendarFrame = document.createElement('iframe');
    calendarFrame.src = "https://calendar.google.com/calendar/embed?src=thehaukairestaurantbusiness%40gmail.com&ctz=Pacific%2FAuckland&mode=WEEK";
    calendarFrame.width = '100%'; 
    calendarFrame.height = '600';
    calendarFrame.className = 'calendar-iframe'; 
    calendarFrame.frameborder = '0';
    calendarFrame.scrolling = 'no';

    clearCalendar(); 
    document.getElementById("calendar-container").appendChild(calendarFrame);

    // Create the button below the calendar
    showShiftSwapButton();
}

function clearCalendar() {
    document.getElementById("calendar-container").innerHTML = ""; 
}
// Function show shift swap button
function showShiftSwapButton() {
    var shiftSwapButton = document.createElement('button');
    shiftSwapButton.textContent = "Request Shift Swap";
    shiftSwapButton.onclick = function() {
        document.getElementById("shift-swap-request").style.display = "block";
    };
    shiftSwapButton.id = "request-shift-swap-btn";
    shiftSwapButton.className = "request-shift-swap-button"; 
    var calendarContainer = document.getElementById("calendar-container");
    calendarContainer.parentNode.insertBefore(shiftSwapButton, calendarContainer.nextSibling);
}
// Function hide showshift swap button
function hideShiftSwapButton() {
    var shiftSwapButton = document.getElementById('request-shift-swap-btn');
    if (shiftSwapButton) {
        shiftSwapButton.parentNode.removeChild(shiftSwapButton);
    }
}
// Function submit shift swap button
function submitShiftSwapRequest() {
    displayConfirmationMessage();
}
// Function display confirmation message
function displayConfirmationMessage() {
    // Create a pop-up message to inform the user that the request has been sent
    alert("Your shift swap request has been sent to the manager for approval.");
}
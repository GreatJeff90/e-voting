// Function to validate login details
function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    
    // Clear any previous error messages
    errorMessage.innerHTML = '';

    // Basic email validation
    if (!validateEmail(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Password validation: must be at least 8 characters
    if (password.length < 8) {
        errorMessage.innerHTML = "Password must be at least 8 characters long.";
        return;
    }

    // If validation passes, redirect to index.html
    window.location.href = 'profile.html';
}

// Simple email validation function
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

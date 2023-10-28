// Sample local database (for demonstration purposes)
const users = [
  { username: 'admin', password: 'buynaa0401' },
  { username: 'irmuun', password: 'oros320228b' },
  { username: 'temka', password: 'oros320228b' },
  { username: 'monhtulga', password: 'oros320228b' },
  { username: 'tselmeg', password: 'oros320228b' },
  { username: 'buji', password: 'oros320228b' },
  // Add more users as needed
];

function checkLogin() {
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  // Check if the entered username and password match any user in the database
  const isValidLogin = users.some(user => user.username === enteredUsername && user.password === enteredPassword);

  if (isValidLogin) {
    alert('Login successful! Redirecting to another page...');
    // Redirect to another HTML file or perform other actions as needed
    window.location.href = 'Home/index.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

// Listen for the "Enter" key press on the password input field
document.getElementById('password').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the checkLogin function when "Enter" is pressed
    checkLogin();
  }
});

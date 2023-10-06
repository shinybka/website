document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        login();
    }
});

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // In a real-world scenario, you'd send the username and password to the server for authentication.
    // For simplicity, let's hardcode a username and password for this example.
    if (username === '8b' && password === '8b') {
        alert('Login successful!');
        window.location.href = 'Home/index.html';
    } else {
        alert('Invalid username or password.');
        alert(' GO U TRAITOR ')
    }
}

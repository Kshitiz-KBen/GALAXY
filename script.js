function login() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Checking if the username and password are valid.
    if (username === 'Kshitiz' && password === '12345') {
        // Redirecting to the planets page upon successful login.
        window.location.href = 'planets.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
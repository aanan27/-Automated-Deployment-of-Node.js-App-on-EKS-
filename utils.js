// Util functions for authentication
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
];

// Function to authenticate user
function authenticate(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user ? true : false;
}

module.exports = { authenticate };


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform your validation here (e.g., checking if username and password are correct)
    if (username === 'admin' && password === '123') {
      alert('Login successful!');
      // Redirect to another page or perform any other action upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
      // Clear the input fields or display an error message
    }
  });
});

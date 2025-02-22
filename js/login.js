document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Find the user
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Save the logged-in user to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to dashboard
  } else {
    alert('Invalid email or password.');
  }
});
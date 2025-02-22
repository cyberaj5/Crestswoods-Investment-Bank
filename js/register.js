// Function to generate a random 12-digit account number
function generateAccountNumber() {
  return Math.floor(100000000000 + Math.random() * 900000000000).toString();
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  // Generate account numbers
  const checkingsAccountNumber = generateAccountNumber();
  const savingsAccountNumber = generateAccountNumber();

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the user already exists
  const userExists = users.some(u => u.email === email);
  if (userExists) {
    alert('User already exists. Please login.');
    return;
  }

  // Add the new user with account numbers
  users.push({
    name,
    email,
    phone,
    password,
    checkingsAccountNumber,
    savingsAccountNumber,
    checkingsBalance: 0, // Default balance
    savingsBalance: 0, // Default balance
  });

  // Save to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful! Please login.');
  window.location.href = 'login.html'; // Redirect to login page
});
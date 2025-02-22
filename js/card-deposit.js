document.getElementById('cardDepositForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  // Retrieve the current user
  const user = JSON.parse(localStorage.getItem('currentUser'));

  // Update checkings balance
  user.checkingsBalance += amount;

  // Save updated user data
  localStorage.setItem('currentUser', JSON.stringify(user));

  alert(`Successfully deposited $${amount.toFixed(2)} into your account.`);
  window.location.href = 'index.html'; // Redirect to dashboard
});
document.getElementById('transferForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fromAccount = document.getElementById('fromAccount').value;
  const toAccount = document.getElementById('toAccount').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (fromAccount === toAccount) {
    alert('You cannot transfer to the same account.');
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  // Retrieve the current user
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (user[`${fromAccount}Balance`] < amount) {
    alert('Insufficient balance.');
    return;
  }

  // Update balances
  user[`${fromAccount}Balance`] -= amount;
  user[`${toAccount}Balance`] += amount;

  // Save updated user data
  localStorage.setItem('currentUser', JSON.stringify(user));

  alert(`Successfully transferred $${amount.toFixed(2)} from ${fromAccount} to ${toAccount}.`);
  window.location.href = 'index.html'; // Redirect to dashboard
});
document.getElementById('cryptoDepositForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const cryptoType = document.getElementById('cryptoType').value;
  const walletAddress = document.getElementById('walletAddress').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  alert(`Successfully deposited ${amount} ${cryptoType} from wallet ${walletAddress}.`);
  window.location.href = 'index.html'; // Redirect to dashboard
});
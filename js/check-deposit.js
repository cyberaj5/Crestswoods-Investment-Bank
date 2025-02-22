document.getElementById('checkDepositForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const checkNumber = document.getElementById('checkNumber').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const frontImage = document.getElementById('frontImage').files[0];
  const backImage = document.getElementById('backImage').files[0];

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  if (!frontImage || !backImage) {
    alert('Please upload both front and back images of the check.');
    return;
  }

  alert(`Check #${checkNumber} for $${amount.toFixed(2)} has been deposited.`);
  window.location.href = 'index.html'; // Redirect to dashboard
});
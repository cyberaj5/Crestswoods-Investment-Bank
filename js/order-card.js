document.getElementById('orderCardForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const cardType = document.getElementById('cardType').value;
  const deliveryAddress = document.getElementById('deliveryAddress').value;

  alert(`Your ${cardType} card will be delivered to ${deliveryAddress}.`);
  window.location.href = 'index.html'; // Redirect to dashboard
});
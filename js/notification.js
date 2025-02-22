// Load Notifications
window.addEventListener('load', function () {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (!user) {
    alert('You are not logged in. Redirecting to login page...');
    window.location.href = 'login.html';
  }
});
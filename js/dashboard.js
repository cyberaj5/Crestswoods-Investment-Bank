// Load the logged-in user's information
window.addEventListener('load', function () {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (user) {
    // Display user's name
    document.getElementById('clientName').textContent = user.name;
  } else {
    alert('You are not logged in. Redirecting to login page...');
    window.location.href = 'login.html';
  }
});

// Slider Functionality
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      slide.style.transform = 'translateX(0)';
    } else if (i < index) {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(-100%)';
    } else {
      slide.classList.remove('active');
      slide.style.transform = 'translateX(100%)';
    }
  });
}

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Logout Button
document.getElementById('logoutButton').addEventListener('click', () => {
  localStorage.removeItem('currentUser'); // Clear the logged-in user
  alert('You have been logged out.');
  window.location.href = 'login.html';
});
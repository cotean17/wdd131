// Handle the year and last modified dynamically
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Handle the hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle visibility of the navigation menu when the hamburger button is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

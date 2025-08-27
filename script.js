function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
});


// Scroll-triggered animation
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('slide-in');
      observer.unobserve(entry.target); // Optional: stop observing once animated
    }
});
}, {
  threshold: 0.2 // Adjust sensitivity
});

// Apply observer to all scroll-animated elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
observer.observe(el);
});
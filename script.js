// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to all glass cards
document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Make hero card visible immediately
document.querySelector('.hero-card').style.opacity = '1';
document.querySelector('.hero-card').style.transform = 'translateY(0)';

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(26, 26, 46, 0.9)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Typing effect (optional)
const text = "Web Developer | Designer | Creator";
const tagline = document.querySelector('.tagline');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        tagline.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Uncomment to enable typing effect
// tagline.textContent = '';
// typeWriter();
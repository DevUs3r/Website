// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
});

// Scroll Animation
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

// Initialize animations on load
window.addEventListener('load', () => {
    animateOnScroll();
});

// Update copyright year
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('#copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send the data to a server
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Dark Mode Toggle (optional)
const darkModeToggle = document.querySelector('#dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}
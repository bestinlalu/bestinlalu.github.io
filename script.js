/**
 * Portfolio Navigation Script
 * Handles section switching and active state management
 */

// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to clicked link
    event.target.classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize - show about section by default
document.addEventListener('DOMContentLoaded', () => {
    // Display the about section by default
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.classList.add('active');
    }

    // Set active state on the first nav link (About)
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }

    // Add smooth scroll behavior for all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(targetSection);
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        const sections = ['about', 'projects', 'certifications', 'hobbies'];
        const navLinks = document.querySelectorAll('.nav-link');

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const currentActive = document.querySelector('.nav-link.active');
            const currentIndex = Array.from(navLinks).indexOf(currentActive);
            const nextIndex = (currentIndex + 1) % sections.length;
            showSection(sections[nextIndex]);
            navLinks[nextIndex].classList.add('active');
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const currentActive = document.querySelector('.nav-link.active');
            const currentIndex = Array.from(navLinks).indexOf(currentActive);
            const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
            showSection(sections[prevIndex]);
            navLinks[prevIndex].classList.add('active');
        }
    });

    // Add scroll animation for elements
    observeElements();
});

/**
 * Intersection Observer for scroll animations
 */
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all project cards and cert cards
    const animatedElements = document.querySelectorAll(
        '.project-card, .cert-card, .hobby-item, .hobby-box'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
}

/**
 * Helper function to handle external links
 */
function openLink(url) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    }
}

// Export functions for global use
window.showSection = showSection;
window.openLink = openLink;

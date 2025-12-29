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

    // Hide navbar on scroll down, show on scroll up
    (function() {
        let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const navbar = document.querySelector('.navbar');
        let ticking = false;
        const DELTA = 5; // minimal change to act
        const HIDE_THRESHOLD = 50; // start hiding once user scrolled past this

        function onScroll() {
            const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
            if (!navbar) {
                ticking = false;
                return;
            }

            const diff = currentY - lastScrollY;
            if (Math.abs(diff) < DELTA) {
                ticking = false;
                return;
            }

            if (diff > 0 && currentY > HIDE_THRESHOLD) {
                // Scrolling down
                navbar.classList.add('nav-hidden');
            } else if (diff < 0) {
                // Scrolling up
                navbar.classList.remove('nav-hidden');
            }

            lastScrollY = currentY;
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(onScroll);
                ticking = true;
            }
        }, { passive: true });
    })();

    // Measure navbar height and expose as CSS var so fixed navbar doesn't overlap content
    (function() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        function updateNavHeight() {
            const h = navbar.offsetHeight;
            document.documentElement.style.setProperty('--navbar-height', h + 'px');
            const main = document.querySelector('.main-content');
            if (main) main.style.marginTop = h + 'px';
        }
        updateNavHeight();
        window.addEventListener('resize', updateNavHeight);
        // also update after fonts/images load
        window.addEventListener('load', updateNavHeight);
    })();
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

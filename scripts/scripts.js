// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active section in navbar
const navLinks = document.querySelectorAll('nav a');
const highlightActiveSection = () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightActiveSection);

// Scroll animation for sections
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSection);
revealSection(); // Initial check

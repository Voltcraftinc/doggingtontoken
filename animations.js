document.addEventListener('DOMContentLoaded', () => {
    // Add animations for scroll events
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Smooth scrolling effect for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add parallax effect on scroll for header background
    const header = document.querySelector('.landing-header');
    window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY;
        header.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    });
});

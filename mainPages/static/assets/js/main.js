document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('#navmenu');

    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        mobileNavToggle.classList.toggle('bi-x');
    });

    // Dropdown functionality
    document.querySelectorAll('.toggle-dropdown').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const parent = toggle.closest('.dropdown');
            parent.classList.toggle('open');
        });
    });

    // Update active link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navmenu a');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 200; // Adjust for header height

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Carousel Indicators
    const heroCarousel = document.querySelector('#hero-carousel');
    if (heroCarousel) {
        const indicators = heroCarousel.querySelector('.carousel-indicators');
        const items = heroCarousel.querySelectorAll('.carousel-item');
        
        items.forEach((_, index) => {
            const li = document.createElement('li');
            li.dataset.bsTarget = '#hero-carousel';
            li.dataset.bsSlideTo = index;
            if (index === 0) li.classList.add('active');
            indicators.appendChild(li);
        });
    }
});

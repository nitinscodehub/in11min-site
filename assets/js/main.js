const mobileToggle = document.querySelector('.mobile-menu');
const navigation = document.querySelector('header nav');

if (mobileToggle && navigation) {
    const toggleMenu = () => {
        const isOpen = navigation.classList.toggle('active');
        mobileToggle.setAttribute('aria-expanded', isOpen.toString());
        mobileToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        document.body.classList.toggle('no-scroll', isOpen);
    };

    mobileToggle.addEventListener('click', toggleMenu);

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navigation.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && navigation.classList.contains('active')) {
            toggleMenu();
        }
    });
}

// Smooth scrolling for anchor links within the current page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId.length < 2) return;

    anchor.addEventListener('click', event => {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
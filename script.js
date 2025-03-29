// Menu mobile
const nav = document.querySelector('nav ul');
document.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Animation des cartes (pour programme.html)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Animation des cartes au scroll
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease forwards';
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(card => observer.observe(card));
});

// Exemple de CTA interactif
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Rejoignez le mouvement dès maintenant !');
    });
}

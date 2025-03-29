// Animation supplémentaire pour le bouton CTA
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta');

    // Effet de pulsation au chargement
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.animation = 'pulse 0.5s infinite';
    });

    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.animation = 'none';
    });

    // Redirection fictive au clic (à personnaliser)
    ctaButton.addEventListener('click', () => {
        alert('Bienvenue dans le mouvement ! Inscris-toi pour nous rejoindre.');
        // window.location.href = '/inscription'; // À décommenter et adapter
    });
});

// Définition de l'animation de pulsation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(styleSheet);

// Défilement fluide pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion des onglets
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Désactiver tous les boutons et contenus
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

        // Activer le bouton et le contenu sélectionnés
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Animation au chargement
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
    document.querySelectorAll('.slide-in').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.3}s`;
    });
});

// Validation des formulaires
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulaire soumis avec succès !');
    });
});

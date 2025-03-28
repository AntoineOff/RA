// Smooth scroll pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion des onglets
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');

        // Cacher tous les contenus
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        // Afficher le contenu correspondant
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Animation d'apparition au chargement
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.tab-content, .hero h2, .hero p, .cta-button');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s, transform 0.5s';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

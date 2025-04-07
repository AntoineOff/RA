// Animation simple pour les boutons CTA
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Soumission des formulaires (exemple basique)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulaire envoyé avec succès !');
    });
});

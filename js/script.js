// Animation des cartes dans la section Programme
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const info = card.getAttribute('data-info');
        alert(info); // Remplacez par une infographie animée si besoin
    });
});

// Smooth Scroll pour les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

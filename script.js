// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Effet de défilement pour les éléments
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Smooth scroll pour les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// YouTube Player API
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: 'YOUR_VIDEO_ID', // Remplacez par l'ID de votre vidéo YouTube (ex. "dQw4w9WgXcQ")
        playerVars: {
            'autoplay': 1,         // Lecture automatique
            'controls': 0,         // Masquer les contrôles
            'loop': 1,             // Boucle
            'mute': 1,             // Muet
            'showinfo': 0,         // Masquer les infos
            'rel': 0,              // Ne pas montrer les vidéos suggérées
            'playlist': 'YOUR_VIDEO_ID' // Nécessaire pour la boucle
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo(); // Démarre la vidéo dès qu'elle est prête
}

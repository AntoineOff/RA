// Gestion du carrousel
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Auto-rotation toutes les 5 secondes
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Gestion des onglets
const tabLinks = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.getAttribute('data-tab');

        tabLinks.forEach(l => l.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        link.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Animation des boutons CTA
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Soumission des formulaires
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulaire envoyé avec succès !');
    });
});

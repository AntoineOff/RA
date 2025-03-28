// Fonction de défilement fluide vers une section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Merci pour votre message !");
  this.reset();
});

// Fonction pour défiler en douceur
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Gestion des onglets
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Animation au scroll
document.addEventListener('scroll', function() {
  document.querySelectorAll('.card').forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 50) {
      card.classList.add('visible');
    }
  });
});

// Activation par défaut
document.addEventListener('DOMContentLoaded', () => {
  showTab('idees');
});

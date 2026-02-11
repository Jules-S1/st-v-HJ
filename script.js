// On sélectionne le bouton
const boutonFuyant = document.getElementById('boutonFuyant');

// On écoute l'événement "survol de la souris" (mouseenter)
// C'est plus dur que le clic : le bouton bouge dès qu'on l'approche !
boutonFuyant.addEventListener('mouseenter', function() {
    bougerLeBouton();
});

// On gère aussi le clic sur écran tactile (pour mobile)
boutonFuyant.addEventListener('click', function() {
    bougerLeBouton();
});

function bougerLeBouton() {
    // Calculer la largeur et hauteur de la fenêtre disponible
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;

    // Générer une position aléatoire
    const nouveauX = Math.random() * (largeurFenetre - 150);
    const nouveauY = Math.random() * (hauteurFenetre - 100);

    // Appliquer la nouvelle position
    boutonFuyant.style.left = nouveauX + 'px';
    boutonFuyant.style.top = nouveauY + 'px';
}
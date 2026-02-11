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

// 1. On sélectionne le bouton et les DEUX images
const boutonFixe = document.getElementById('boutonFixe');
const imageG = document.getElementById('imgGauche');
const imageD = document.getElementById('imgDroite');

// 2. On écoute le clic
boutonFixe.addEventListener('click', function() {
    
    // On vérifie l'état de la première image (si l'une est cachée, l'autre l'est aussi)
    if (imageG.style.display === 'block') {
        // SI ELLES SONT VISIBLES -> ON LES CACHE
        imageG.style.display = 'none';
        imageD.style.display = 'none';
        boutonFixe.innerText = "Montrer les surprises 🎁";
    } 
});
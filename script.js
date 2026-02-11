// --- PARTIE 1 : BOUTON QUI BOUGE (Uniquement au clic) ---
const boutonFuyant = document.getElementById('boutonFuyant');

// J'ai supprimé le "mouseenter", il ne reste que le clic
boutonFuyant.addEventListener('click', function() {
    bougerLeBouton();
});

function bougerLeBouton() {
    // 1. On récupère les dimensions de l'écran
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;

    // 2. On mesure la taille réelle du bouton (largeur et hauteur)
    // "offsetWidth" nous donne la largeur exacte du bouton avec son texte
    const largeurBouton = boutonFuyant.offsetWidth;
    const hauteurBouton = boutonFuyant.offsetHeight;

    // 3. On calcule la zone autorisée (Écran - Bouton - Marge de 20px)
    // On enlève la taille du bouton pour qu'il ne dépasse pas
    const maxX = largeurFenetre - largeurBouton - 20;
    const maxY = hauteurFenetre - hauteurBouton - 20;

    // 4. On génère la position aléatoire
    // Math.max(0, ...) est une sécurité : si l'écran est minuscule, ça reste à 0
    const nouveauX = Math.random() * Math.max(0, maxX);
    const nouveauY = Math.random() * Math.max(0, maxY);

    // 5. On applique
    boutonFuyant.style.left = nouveauX + 'px';
    boutonFuyant.style.top = nouveauY + 'px';
}

// --- PARTIE 2 : BOUTON FIXE (Change juste le texte) ---
const boutonFixe = document.getElementById('boutonFixe');

// On écoute le clic
boutonFixe.addEventListener('click', function() {
    // On change le texte
    boutonFixe.innerText = "Tu fais de moi un homme heureux ;)";
    
    // On change la couleur pour faire plus festif
    //boutonFixe.style.backgroundColor = "#ff6b6b";
    //boutonFixe.style.color = "white";
});
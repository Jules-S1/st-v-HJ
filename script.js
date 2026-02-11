// --- PARTIE 1 : BOUTON QUI BOUGE (Uniquement au clic) ---
const boutonFuyant = document.getElementById('boutonFuyant');

// J'ai supprimé le "mouseenter", il ne reste que le clic
boutonFuyant.addEventListener('click', function() {
    bougerLeBouton();
});

function bougerLeBouton() {
    // Calculer la largeur et hauteur de la fenêtre disponible
    const largeurFenetre = window.innerWidth;
    const hauteurFenetre = window.innerHeight;

    // Générer une position aléatoire (on garde une marge pour qu'il ne sorte pas trop)
    const nouveauX = Math.random() * (largeurFenetre - 200);
    const nouveauY = Math.random() * (hauteurFenetre - 100);

    // Appliquer la nouvelle position
    boutonFuyant.style.left = nouveauX + 'px';
    boutonFuyant.style.top = nouveauY + 'px';
}

// --- PARTIE 2 : BOUTON FIXE (Change juste le texte) ---
const boutonFixe = document.getElementById('boutonFixe');

// On écoute le clic
boutonFixe.addEventListener('click', function() {
    // On change le texte
    boutonFixe.innerText = "Je le savais ! ❤️ (Tu ne peux pas m'échapper !)";
    
    // On change la couleur pour faire plus festif
    //boutonFixe.style.backgroundColor = "#ff6b6b";
    //boutonFixe.style.color = "white";
});
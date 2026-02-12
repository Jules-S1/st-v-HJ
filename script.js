const btnSurprise = document.getElementById('btn-surprise');
const btnEscape = document.getElementById('btn-escape');
const messageContainer = document.getElementById('message-container');
const imageContainer = document.getElementById('image-container');

// 1. Logique du bouton "Surprise" (Apparition message et images)
btnSurprise.addEventListener('click', () => {
    // Affichage du message
    messageContainer.innerHTML = "✨J'étais sûr que tu m'aimais à ce point✨";

    // Ajout des images à gauche et à droite
    imageContainer.innerHTML = `
        <img src="https://www.lafontainefleurie.fr/Files/126399/Img/06/Ophelie-210-zoom.png" class="side-img left" alt="Image Gauche">
        <img src="https://static.vecteezy.com/system/resources/previews/051/028/458/non_2x/watercolor-illustration-of-a-wreath-of-lilies-free-png.png" class="side-img right" alt="Image Droite">
    `;
    
});

// 2. Logique du bouton "Fuyant" (Déplacement aléatoire)
btnEscape.addEventListener('click', () => {
    // Calculer des positions aléatoires dans la fenêtre
    const maxX = window.innerWidth - btnEscape.offsetWidth;
    const maxY = window.innerHeight - btnEscape.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Appliquer les nouvelles coordonnées
    btnEscape.style.left = `${randomX}px`;
    btnEscape.style.top = `${randomY}px`;
});

btnSurprise.addEventListener('click', () => {
    createPetals(60); // Crée 30 pétales au clic
});

function createPetals(number) {
    const petals = ['🌸', '🌹', '🐎', '🌷','🐸','🍂','🍒','💚','💕']; // Tu peux changer les émojis ici
    
    for (let i = 0; i < number; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Sélection aléatoire d'un émoji
        petal.innerText = petals[Math.floor(Math.random() * petals.length)];
        
        // Position horizontale aléatoire (0 à 100% de la largeur)
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Vitesse de chute aléatoire (entre 3 et 8 secondes)
        const duration = Math.random() * 5 + 3;
        petal.style.animationDuration = duration + 's';
        
        // Taille aléatoire
        petal.style.fontSize = Math.random() * 20 + 15 + 'px';

        document.body.appendChild(petal);

        // On supprime le pétale après l'animation pour ne pas alourdir la page
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }
}

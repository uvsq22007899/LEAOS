let haut = [];
let milieu = [];
let bas = [];
let button;
let backgroundImage;

function preload() {
  // Chargement des images pour Og
  let imgHaut01 = loadImage("images/haut/01.png");
  let imgHaut02 = loadImage("images/haut/02.png");
  let imgHaut03 = loadImage("images/haut/03.png");
  let imgHaut04 = loadImage("images/haut/04.png");
  let imgHaut05 = loadImage("images/haut/05.png");
  backgroundImage = loadImage("images/Fichier 1.jpg");

  haut = [imgHaut01, imgHaut02, imgHaut03, imgHaut04, imgHaut05]; 

 
  // Chargement des images pour le milieu
  let imgMilieu01 = loadImage("images/milieu/01.png");
  let imgMilieu02 = loadImage("images/milieu/02.png");
  let imgMilieu03 = loadImage("images/milieu/03.png");
  let imgMilieu04 = loadImage("images/milieu/04.png");
  let imgMilieu05 = loadImage("images/milieu/05.png");

  milieu = [imgMilieu01, imgMilieu02, imgMilieu03, imgMilieu04, imgMilieu05];

  // Chargement des images pour le bas
  let imgBas01 = loadImage("images/bas/01.png");
  let imgBas02 = loadImage("images/bas/02.png");
  let imgBas03 = loadImage("images/bas/03.png");
  let imgBas04 = loadImage("images/bas/04.png");
  let imgBas05 = loadImage("images/bas/05.png");

  bas = [imgBas01, imgBas02, imgBas03, imgBas04, imgBas05]; 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Désactive la boucle d'animation

  
}

function draw() {
  background(backgroundImage);

  let randomHaut = random(haut);
  image(randomHaut, 520,  100);

  let randomMilieu = random(milieu);
  image(randomMilieu, 520, 260);

  let randomBas = random(bas);
  image(randomBas, 520, 420);
}

// Fonction appelée lorsque le bouton est cliqué
function changeImage() {
  redraw(); // Redessine le canvas, ce qui appelle la fonction draw() à nouveau
}


function setup() {
  // Créer le canvas
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Désactive la boucle d'animation

  // Gestionnaire d'événements pour détecter la position de la souris entre le canva et la première section
  window.addEventListener('scroll', function() {
    const canva = document.getElementById('myCanvas');
    const firstSection = document.querySelector('.section2');

    const canvaRect = canva.getBoundingClientRect();
    const firstSectionRect = firstSection.getBoundingClientRect();

    if (window.scrollY >= canvaRect.bottom && window.scrollY < firstSectionRect.top) {
        // Si la souris est entre le canva et la première section
        const deltaY = window.scrollY - canvaRect.bottom + canvaRect.height;
        window.scrollBy(0, -deltaY); // Ajustez la position du défilement pour déplacer le canva hors de vue
    }
  });
}

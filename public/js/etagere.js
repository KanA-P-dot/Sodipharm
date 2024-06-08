// Récupération des paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const hauteur = parseInt(params.get('hauteur')) || 100;
const largeur = parseInt(params.get('largeur')) || 200;

// Mise à jour des dimensions du rectangle
const rectanglePreview = document.getElementById('rectangle-preview');
rectanglePreview.style.width = `${largeur}px`;
rectanglePreview.style.height = `${hauteur}px`;

// Mise à jour des dimensions de l'etagere
const etagereContainer = document.getElementById('etagere-container');
etagereContainer.style.width = `${largeur}px`;
etagereContainer.style.height = `${hauteur}px`;

// Variable pour garder la trace de la hauteur totale des étagères
let hauteurTotaleEtagere = 0;

// Variable pour garder la trace des hauteurs des étagères
const hauteursEtagere = [];

// Événement sur le clic du bouton "Ajouter étagère"
const addEtagereButton = document.getElementById('add-etagere');
addEtagereButton.addEventListener('click', () => {
  const hauteurEtageInput = document.getElementById('hauteur-etage');
  const nouvelleHauteur = parseInt(hauteurEtageInput.value);
  if (!isNaN(nouvelleHauteur)) {
    ajouterEtagere(nouvelleHauteur);
  }
});

// Événement sur le clic du lien "nav-to-produits"
const navToProduitsLink = document.getElementById('nav-to-produits');
navToProduitsLink.addEventListener('click', (event) => {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  redirigerVersProduits(); // Redirige vers la page des produits avec les paramètres mis à jour
});

// Fonction pour mettre à jour les paramètres de l'URL et rediriger vers /produits
function redirigerVersProduits() {
  const newParams = new URLSearchParams(window.location.search);
  newParams.set('hauteurs', hauteursEtagere.join(','));
  const newUrl = '/produit?' + newParams.toString();
  window.location.href = newUrl;
}

// Fonction pour ajouter une étagère
function ajouterEtagere(nouvelleHauteur) {
  const hauteurDisponible = hauteur - hauteurTotaleEtagere;

  if (nouvelleHauteur <= hauteurDisponible) {
    // Enlever 1px de la hauteur visuelle de l'étagère
    const hauteurEtagereVisuelle = nouvelleHauteur - 1;

    const etagere = document.createElement('div');
    etagere.style.width = `${largeur}px`;
    etagere.style.height = `${hauteurEtagereVisuelle}px`;
    etagere.style.backgroundColor = '#ccc';
    etagere.style.borderBottom = 'solid 1px #000';
    etagere.classList.add('single-etagere');
    etagereContainer.appendChild(etagere);

    // Conserver la hauteur totale correcte
    hauteurTotaleEtagere += nouvelleHauteur;
    hauteursEtagere.push(nouvelleHauteur);
  } else {
    alert(`Impossible d'ajouter une étagère de ${nouvelleHauteur}px. Hauteur disponible: ${hauteurDisponible}px.`);
  }
}

// Initialiser les hauteurs des étagères à partir des paramètres de l'URL
function initialiserHauteursEtagere() {
  const hauteursParam = params.get('hauteurs');
  if (hauteursParam) {
    const hauteurs = hauteursParam.split(',').map(h => parseInt(h));
    hauteurs.forEach(hauteur => {
      if (!isNaN(hauteur)) {
        ajouterEtagere(hauteur);
      }
    });
  }
}

// Appeler la fonction d'initialisation lors du chargement de la page
initialiserHauteursEtagere();

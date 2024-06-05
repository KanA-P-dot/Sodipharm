document.addEventListener('DOMContentLoaded', () => {
    const hauteurInput = document.getElementById('hauteur');
    const largeurInput = document.getElementById('largeur');
    const rectanglePreview = document.getElementById('rectangle-preview');
    const hauteurLabel = document.getElementById('hauteur-label');
    const largeurLabel = document.getElementById('largeur-label');
    const nextButton = document.getElementById('next-button');

    // Fonction pour mettre à jour la preview
    const updatePreview = () => {
        const hauteur = hauteurInput.value;
        const largeur = largeurInput.value;

        if (hauteur && largeur) {
            rectanglePreview.style.height = `${hauteur}px`;
            rectanglePreview.style.width = `${largeur}px`;

            hauteurLabel.textContent = `${hauteur}cm`;
            largeurLabel.textContent = `${largeur}cm`;

            // Construction de l'URL avec les paramètres hauteur et largeur
            const url = `etagere?hauteur=${encodeURIComponent(hauteur)}&largeur=${encodeURIComponent(largeur)}`;
            
            // Redirection vers l'URL
            nextButton.setAttribute('onclick', `window.location.href='${url}'`);
        } else {
            alert('Veuillez entrer des valeurs pour la hauteur et la largeur.');
        }
    };

    // Mettre à jour la preview lorsque les valeurs changent
    hauteurInput.addEventListener('input', updatePreview);
    largeurInput.addEventListener('input', updatePreview);

    // Appeler la fonction updatePreview une première fois pour afficher la preview initiale
    updatePreview();
});

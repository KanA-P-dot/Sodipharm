
        // Récupération des paramètres de l'URL
        const params = new URLSearchParams(window.location.search);
        const hauteur = parseInt(params.get('hauteur')) || 400;
        const largeur = parseInt(params.get('largeur')) || 200;
        const hauteursEtagere = params.get('hauteurs') ? params.get('hauteurs').split(',').map(h => parseInt(h)) : [];
        console.log(hauteursEtagere);

        // Mise à jour des dimensions du rectangle
        const rectanglePreview = document.getElementById('rectangle-preview');
        rectanglePreview.style.width = `${largeur}px`;
        rectanglePreview.style.height = `${hauteur}px`;

        // Mise à jour des dimensions de l'etagere
        const etagereContainer = document.getElementById('etagere-container');
        etagereContainer.style.width = `${largeur}px`;
        etagereContainer.style.height = `${hauteur}px`;

        // Fonction pour ajouter une étagère
        function ajouterEtagere(nouvelleHauteur) {
            const etagere = document.createElement('div');
            etagere.style.height = `${nouvelleHauteur}px`;
            etagere.classList.add('single-etagere');
            etagereContainer.appendChild(etagere);

            // Permettre le drop des produits dans les étagères
            etagere.addEventListener('dragover', function(e) {
                e.preventDefault();
            });

            etagere.addEventListener('drop', function(e) {
                e.preventDefault();
                const productId = e.dataTransfer.getData('text');
                const product = document.getElementById(productId);
                const productWidth = parseInt(product.getAttribute('data-width'));
                const productHeight = parseInt(product.getAttribute('data-height'));

                const etagereChildren = Array.from(etagere.children);
                const usedWidth = etagereChildren.reduce((acc, child) => acc + child.offsetWidth, 0);

                if (etagere.clientHeight >= productHeight && (etagere.clientWidth - usedWidth) >= productWidth) {
                    etagere.appendChild(product);
                    product.style.height = `${productHeight}px`;
                    product.style.width = `${productWidth}px`;
                } else {
                    alert('Le produit est trop grand pour cette étagère ou il n\'y a pas assez d\'espace.');
                }
            });
        }

        // Ajouter les étagères en fonction des hauteurs récupérées
        hauteursEtagere.forEach(hauteurEtagere => {
            if (!isNaN(hauteurEtagere)) {
                ajouterEtagere(hauteurEtagere);
            }
        });

        // Ajouter la fonctionnalité drag-and-drop pour les produits
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            product.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('text', e.target.id);
            });
        });
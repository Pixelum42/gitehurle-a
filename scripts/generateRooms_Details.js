// Fonction pour afficher les détails d'une chambre avec le carousel centré à gauche
function displayRoomDetails(room) {
    containerRooms.innerHTML = ''; // Effacer l'aperçu

    const chambreDiv = document.createElement('div');
    chambreDiv.classList.add('chambre');
    chambreDiv.style.margin = '20px';
    chambreDiv.style.display = 'flex';  // Disposer en ligne
    chambreDiv.style.alignItems = 'center'; // Centrer verticalement le carousel
    chambreDiv.style.gap = '20px';

    // Carousel d'images (à gauche, centré)
    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');
    carouselDiv.style.position = 'relative';
    carouselDiv.style.width = '50%'; // Le carousel prend 50% de la largeur
    carouselDiv.style.height = '400px';
    carouselDiv.style.overflow = 'hidden';
    carouselDiv.style.marginBottom = '20px';

    let currentImageIndex = 0;

    const carouselImage = document.createElement('img');
    carouselImage.src = room.images[currentImageIndex];
    carouselImage.style.width = '100%';
    carouselImage.style.height = '100%';
    carouselImage.style.objectFit = 'cover';
    carouselDiv.appendChild(carouselImage);

    // Flèches de navigation
    const prevArrow = document.createElement('button');
    prevArrow.textContent = '<';
    prevArrow.style.position = 'absolute';
    prevArrow.style.top = '50%';
    prevArrow.style.left = '10px';
    prevArrow.style.transform = 'translateY(-50%)';
    prevArrow.style.fontSize = '2em';
    prevArrow.style.background = 'none';
    prevArrow.style.border = 'none';
    prevArrow.style.color = 'white';
    prevArrow.style.cursor = 'pointer';
    carouselDiv.appendChild(prevArrow);

    const nextArrow = document.createElement('button');
    nextArrow.textContent = '>';
    nextArrow.style.position = 'absolute';
    nextArrow.style.top = '50%';
    nextArrow.style.right = '10px';
    nextArrow.style.transform = 'translateY(-50%)';
    nextArrow.style.fontSize = '2em';
    nextArrow.style.background = 'none';
    nextArrow.style.border = 'none';
    nextArrow.style.color = 'white';
    nextArrow.style.cursor = 'pointer';
    carouselDiv.appendChild(nextArrow);

    // Gestion du changement d'images dans le carousel
    prevArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + room.images.length) % room.images.length;
        carouselImage.src = room.images[currentImageIndex];
    });

    nextArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % room.images.length;
        carouselImage.src = room.images[currentImageIndex];
    });

    chambreDiv.appendChild(carouselDiv);  // Ajout du carousel à gauche, centré verticalement

    // Détails à droite du carousel (description uniquement)
    const detailsDiv = document.createElement('div');
    detailsDiv.style.flex = '1';  // Prendre tout l'espace disponible

    const titre = document.createElement('h2');
    titre.textContent = room.nom;
    detailsDiv.appendChild(titre);

    const description = document.createElement('p');
    description.textContent = room.description;
    detailsDiv.appendChild(description);

    // Ajouter les informations sous la description à droite
    const infoSection = document.createElement('div');
    infoSection.style.marginTop = '20px';
    infoSection.style.display = 'block';

    const info = document.createElement('p');
    info.textContent = `Prix: ${room.prix} € / Nuit`;
    infoSection.appendChild(info);

    const descriptionSup = document.createElement('p');
    descriptionSup.textContent = room.descriptionSup;
    infoSection.appendChild(descriptionSup);

    const formulesDiv = document.createElement('div');
    formulesDiv.style.marginTop = '10px';

    // Ajouter les descriptions complètes des formules, sans afficher "weekend d'amour" pour certaines chambres
    room.formules.forEach(formule => {
        const formuleInfo = document.createElement('p');
        switch (formule) {
            case "weekend d'amour":
                formuleInfo.textContent = "Vivez une expérience amoureuse unique grâce à notre formule Weekend d’amour ! Bénéficiez d'une remise de 10 % sur le total de vos nuitées, tout en savourant un petit déjeuner « lover » servi dans le confort de votre lit. Réveillez-vous en douceur et créez des souvenirs mémorables ensemble !";
                break;
            case "nature et découverte":
                formuleInfo.textContent = "Découvrez la formule Nature et Découverte, parfaite pour tous vos séjours de plus de 5 nuits, week-end inclus ! Vous bénéficierez d'une réduction de 5 % sur l'ensemble de votre expérience, tout en vous lançant dans l'aventure « Rahan » en terre du Gévaudan, où le coutelas vous sera fourni pour parfaire votre escapade !";
                break;
            case "travail saisonnier":
                formuleInfo.textContent = "Saisissez l'opportunité de notre formule travail saisonnier et économisez 20 % sur le tarif total de votre séjour ! Valable pour tous nos types d’espaces à condition de réserver au minimum un mois, cette offre s’applique durant les périodes allant de juin à août (inclus) et de décembre à mars (inclus). En haute saison, une légère majoration de 10 % sur les nuitées sera appliquée. Réservez dès aujourd'hui pour bénéficier de ces avantages !";
                break;
            default:
                formuleInfo.textContent = `Formule : ${formule}`;
        }
        formulesDiv.appendChild(formuleInfo);
    });

    infoSection.appendChild(formulesDiv);

    // Ajouter le bouton de réservation
    const reservationButton = document.createElement('button');
    reservationButton.textContent = 'Réserver';
    reservationButton.style.padding = '10px 15px';
    reservationButton.style.backgroundColor = '#28a745';
    reservationButton.style.color = 'white';
    reservationButton.style.border = 'none';
    reservationButton.style.borderRadius = '5px';
    reservationButton.style.cursor = 'pointer';

    reservationButton.addEventListener('click', () => {
        alert('Réservation de la chambre: ' + room.nom);
    });

    infoSection.appendChild(reservationButton);

    // Ajouter la description et les infos dans le div de détails
    detailsDiv.appendChild(infoSection);
    chambreDiv.appendChild(detailsDiv);

    containerRooms.appendChild(chambreDiv);
}
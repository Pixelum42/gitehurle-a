const main = document.getElementById('main-id');

// Fonction pour afficher les détails d'une chambre avec le carousel centré à gauche
function displayRoomDetails(room) {
    main.innerHTML = '';

    const chambreDiv = document.createElement('div');
    chambreDiv.classList.add('chambre');
    chambreDiv.style.margin = '4em 1em 2em 1em';
    chambreDiv.style.display = 'flex';
    chambreDiv.style.columnGap = '2em';

    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');
    carouselDiv.style.position = 'relative';
    carouselDiv.style.width = '50%';
    carouselDiv.style.height = '30em';
    carouselDiv.style.overflow = 'hidden';
    carouselDiv.style.marginBottom = '1em';

    let currentImageIndex = 0;

    const carouselImage = document.createElement('img');
    carouselImage.src = room.images[currentImageIndex];
    carouselImage.style.width = '100%';
    carouselImage.style.height = '100%';
    carouselImage.style.objectFit = 'cover';
    carouselDiv.appendChild(carouselImage);


    const prevArrow = document.createElement('button');
    prevArrow.textContent = '<';
    prevArrow.style.position = 'absolute';
    prevArrow.style.top = '50%';
    prevArrow.style.left = '1em';
    prevArrow.style.transform = 'translateY(-50%)';
    prevArrow.style.fontSize = '2em';
    prevArrow.style.fontWeight = "bold";
    prevArrow.style.background = 'none';
    prevArrow.style.border = 'none';
    prevArrow.style.color = rootColors["--primary"];
    prevArrow.style.cursor = 'pointer';
    carouselDiv.appendChild(prevArrow);

    const nextArrow = document.createElement('button');
    nextArrow.textContent = '>';
    nextArrow.style.position = 'absolute';
    nextArrow.style.top = '50%';
    nextArrow.style.right = '1em';
    nextArrow.style.transform = 'translateY(-50%)';
    nextArrow.style.fontSize = '2em';
    nextArrow.style.fontWeight = "bold";
    nextArrow.style.background = 'none';
    nextArrow.style.border = 'none';
    nextArrow.style.color = rootColors["--primary"];
    nextArrow.style.cursor = 'pointer';
    carouselDiv.appendChild(nextArrow);


    prevArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + room.images.length) % room.images.length;
        carouselImage.src = room.images[currentImageIndex];
    });

    nextArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % room.images.length;
        carouselImage.src = room.images[currentImageIndex];
    });

    chambreDiv.appendChild(carouselDiv);


    const detailsDiv = document.createElement('div');
    // Prend tout l'espace disponible
    detailsDiv.style.flex = '1';

    const titre = document.createElement('h2');
    titre.textContent = room.nom;
    detailsDiv.appendChild(titre);

    const description = document.createElement('p');
    description.style.fontSize = '1em';
    description.textContent = room.description;
    detailsDiv.appendChild(description);

    const infoSection = document.createElement('div');
    infoSection.style.marginTop = '2em';
    infoSection.style.display = 'block';
    
    const info = document.createElement('p');
    info.style.fontSize = '1em';
    info.textContent = `Prix: ${room.prix} € / Nuit`;
    infoSection.appendChild(info);

    const descriptionSup = document.createElement('p');
    descriptionSup.style.fontSize = '1em';
    descriptionSup.textContent = room.descriptionSup;
    infoSection.appendChild(descriptionSup);

    const formulesDiv = document.createElement('div');
    formulesDiv.style.marginTop = '1em';
    
    // Ajoute les descriptions complètes des formules, sans afficher "weekend d'amour" pour certaines chambres
    const formuleInfo = document.createElement('p');
    formuleInfo.style.fontSize = '1em';
    room.formules.forEach(formule => {
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

    const reservationButton = document.createElement('button');
    reservationButton.textContent = 'Réserver';
    reservationButton.style.padding = '10px 15px';
    reservationButton.style.backgroundColor = rootColors["--accent"];
    reservationButton.style.color = rootColors["--background"];
    reservationButton.style.border = 'none';
    reservationButton.style.borderRadius = '5px';
    reservationButton.style.cursor = 'pointer';

    // reservationButton.addEventListener('click', (event) => {
    //     makeFormBook(room.id);
    // });

    infoSection.appendChild(reservationButton);

    detailsDiv.appendChild(infoSection);
    chambreDiv.appendChild(detailsDiv);

    main.appendChild(chambreDiv);
}
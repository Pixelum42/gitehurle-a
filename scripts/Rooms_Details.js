function displayRoomDetails(room) {
    const main = document.getElementById('main-id');
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
    prevArrow.style.left = '0.5em';
    prevArrow.style.transform = 'translateY(-50%)';
    prevArrow.style.fontSize = '3em';
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
    nextArrow.style.right = '0.5em';
    nextArrow.style.transform = 'translateY(-50%)';
    nextArrow.style.fontSize = '3em';
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
    
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % room.images.length;
        carouselImage.src = room.images[currentImageIndex];
    }, 2000);


    chambreDiv.appendChild(carouselDiv);


    const detailsDiv = document.createElement('div');
    detailsDiv.style.flex = '1';

    const titre = document.createElement('h2');
    titre.textContent = room.nom;
    titre.style.color = rootColors["--accent"];
    detailsDiv.appendChild(titre);

    const description = document.createElement('p');
    description.style.fontSize = '1em';
    description.textContent = room.description;
    description.style.fontWeight = "400";
    description.style.color = rootColors["--text"];
    detailsDiv.appendChild(description);

    const infoSection = document.createElement('div');
    infoSection.style.marginTop = '2em';
    infoSection.style.display = 'block';
    
    const info = document.createElement('p');
    info.textContent = `Prix: ${room.prix} € / Nuit`;
    info.style.fontSize = '1em';
    info.style.fontWeight = "400";
    info.style.color = rootColors["--primary"];
    infoSection.appendChild(info);

    const descriptionSup = document.createElement('p');
    descriptionSup.style.fontSize = '1em';
    descriptionSup.textContent = room.descriptionSup;
    infoSection.appendChild(descriptionSup);

    const formulesDiv = document.createElement('div');
    formulesDiv.style.marginTop = '1em';
    
    // Ajoute les descriptions complètes des formules, sans afficher "weekend d'amour" pour certaines chambres
    let formulesDispo = [];
    for (let i = 0; i < FormulaRepertory.length; i++) {
        if(FormulaRepertory[i].spaceAvailibility[room.id]!=0){
            formulesDispo.push(FormulaRepertory[i]);                      
        }
    } 
    const formuleInfo = document.createElement('p');
    formuleInfo.style.fontSize = '1em';
    formulesDispo.forEach(formule => {
        const formuleInfo = document.createElement('p');
        formuleInfo.textContent =  formule.description;
        formuleInfo.style.fontWeight = "400";
        formuleInfo.style.color = rootColors["--text"];
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

    reservationButton.addEventListener('click', (event) => {
        makeFormBook(room.id);
    });

    infoSection.appendChild(reservationButton);

    detailsDiv.appendChild(infoSection);
    chambreDiv.appendChild(detailsDiv);

    main.appendChild(chambreDiv);
}
// Fonction pour afficher un aperçu des chambres sur la page principale
function displayRoomPreview(room) {
    main.innerHTML = '';

    const chambreDiv = document.createElement('div');
    chambreDiv.classList.add('chambre');
    chambreDiv.style.margin = '20px';
    chambreDiv.style.border = '1px solid #ccc';
    chambreDiv.style.padding = '10px';
    chambreDiv.style.borderRadius = '5px';

    const titre = document.createElement('h2');
    titre.textContent = room.nom;
    chambreDiv.appendChild(titre);

    // Ajouter l'image d'aperçu (la première image de la chambre)
    const img = document.createElement('img');
    img.src = room.images[0];
    img.alt = `Image de la ${room.nom}`;
    img.style.width = '300px';
    img.style.height = '200px';
    img.style.objectFit = 'cover';
    chambreDiv.appendChild(img);

    // Utiliser la description courte
    const description = document.createElement('p');
    description.textContent = room.shortDescription;
    chambreDiv.appendChild(description);

    // Mentionner brièvement les formules disponibles
    const formulesDiv = document.createElement('p');
    formulesDiv.textContent = `Formules disponibles : ${room.formules.join(", ")}`;
    formulesDiv.style.fontStyle = 'italic';
    formulesDiv.style.color = '#555';
    chambreDiv.appendChild(formulesDiv);

    const info = document.createElement('p');
    info.textContent = `Prix: ${room.prix} € / Nuit`;
    chambreDiv.appendChild(info);

    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Voir les détails';
    detailsButton.style.padding = '10px 15px';
    detailsButton.style.backgroundColor = '#007BFF';
    detailsButton.style.color = 'white';
    detailsButton.style.border = 'none';
    detailsButton.style.borderRadius = '5px';
    detailsButton.style.cursor = 'pointer';

    detailsButton.addEventListener('click', () => {
        displayRoomDetails(room);
    });

    chambreDiv.appendChild(detailsButton);

    main.appendChild(chambreDiv);
}

// displayRoomPreview(rooms[0]);
// displayRoomPreview(rooms[1]);
// displayRoomPreview(rooms[2]);
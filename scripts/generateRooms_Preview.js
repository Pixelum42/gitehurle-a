const rooms = [
    {
        id : 0,
        nom: "La Sérénité du Mont",
        description: "Évadez-vous dans notre chambre \"La Sérénité du Mont\" et laissez-vous séduire par le charme authentique des Cévennes. Nichée au cœur d'une nature préservée, cette chambre vous offre un cocon douillet pour vous ressourcer en toute intimité. Imaginez la sensation paisible de vous laisser bercer par le chant mélodieux des oiseaux, surplombant la sublime panorama du Mont Lozère.",
        images: [
            "https://i.ibb.co/x7gngrJ/duobedroom.jpg",
            "https://i.ibb.co/HrGD2nC/duoliving.jpg",
            "https://i.ibb.co/5WWsGVB/duobathroom.webp",
            "https://i.ibb.co/wpv60Rc/duolandscape.jpg"
            ],
        formules: ["weekend d'amour", "nature et découverte", "travail saisonnier"],
        prix: 35,
        descriptionSup: "Douche + WC. Minimum de 2 nuits en semaine.",
        shortDescription: "Offrez-vous une parenthèse enchantée dans notre chambre \"La Sérénité du Mont\" !"
    },
    {
        id : 1,
        nom: "L'Abri des Aigles",
        description: "Évadez-vous dans notre cocon douillet \"L'Abri des Aigles\". Nichée au cœur des Cévennes, cette chambre vous offre un espace généreux et chaleureux pour vous ressourcer en famille. Avec son lit double moelleux, son lit superposé ludique et son lit simple, elle est idéale pour des nuits paisibles. Après une journée de découvertes, détendez-vous dans votre chambre et profitez de la vue sur les montagnes. Vous vous sentirez comme chez vous !",
        images: [
            "https://i.ibb.co/kMCcmJj/familybedroom.jpg",
            "https://i.ibb.co/JBJtQQB/familyliving.jpg",
            "https://i.ibb.co/yhv9ZVr/familybathroom.jpg",
            "https://i.ibb.co/pvN3ppv/familylandscape.jpg"
        ],
        formules: ["nature et découverte", "travail saisonnier"], // Retiré "weekend d'amour"
        prix: 55,
        descriptionSup: "Douche + WC. Minimum de 2 nuits en semaine.",
        shortDescription: "Pour les familles désireuses de vivre des instants mémorables et de s'immerger dans l'aventure, la chambre \"L'Abri des Aigles\" est une véritable pépite !"
    },
    {
        id : 2,
        nom: "Les Horizons Sauvages",
        description: "Vous aspirez à un peu d'indépendance et d'espace pour votre famille ? L'appartement \"Les Horizons Sauvages\" est fait pour vous ! Avec la capacité d'accueillir jusqu'à 10 personnes grâce à ses deux lits doubles, ses deux lits superposés et ses deux lits simples, vous pourrez également profiter d'une cuisine bien pensée pour partager des instants conviviaux dans un décor exceptionnel.",
        images: [
            "https://i.ibb.co/m6N8LBw/appartbedroom.jpg",
            "https://i.ibb.co/k2C3fyD/appartbedroom1.jpg",
            "https://i.ibb.co/nDPk7mx/appartbedroom2.jpg",
            "https://i.ibb.co/BzVms1B/appartliving.jpg",
            "https://i.ibb.co/nwMZPbq/appartkitchen.jpg",
            "https://i.ibb.co/gF1WgLC/appartbathroom.jpg"
        ],
        
        formules: ["nature et découverte", "travail saisonnier"], // Retiré "weekend d'amour"
        prix: 110,
        descriptionSup: "Douche + WC. Minimum de 2 nuits en semaine.",
        shortDescription: "Vous aspirez à un peu d'indépendance et d'espace pour votre famille ? L'appartement \"Les Horizons Sauvages\" est fait pour vous !"
    }
];

const containerRooms = document.getElementById('main-id');

// Fonction pour afficher un aperçu des chambres sur la page principale
function displayRoomPreview(room) {
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
    img.src = room.images[0];  // Prendre la première image
    img.alt = `Image de la ${room.nom}`;
    img.style.width = '300px';  // Augmenter la taille de l'image
    img.style.height = '200px';
    img.style.objectFit = 'cover';
    chambreDiv.appendChild(img);  // Ajouter l'image sous le titre

    // Utiliser la description courte que vous avez fournie
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

    // Ajouter un bouton pour ouvrir les détails dans un nouvel onglet
    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Voir les détails';
    detailsButton.style.padding = '10px 15px';
    detailsButton.style.backgroundColor = '#007BFF';
    detailsButton.style.color = 'white';
    detailsButton.style.border = 'none';
    detailsButton.style.borderRadius = '5px';
    detailsButton.style.cursor = 'pointer';

    detailsButton.addEventListener('click', () => {
        displayRoomDetails(room)
    });

    chambreDiv.appendChild(detailsButton);

    // Ajouter la div chambre au container
    containerRooms.appendChild(chambreDiv);
}

displayRoomPreview(rooms[0]);
displayRoomPreview(rooms[1]);
displayRoomPreview(rooms[2]);

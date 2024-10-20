const rooms = [
    {
        id : 0,
        nom: "Chambre double - La Sérénité du Mont",
        description: "Évadez-vous dans notre chambre \"La Sérénité du Mont\" et laissez-vous séduire par le charme authentique des Cévennes. Nichée au cœur d'une nature préservée, cette chambre vous offre un cocon douillet pour vous ressourcer en toute intimité. Imaginez la sensation paisible de vous laisser bercer par le chant mélodieux des oiseaux, surplombant la sublime panorama du Mont Lozère.",
        images: [
            "https://i.ibb.co/x7gngrJ/duobedroom.jpg",
            "https://i.ibb.co/HrGD2nC/duoliving.jpg",
            "https://i.ibb.co/5WWsGVB/duobathroom.webp",
            "https://i.ibb.co/wpv60Rc/duolandscape.jpg"
            ],
        prix: 35,
        descriptionSup: "Douche + WC. Minimum de 2 nuits en semaine.",
        shortDescription: "Offrez-vous une parenthèse enchantée dans notre chambre \"La Sérénité du Mont\" !"
    },
    {
        id : 1,
        nom: "Chambre familiale - L'Abri des Aigles",
        description: "Évadez-vous dans notre cocon douillet \"L'Abri des Aigles\". Nichée au cœur des Cévennes, cette chambre vous offre un espace généreux et chaleureux pour vous ressourcer en famille. Avec son lit double moelleux, son lit superposé ludique et son lit simple, elle est idéale pour des nuits paisibles. Après une journée de découvertes, détendez-vous dans votre chambre et profitez de la vue sur les montagnes. Vous vous sentirez comme chez vous !",
        images: [
            "https://i.ibb.co/kMCcmJj/familybedroom.jpg",
            "https://i.ibb.co/JBJtQQB/familyliving.jpg",
            "https://i.ibb.co/yhv9ZVr/familybathroom.jpg",
            "https://i.ibb.co/pvN3ppv/familylandscape.jpg"
        ],
        prix: 55,
        descriptionSup: "Douche + WC. Minimum de 2 nuits en semaine.",
        shortDescription: "Pour les familles désireuses de vivre des instants mémorables et de s'immerger dans l'aventure, la chambre \"L'Abri des Aigles\" est une véritable pépite !"
    },
    {
        id : 2,
        nom: "Appartement - Les Horizons Sauvages",
        description: "Vous aspirez à un peu d'indépendance et d'espace pour votre famille ? L'appartement \"Les Horizons Sauvages\" est fait pour vous ! Avec la capacité d'accueillir jusqu'à 10 personnes grâce à ses deux lits doubles, ses deux lits superposés et ses deux lits simples, vous pourrez également profiter d'une cuisine bien pensée pour partager des instants conviviaux dans un décor exceptionnel.",
        images: [
            "https://i.ibb.co/m6N8LBw/appartbedroom.jpg",
            "https://i.ibb.co/k2C3fyD/appartbedroom1.jpg",
            "https://i.ibb.co/nDPk7mx/appartbedroom2.jpg",
            "https://i.ibb.co/BzVms1B/appartliving.jpg",
            "https://i.ibb.co/nwMZPbq/appartkitchen.jpg",
            "https://i.ibb.co/gF1WgLC/appartbathroom.jpg"
        ],
        prix: 110,
        descriptionSup: "Douche + WC. Minimum de 2 nuits en semaine.",
        shortDescription: "Vous aspirez à un peu d'indépendance et d'espace pour votre famille ? L'appartement \"Les Horizons Sauvages\" est fait pour vous !"
    }
];

let FormulaRepertory = [
    {
        "name": "Weekend d'Amour",
        "spaceAvailibility": [1, 0, 0],
        "description": "Vivez une expérience amoureuse unique grâce à notre formule Weekend d’amour ! Bénéficiez d'une remise de 10 % sur le total de vos nuitées, tout en savourant un petit déjeuner « lover » servi dans le confort de votre lit. Réveillez-vous en douceur et créez des souvenirs mémorables ensemble !",
        "tarifModifier": "*0.9",
        "minimalDayResa": "2",
        "minimalMonthResa": "0"
    }
    ,
    {
        "name": "Nature et Découverte",
        "spaceAvailibility": [0, 1, 1],
        "description": "Découvrez la formule Nature et Découverte, parfaite pour tous vos séjours de plus de 5 nuits, week-end inclus ! Vous bénéficierez d'une réduction de 5 % sur l'ensemble de votre expérience, tout en vous lançant dans l'aventure « Rahan » en terre du Gévaudan, où le coutelas vous sera fourni pour parfaire votre escapade !",
        "tarifModifier": "*0.95",
        "minimalDayResa": "6",
        "minimalMonthResa": "0"
    }
    ,
    {
        "name": "Travail Saisonnier",
        "spaceAvailibility": [0, 1, 1],
        "description": "Saisissez l'opportunité de notre formule travail saisonnier et économisez 20 % sur le tarif total de votre séjour ! Valable pour tous nos types d’espaces à condition de réserver au minimum un mois, cette offre s’applique durant les périodes allant de juin à août (inclus) et de décembre à mars (inclus). En haute saison, une légère majoration de 10 % sur les nuitées sera appliquée. Réservez dès aujourd'hui pour bénéficier de ces avantages !",
        "tarifModifier": "*0.8",
        "minimalDayResa": "0",
        "minimalMonthResa": "1"
    }
];
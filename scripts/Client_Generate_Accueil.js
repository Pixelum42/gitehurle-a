function generateClient_Accueil() {
    const main = document.getElementById('main-id');
    main.innerHTML = '';

    const histoireDiv = document.createElement("div");
    histoireDiv.className = "p-5";

    const histoireTextDiv = document.createElement("div");
    histoireTextDiv.className = "text-white text-center";
    histoireDiv.appendChild(histoireTextDiv);

    const histoireText = document.createElement("h3");
    histoireText.className = "fw-bold pb-1";
    histoireText.style.color = rootColors["--text"];
    histoireText.style.fontSize = "1.4em";
    histoireText.innerText = "Bienvenue sur Le Gîte Hurle, un gîte familial niché au cœur des montagnes depuis 1985. Notre histoire commence avec Marie et Jean, un couple passionné par la nature, qui a transformé une ancienne ferme en un lieu de détente et de convivialité. Depuis, Le Gîte Hurle accueille des voyageurs en quête de tranquillité et d’authenticité, avec un service chaleureux et personnalisé. Venez découvrir la beauté des paysages sauvages et goûter à la sérénité d’un séjour loin du tumulte quotidien.";

    histoireDiv.appendChild(histoireText);
    main.appendChild(histoireDiv);


    const divAccueil = document.createElement("div");
    divAccueil.className = "container-fluid p-0";

    const divDouble = document.createElement("div");
    divDouble.className = "row g-0";

    const imgDouble = document.createElement("img");
    imgDouble.addEventListener("mouseenter", () => {
        imgDouble.style.cursor = "pointer";
    });
    imgDouble.addEventListener("click", () => {
        displayRoomDetails(rooms[0]);
    });
    imgDouble.className = "col-6 order-2";
    imgDouble.src = `${rooms[0].images[0]}`;
    imgDouble.style.width = "50%";
    imgDouble.style.height = "80vh";
    imgDouble.style.objectFit = "cover";
    divDouble.appendChild(imgDouble);


    const divTextDouble = document.createElement("div");
    divTextDouble.className = "col-6 order-1 my-auto px-4 g-2 d-flex flex-column justify-content-center";

    const h2Double = document.createElement("h2");
    h2Double.textContent = rooms[0].nom;
    h2Double.style.color = rootColors["--accent"];
    divTextDouble.appendChild(h2Double);

    const descriptionDouble = document.createElement("p");
    descriptionDouble.className = "lead mb-4";
    descriptionDouble.textContent = rooms[0].shortDescription;
    descriptionDouble.style.fontWeight = "400";
    descriptionDouble.style.color = rootColors["--text"];
    divTextDouble.appendChild(descriptionDouble);

    const formuleDouble = document.createElement("p");
    let formulesDispo = [];
    for (let i = 0; i < FormulaRepertory.length; i++) {
        if(FormulaRepertory[i].spaceAvailibility[0]!=0){
            formulesDispo.push(FormulaRepertory[i].name);
        }
    } 
    formuleDouble.textContent = `Formules disponibles : ${formulesDispo.join(",")}`;
    formuleDouble.style.fontStyle = "italic";
    formuleDouble.style.color = "#555555";
    divTextDouble.appendChild(formuleDouble);

    const prixDouble = document.createElement('p');
    prixDouble.textContent = `Prix: ${rooms[0].prix} € / Nuit`;
    prixDouble.style.fontWeight = "400";
    prixDouble.style.color = rootColors["--primary"];
    divTextDouble.appendChild(prixDouble);
    

    divDouble.appendChild(divTextDouble);



    const divFamille = document.createElement("div");
    divFamille.className = "row g-0";

    const imgFamille = document.createElement("img");
    imgFamille.addEventListener("mouseenter", () => {
        imgFamille.style.cursor = "pointer";
    });
    imgFamille.addEventListener("click", () => {
        displayRoomDetails(rooms[1]);
    });
    imgFamille.className = "col-6";
    imgFamille.src = `${rooms[1].images[0]}`;
    imgFamille.style.width = "50%";
    imgFamille.style.height = "80vh";
    imgFamille.style.objectFit = "cover";
    divFamille.appendChild(imgFamille);


    const divTextFamille = document.createElement("div");
    divTextFamille.className = "col-6 my-auto px-4 g-2 d-flex flex-column justify-content-center";

    const h2Famille = document.createElement("h2");
    h2Famille.textContent = rooms[1].nom;
    h2Famille.style.color = rootColors["--accent"];
    divTextFamille.appendChild(h2Famille);

    const descriptionFamille = document.createElement("p");
    descriptionFamille.className = "lead mb-4";
    descriptionFamille.textContent = rooms[1].shortDescription;
    divTextFamille.appendChild(descriptionFamille);

    const formuleFamille = document.createElement("p");
    formulesDispo = [];
    for (let i = 0; i < FormulaRepertory.length; i++) {
        if(FormulaRepertory[i].spaceAvailibility[1]!=0){
            formulesDispo.push(FormulaRepertory[i].name);
        }
    } 
    formuleFamille.textContent = `Formules disponibles : ${formulesDispo.join(",")}`;
    formuleFamille.style.fontStyle = "italic";
    formuleFamille.style.color = "#555555";
    divTextFamille.appendChild(formuleFamille);

    const prixFamille = document.createElement('p');
    prixFamille.textContent = `Prix: ${rooms[1].prix} € / Nuit`;
    prixFamille.style.fontWeight = "400";
    prixFamille.style.color = rootColors["--primary"];
    divTextFamille.appendChild(prixFamille);

    divFamille.appendChild(divTextFamille);



    const divAppart = document.createElement("div");
    divAppart.className = "row g-0";

    const imgAppart = document.createElement("img");
    imgAppart.addEventListener("mouseenter", () => {
        imgAppart.style.cursor = "pointer";
    });
    imgAppart.addEventListener("click", () => {
        displayRoomDetails(rooms[2]);
    });
    imgAppart.className = "col-6 order-2";
    imgAppart.src = `${rooms[2].images[0]}`;
    imgAppart.style.width = "50%";
    imgAppart.style.height = "80vh";
    imgAppart.style.objectFit = "cover";
    divAppart.appendChild(imgAppart);


    const divTextAppart = document.createElement("div");
    divTextAppart.className = "col-6 order-1 my-auto px-4 g-2 d-flex flex-column justify-content-center";
    divAppart.appendChild(divTextAppart);

    const h2Appart = document.createElement("h2");
    h2Appart.textContent = rooms[2].nom;
    h2Appart.style.color = rootColors["--accent"];
    divTextAppart.appendChild(h2Appart);

    const descriptionAppart = document.createElement("p");
    descriptionAppart.className = "lead mb-4";
    descriptionAppart.textContent = rooms[2].shortDescription;
    descriptionAppart.style.fontWeight = "400";
    descriptionAppart.style.color = rootColors["--text"];
    divTextAppart.appendChild(descriptionAppart);

    const formuleAppart = document.createElement("p");
    formulesDispo = [];
    for (let i = 0; i < FormulaRepertory.length; i++) {
        if(FormulaRepertory[i].spaceAvailibility[2]!=0){
            formulesDispo.push(FormulaRepertory[i].name);
        }
    } 
    formuleAppart.textContent = `Formules disponibles : ${formulesDispo.join(",")}`;
    formuleAppart.style.fontStyle = "italic";
    formuleAppart.style.color = "#555555";
    divTextAppart.appendChild(formuleAppart);

    const prixAppart = document.createElement('p');
    prixAppart.textContent = `Prix: ${rooms[2].prix} € / Nuit`;
    prixAppart.style.fontWeight = "400";
    prixAppart.style.color = rootColors["--primary"];
    divTextAppart.appendChild(prixAppart);

    divAccueil.append(divDouble, divFamille, divAppart);

    main.appendChild(divAccueil);
}


function makeFormContact() {

    // Creating and styling Title :

    let mainTitle = document.createElement("h4");
    let mainContact = document.getElementById("main-id");
    mainContact.innerHTML = " ";
    mainContact.appendChild(mainTitle);

    mainTitle.innerText = "Demande d'informations";
    mainTitle.setAttribute("class", "titleContact");

    let secondTitle = document.createElement("h5");
    mainContact.appendChild(secondTitle);
    secondTitle.innerText = "Contactez-nous";
    secondTitle.setAttribute("class", "titleContact");

    let titleContact = document.getElementsByClassName("titleContact");
    for (let elements of titleContact) {
        elements.style.textAlign = "center";
    }


    ///////////////////////////////////////////////////////


    // Creating the Form element :

    let formContact = document.createElement("form");
    mainContact.appendChild(formContact);
    formContact.setAttribute("method", "GET");
    formContact.setAttribute("class", "formC");


    ///////////////////////////////////////////////////////


    // Creating the divs for names :

    let divFirstRow = document.createElement("div");
    formContact.appendChild(divFirstRow);
    divFirstRow.setAttribute("class", "row strong")

        // Div for Last name :

    let divLastName = document.createElement("div");
    divFirstRow.appendChild(divLastName);
    divLastName.setAttribute("class", "col display")

    let labelLastName = document.createElement("label");
    divLastName.appendChild(labelLastName);
    labelLastName.innerText = "Nom*";
    labelLastName.setAttribute("for", "last_name");

    let inputLastName = document.createElement("input");
    divLastName.appendChild(inputLastName);
    inputLastName.setAttribute("type", "text");
    inputLastName.setAttribute("name", "nom");
    inputLastName.setAttribute("id", "last_name");
    inputLastName.setAttribute("placeholder", "Entrez votre nom");
    inputLastName.setAttribute("required", "");


        // Div for First name :

    let divFirstName = document.createElement("div");
    divFirstRow.appendChild(divFirstName);
    divFirstName.setAttribute("class", "col display");

    let labelFirstName = document.createElement("label");
    divFirstName.appendChild(labelFirstName);
    labelFirstName.innerText = "Prénom*";
    labelFirstName.setAttribute("for", "first_name");

    let inputFirstName = document.createElement("input");
    divFirstName.appendChild(inputFirstName);
    inputFirstName.setAttribute("type", "text");
    inputFirstName.setAttribute("name", "prénom");
    inputFirstName.setAttribute("id", "first_name");
    inputFirstName.setAttribute("placeholder", "Entrez votre prénom");
    inputFirstName.setAttribute("required", "");


    ///////////////////////////////////////////////////////


    // Creating the divs for phone and mail :

    let divSecondRow = document.createElement("div");
    formContact.appendChild(divSecondRow);
    divSecondRow.setAttribute("class", "row segment strong")

        // Div for Phone :

    let divPhone = document.createElement("div");
    divSecondRow.appendChild(divPhone);
    divPhone.setAttribute("class", "col display")

    let labelPhone = document.createElement("label");
    divPhone.appendChild(labelPhone);
    labelPhone.innerText = "Téléphone*";
    labelPhone.setAttribute("for", "phone");

    let inputPhone = document.createElement("input");
    divPhone.appendChild(inputPhone);
    inputPhone.setAttribute("type", "text");
    inputPhone.setAttribute("name", "téléphone");
    inputPhone.setAttribute("id", "phone");
    inputPhone.setAttribute("placeholder","Entrez votre numéro de téléphone");
    inputPhone.setAttribute("required", "");


        // Div for Mail :

    let divMail = document.createElement("div");
    divSecondRow.appendChild(divMail);
    divMail.setAttribute("class", "col display");

    let labelMail = document.createElement("label");
    divMail.appendChild(labelMail);
    labelMail.innerText = "Adresse mail*";
    labelMail.setAttribute("for", "mail");

    let inputMail = document.createElement("input");
    divMail.appendChild(inputMail);
    inputMail.setAttribute("type", "text");
    inputMail.setAttribute("name", "email");
    inputMail.setAttribute("id", "mail");
    inputMail.setAttribute("placeholder", "Entrez votre adresse mail");
    inputMail.setAttribute("required", "");


    ///////////////////////////////////////////////////////


    // Creating the div for object :

    let divThirdRow = document.createElement("div");
    formContact.appendChild(divThirdRow);
    divThirdRow.setAttribute("class", "segment strong display")

    let labelObject = document.createElement("label");
    divThirdRow.appendChild(labelObject);
    labelObject.innerText = "Objet";
    labelObject.setAttribute("for", "object");

    let selectObject = document.createElement("select");
    divThirdRow.appendChild(selectObject);
    selectObject.setAttribute("id", "object");

    let optionObject1 = document.createElement("option");
    selectObject.appendChild(optionObject1);
    optionObject1.innerText = "Sélectionnez l'objet du message";

    let optionObject2 = document.createElement("option");
    selectObject.appendChild(optionObject2);
    optionObject2.innerText = "Nos formules";

    let optionObject3 = document.createElement("option");
    selectObject.appendChild(optionObject3);
    optionObject3.innerText = "Nos espaces";

    let optionObject4 = document.createElement("option");
    selectObject.appendChild(optionObject4);
    optionObject4.innerText = "Nos services";

    let optionObject5 = document.createElement("option");
    selectObject.appendChild(optionObject5);
    optionObject5.innerText = "Nos tarifs";

    let optionObject6 = document.createElement("option");
    selectObject.appendChild(optionObject6);
    optionObject6.innerText = "Autre";


    ///////////////////////////////////////////////////////


    // Creating the div for message :

    let divFourthRow = document.createElement("div");
    formContact.appendChild(divFourthRow);
    divFourthRow.setAttribute("class", "segment strong display");

    let labelMessage = document.createElement("label");
    divFourthRow.appendChild(labelMessage);
    labelMessage.innerText = "Votre message";
    labelMessage.setAttribute("for", "info");

    let textAreaMessage = document.createElement("textarea");
    divFourthRow.appendChild(textAreaMessage);
    textAreaMessage.setAttribute("id", "info");
    textAreaMessage.setAttribute("row", "10");
    textAreaMessage.setAttribute("col", "100");


    ///////////////////////////////////////////////////////


    // Creating the mandatory message :

    let warning = document.createElement("p");
    formContact.appendChild(warning);
    warning.setAttribute("class", "mandatory");
    warning.innerText = "Les champs suivis d'un * sont obligatoires";


    ///////////////////////////////////////////////////////


    // Creating the div for Button :

    let divButton = document.createElement("div");
    formContact.appendChild(divButton);
    divButton.setAttribute("class", "send");

    let inputButton = document.createElement("input");
    divButton.appendChild(inputButton);
    inputButton.setAttribute("type", "submit");
    inputButton.setAttribute("id", "send");
    inputButton.setAttribute("value", "Envoyer");


    ///////////////////////////////////////////////////////


    // Styling :

    let formC = document.getElementsByClassName("formC");
    for (let elements of formC){
        elements.style.marginTop = "20px";
        elements.style.border = "3px solid lightgray";
        elements.style.padding = "20px";
    }

    let display = document.getElementsByClassName("display");
    for (let elements of display){
        elements.style.display = "flex";
        elements.style.flexDirection = "column";
    }

    let segment = document.getElementsByClassName("segment");
    for (let elements of segment){
        elements.style.marginTop = "20px";
    }

    let gras = document.getElementsByClassName("strong");
    for (let elements of gras){
        elements.style.fontWeight = "bold";
    }

    let info = document.getElementById("info");
    info.style.marginBottom = "20px";

    let mandatory = document.getElementsByClassName("mandatory");
    for (elements of mandatory) {
        elements.style.fontWeight = "normal";
        elements.style.textAlign = "center";
    }

    let send = document.getElementsByClassName("send");
    for (let elements of send){
        elements.style.display = "flex";
        elements.style.justifyContent = "center";
    }

}

makeFormContact();

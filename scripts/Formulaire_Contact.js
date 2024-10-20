

function makeFormContact() {

    // Creating and styling Title :

    let mainTitle = document.createElement("h4");
    let mainContact = document.getElementById("main-id");
    mainContact.innerHTML = " ";
    mainContact.appendChild(mainTitle);

    mainTitle.innerText = "Demande d'informations";
    mainTitle.setAttribute("class", "titleContact");

    let secondTitle = document.createElement("h5");
    secondTitle.innerText = "Contactez-nous";
    secondTitle.setAttribute("class", "titleContact");
    mainContact.appendChild(secondTitle);

    let titleContact = document.getElementsByClassName("titleContact");
    for (let elements of titleContact) {
        elements.style.textAlign = "center";
    }


    ///////////////////////////////////////////////////////


    // Creating the Form element :

    let formContact = document.createElement("form");
    formContact.setAttribute("method", "GET");
    formContact.setAttribute("class", "formC");
    mainContact.appendChild(formContact);


    ///////////////////////////////////////////////////////


    // Creating the divs for names :

    let divFirstRow = document.createElement("div");
    divFirstRow.setAttribute("class", "row strong");
    formContact.appendChild(divFirstRow);

    // Div for Last name :

    let divLastName = document.createElement("div");
    divLastName.setAttribute("class", "col display");
    divFirstRow.appendChild(divLastName);

    let labelLastName = document.createElement("label");
    labelLastName.innerText = "Nom*";
    labelLastName.setAttribute("for", "last_name");
    divLastName.appendChild(labelLastName);

    let inputLastName = document.createElement("input");
    inputLastName.setAttribute("type", "text");
    inputLastName.setAttribute("name", "nom");
    inputLastName.setAttribute("id", "last_name");
    inputLastName.setAttribute("placeholder", "Entrez votre nom");
    inputLastName.setAttribute("required", "");
    divLastName.appendChild(inputLastName);


    // Div for First name :

    let divFirstName = document.createElement("div");
    divFirstName.setAttribute("class", "col display");
    divFirstRow.appendChild(divFirstName);

    let labelFirstName = document.createElement("label");
    labelFirstName.innerText = "Prénom*";
    labelFirstName.setAttribute("for", "first_name");
    divFirstName.appendChild(labelFirstName);

    let inputFirstName = document.createElement("input");
    inputFirstName.setAttribute("type", "text");
    inputFirstName.setAttribute("name", "prénom");
    inputFirstName.setAttribute("id", "first_name");
    inputFirstName.setAttribute("placeholder", "Entrez votre prénom");
    inputFirstName.setAttribute("required", "");
    divFirstName.appendChild(inputFirstName);


    ///////////////////////////////////////////////////////


    // Creating the divs for phone and mail :

    let divSecondRow = document.createElement("div");
    divSecondRow.setAttribute("class", "row segment strong");
    formContact.appendChild(divSecondRow);

    // Div for Phone :

    let divPhone = document.createElement("div");
    divPhone.setAttribute("class", "col display");
    divSecondRow.appendChild(divPhone);

    let labelPhone = document.createElement("label");
    labelPhone.innerText = "Téléphone*";
    labelPhone.setAttribute("for", "phone");
    divPhone.appendChild(labelPhone);

    let inputPhone = document.createElement("input");
    inputPhone.setAttribute("type", "text");
    inputPhone.setAttribute("name", "téléphone");
    inputPhone.setAttribute("id", "phone");
    inputPhone.setAttribute("placeholder", "Entrez votre numéro de téléphone");
    inputPhone.setAttribute("required", "");
    divPhone.appendChild(inputPhone);


    // Div for Mail :

    let divMail = document.createElement("div");
    divMail.setAttribute("class", "col display");
    divSecondRow.appendChild(divMail);

    let labelMail = document.createElement("label");
    labelMail.innerText = "Adresse mail*";
    labelMail.setAttribute("for", "mail");
    divMail.appendChild(labelMail);

    let inputMail = document.createElement("input");
    inputMail.setAttribute("type", "text");
    inputMail.setAttribute("name", "email");
    inputMail.setAttribute("id", "mail");
    inputMail.setAttribute("placeholder", "Entrez votre adresse mail");
    inputMail.setAttribute("required", "");
    divMail.appendChild(inputMail);


    ///////////////////////////////////////////////////////


    // Creating the div for object :

    let divThirdRow = document.createElement("div");
    divThirdRow.setAttribute("class", "segment strong display");
    formContact.appendChild(divThirdRow);

    let labelObject = document.createElement("label");
    labelObject.innerText = "Objet";
    labelObject.setAttribute("for", "object");
    divThirdRow.appendChild(labelObject);

    let selectObject = document.createElement("select");
    selectObject.setAttribute("id", "object");
    divThirdRow.appendChild(selectObject);


    let optionObject0 = document.createElement("option");
    optionObject0.innerText = "Sélectionnez l'objet du message";
    selectObject.appendChild(optionObject0);

    let optionObject1 = document.createElement("option");
    optionObject1.innerText = "Nos formules";
    selectObject.appendChild(optionObject1);

    let optionObject2 = document.createElement("option");
    optionObject2.innerText = "Nos espaces";
    selectObject.appendChild(optionObject2);

    let optionObject3 = document.createElement("option");
    optionObject3.innerText = "Nos services";
    selectObject.appendChild(optionObject3);

    let optionObject4 = document.createElement("option");
    optionObject4.innerText = "Nos tarifs";
    selectObject.appendChild(optionObject4);

    let optionObject5 = document.createElement("option");
    optionObject5.innerText = "Autre";
    selectObject.appendChild(optionObject5);


    ///////////////////////////////////////////////////////


    // Creating the div for message :

    let divFourthRow = document.createElement("div");
    divFourthRow.setAttribute("class", "segment strong display");
    formContact.appendChild(divFourthRow);

    let labelMessage = document.createElement("label");
    labelMessage.innerText = "Votre message";
    labelMessage.setAttribute("for", "info");
    divFourthRow.appendChild(labelMessage);

    let textAreaMessage = document.createElement("textarea");
    textAreaMessage.setAttribute("id", "info");
    textAreaMessage.setAttribute("row", "10");
    textAreaMessage.setAttribute("col", "100");
    divFourthRow.appendChild(textAreaMessage);


    ///////////////////////////////////////////////////////


    // Creating the mandatory message :

    let warning = document.createElement("p");
    warning.setAttribute("class", "mandatory");
    warning.innerText = "Les champs suivis d'un * sont obligatoires";
    formContact.appendChild(warning);


    ///////////////////////////////////////////////////////


    // Creating the div for Button :

    let divButton = document.createElement("div");
    divButton.setAttribute("class", "send");
    formContact.appendChild(divButton);

    let inputButton = document.createElement("input");
    inputButton.setAttribute("type", "button");
    inputButton.setAttribute("id", "send");
    inputButton.setAttribute("value", "Envoyer");
    divButton.appendChild(inputButton);


    ///////////////////////////////////////////////////////


    // Styling :

    let formC = document.getElementsByClassName("formC");
    for (let elements of formC) {
        elements.style.marginTop = "20px";
        elements.style.border = "3px solid lightgray";
        elements.style.padding = "20px";
    }

    let display = document.getElementsByClassName("display");
    for (let elements of display) {
        elements.style.display = "flex";
        elements.style.flexDirection = "column";
    }

    let segment = document.getElementsByClassName("segment");
    for (let elements of segment) {
        elements.style.marginTop = "20px";
    }

    let gras = document.getElementsByClassName("strong");
    for (let elements of gras) {
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
    for (let elements of send) {
        elements.style.display = "flex";
        elements.style.justifyContent = "center";
    }


    ///////////////////////////////////////////////////////


    // Sending values of the formula when clicking on "Envoyer"

    inputButton.addEventListener("click", () => {

        //    messages.push(demandeInfo("1","2","3","4","5","6"));
        messages.push(demandeInfo(inputLastName.value, inputFirstName.value, inputMail.value, inputPhone.value, selectObject.value, textAreaMessage.value));

        console.log(messages);

    });
}


// makeFormContact();

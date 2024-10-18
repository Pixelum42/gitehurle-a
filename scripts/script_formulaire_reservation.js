

function makeFormBook() {

    // Creating and styling Title :

    let mainReserve = document.getElementById("main-id");
    mainReserve.innerHTML = "";
    let mainTitle = document.createElement("h4");
    mainTitle.innerHTML = 'Réservez votre séjour dans notre auberge<br>"Le gîte hurle"';
    mainTitle.setAttribute("class", "titleReserve");
    mainReserve.appendChild(mainTitle);
    
    let titleReserve = document.getElementsByClassName("titleReserve");
    for (let elements of titleReserve) {
        elements.style.textAlign = "center";
        elements.style.marginBottom = "20px";
    }


    ///////////////////////////////////////////////////////


    // Creating the Form element :

    let formReserve = document.createElement("form");
    mainReserve.appendChild(formReserve);
    formReserve.setAttribute("method", "GET");
    formReserve.setAttribute("class", "formR");


    ///////////////////////////////////////////////////////


    // Creating the divs for names :

    let divFirstRow = document.createElement("div");
    formReserve.appendChild(divFirstRow);
    divFirstRow.setAttribute("class", "row strong");

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
    formReserve.appendChild(divSecondRow);
    divSecondRow.setAttribute("class", "row segment strong");

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
    labelMail.innerText = "Email*";
    labelMail.setAttribute("for", "mail");

    let inputMail = document.createElement("input");
    divMail.appendChild(inputMail);
    inputMail.setAttribute("type", "text");
    inputMail.setAttribute("name", "email");
    inputMail.setAttribute("id", "mail");
    inputMail.setAttribute("placeholder", "Entrez votre adresse mail");
    inputMail.setAttribute("required", "");


    ///////////////////////////////////////////////////////


    // Creating the divs for Spaces and Formula :

    let divThirdRow = document.createElement("div");
    formReserve.appendChild(divThirdRow);
    divThirdRow.setAttribute("class", "row segment strong");

        // Div for Space :

    let divSpace = document.createElement("div");
    divThirdRow.appendChild(divSpace);
    divSpace.setAttribute("class", "col display ")

    let labelSpace = document.createElement("label");
    divSpace.appendChild(labelSpace);
    labelSpace.innerText = "Choisissez votre espace* :";
    labelSpace.setAttribute("for", "space");

    let selectSpace = document.createElement("select");
    divSpace.appendChild(selectSpace);
    selectSpace.setAttribute("name", "espace");
    selectSpace.setAttribute("id", "space");
    selectSpace.setAttribute("required", "");

    let optionSpace = [];

    optionSpace.push(document.createElement("option"));
    selectSpace.appendChild(optionSpace[0]);
    optionSpace[0].innerText = "Chambre double - La Sérénité du Mont";

    optionSpace.push(document.createElement("option"));
    selectSpace.appendChild(optionSpace[1]);
    optionSpace[1].innerText = "Chambre familiale - L'Abri des Aigles";

    optionSpace.push(document.createElement("option"));
    selectSpace.appendChild(optionSpace[2]);
    optionSpace[2].innerText = "Appartement - Les Horizons Sauvages";
        
        // Div for Formula :

    let divFormula = document.createElement("div");
    divThirdRow.appendChild(divFormula);
    divFormula.setAttribute("class", "col display");

    let labelFormula = document.createElement("label");
    divFormula.appendChild(labelFormula);
    labelFormula.innerText = "Choisissez votre formule* :";
    labelFormula.setAttribute("for", "choice");

    let selectFormula = document.createElement("select");
    divFormula.appendChild(selectFormula);
    selectFormula.setAttribute("name", "choix");
    selectFormula.setAttribute("id", "choice");

    let optionFormula = [];

    optionFormula.push( document.createElement("option"));
    selectFormula.appendChild(optionFormula[0]);
    optionFormula[0].innerText = "Week-end d'amour";

    optionFormula.push( document.createElement("option"));
    selectFormula.appendChild(optionFormula[1]);
    optionFormula[1].innerText = "Nature et découverte";

    optionFormula.push( document.createElement("option"));
    selectFormula.appendChild(optionFormula[2]);
    optionFormula[2].innerText = "Travail saisonnier"; 


    // for (let i = 0; i < optionFormula.length; i++) {
    //     optionFormula[selectedFormula].selected = (i===selectFormula) ? true : false;
    // }
    // console.log(optionFormula[selectedFormula].selected);


    ///////////////////////////////////////////////////////


    // Creating the div for the stay :

    let divFourthRow = document.createElement("div");
    formReserve.appendChild(divFourthRow);
    divFourthRow.setAttribute("class", "row segment");

    let pChoose = document.createElement("p");
    divFourthRow.appendChild(pChoose);
    pChoose.innerText = "Choisissez vos dates de séjour* :";
    pChoose.setAttribute("class", "pStay");

        // Div for startdate :

    let divStart = document.createElement("div");
    divFourthRow.appendChild(divStart);
    divStart.setAttribute("class", "col display");

    let labelStart = document.createElement("label");
    divStart.appendChild(labelStart);
    labelStart.setAttribute("for", "start_date");
    labelStart.innerText = "Début";

    let inputStart = document.createElement("input");
    divStart.appendChild(inputStart);
    inputStart.setAttribute("type", "date");
    inputStart.setAttribute("name", "début");
    inputStart.setAttribute("id", "start_date");
    inputStart.setAttribute("required", "");

        // Div for enddate :

    let divEnd = document.createElement("div");
    divFourthRow.appendChild(divEnd);
    divEnd.setAttribute("class", "col display");

    let labelEnd = document.createElement("label");
    divEnd.appendChild(labelEnd);
    labelEnd.setAttribute("for", "end_date");
    labelEnd.innerText = "Fin";

    let inputEnd = document.createElement("input");
    divEnd.appendChild(inputEnd);
    inputEnd.setAttribute("type", "date");
    inputEnd.setAttribute("name", "fin");
    inputEnd.setAttribute("id", "end_date");
    inputEnd.setAttribute("required", "");
        

    ///////////////////////////////////////////////////////


    // Creating the div for info :

    let divInfo = document.createElement("div");
    formReserve.appendChild(divInfo);
    divInfo.setAttribute("class", "segment strong display");

    let labelInfo = document.createElement("label");
    divInfo.appendChild(labelInfo);
    labelInfo.setAttribute("for", "info");
    labelInfo.innerText = "Voulez-vous ajouter des informations complémentaires ?";

    let textInfo = document.createElement("textarea");
    divInfo.appendChild(textInfo);
    textInfo.setAttribute("id", "info");
    textInfo.setAttribute("name", "informations");
    textInfo.setAttribute("row", "10");
    textInfo.setAttribute("cols", "100");


    ///////////////////////////////////////////////////////


    // Creating the mandatory message :

    let warning = document.createElement("p");
    formReserve.appendChild(warning);
    warning.setAttribute("class", "mandatory");
    warning.innerText = "Les champs suivis d'un * sont obligatoires";


    ///////////////////////////////////////////////////////


    // Creating the div for Button :

    let divButton = document.createElement("div");
    formReserve.appendChild(divButton);
    divButton.setAttribute("class", "reserve");

    let inputButton = document.createElement("input");
    divButton.appendChild(inputButton);
    inputButton.setAttribute("type", "submit");
    inputButton.setAttribute("id", "reserve");
    inputButton.setAttribute("value", "Réserver");


    ///////////////////////////////////////////////////////


    // Styling :

    let formR = document.getElementsByClassName("formR");
    for (let elements of formR){
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

    let pStay = document.getElementsByClassName("pStay");
    for (let elements of pStay){
        elements.style.fontWeight = "bold";
    }

    let info = document.getElementById("info");
    info.style.marginBottom = "20px";

    let mandatory = document.getElementsByClassName("mandatory");
    for (elements of mandatory) {
        elements.style.fontWeight = "normal";
        elements.style.textAlign = "center";
    }

    let reserve = document.getElementsByClassName("reserve");
    for (let elements of reserve){
        elements.style.margin = "0 auto";
        elements.style.width = "100px";
    }


    ///////////////////////////////////////////////////////


    // Imposing a minimum number of 2 overnight stays during the week :


    inputStart.addEventListener("input", function() {

        let date = new Date(inputStart.value);
        let end = date.setDate(date.getDate() + 2);
        endNewDate = new Date(end);
        endNewFormat = endNewDate.toISOString().substr(0, 10);   
        inputEnd.setAttribute("min", endNewFormat);    

    });


    ///////////////////////////////////////////////////////


    // Imposing a minimum of 1-month stays for "Travail saisonnier" :


    selectFormula.addEventListener("input", function () {
        if (selectFormula.options[2].selected === true) {
            
            inputStart.addEventListener("input", function() {

                let date = new Date(inputStart.value);
                let end = date.setDate(date.getDate() + 31);
                endNewDate = new Date(end);
                endNewFormat = endNewDate.toISOString().substr(0, 10);   
                inputEnd.setAttribute("min", endNewFormat);    

            });

        }
        
    });


    ///////////////////////////////////////////////////////


    // Imposing "Week-end d'amour" formula for the double bedroom :


    // if (selectFormula.options[0].selected === true) {
    //     optionSpace[1].setAttribute("disabled", "disabled");
    //     optionSpace[2].setAttribute("disabled", "disabled");
    // } 


    // selectFormula.addEventListener("input", function () {
    //     if (selectFormula.options[0].selected === true) {
    //         console.log("yes");

    //         selectSpace.options[1].setAttribute("disabled", "disabled");
    //         selectSpace.options[2].setAttribute("disabled", "disabled");

    //     }

    // });


    ///////////////////////////////////////////////////////


    // Pre-fill the form :

        // Space :

    let selectedSpace = 1;
    optionSpace[selectedSpace].setAttribute("selected", "selected");
    console.log(optionSpace[selectedSpace].selected);

        // Formula :

    let selectedFormula = 1;
    optionFormula[selectedFormula].setAttribute("selected", "selected");
    console.log(optionFormula[selectedFormula].selected);


    ///////////////////////////////////////////////////////


}

makeFormBook();
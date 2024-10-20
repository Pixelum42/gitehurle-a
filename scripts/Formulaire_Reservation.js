

function makeFormBook(room) {

    // Creating and styling the Title :

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
    formReserve.setAttribute("method", "GET");
    formReserve.setAttribute("class", "formR");
    mainReserve.appendChild(formReserve);


    ///////////////////////////////////////////////////////


    // Creating the divs for names :

    let divFirstRow = document.createElement("div");
    divFirstRow.setAttribute("class", "row strong");
    formReserve.appendChild(divFirstRow);

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
    formReserve.appendChild(divSecondRow);

    // Div for Phone :

    let divPhone = document.createElement("div");
    divPhone.setAttribute("class", "col display")
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
    labelMail.innerText = "Email*";
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


    // Creating the divs for Spaces and Formula :

    let divThirdRow = document.createElement("div");
    divThirdRow.className = "row segment strong";
    formReserve.appendChild(divThirdRow);

    // Div for Space :

    let divSpace = document.createElement("div");
    divSpace.setAttribute("class", "col display ")
    divThirdRow.appendChild(divSpace);

    let labelSpace = document.createElement("label");
    labelSpace.innerText = "Choisissez votre espace* :";
    labelSpace.setAttribute("for", "space");
    divSpace.appendChild(labelSpace);

    let selectSpace = document.createElement("select");
    selectSpace.name = "espace";
    selectSpace.id = "space";
    selectSpace.required = true;
    divSpace.appendChild(selectSpace);

    let optionSpace0 = document.createElement("option");
    optionSpace0.innerText = rooms[0].nom;
    selectSpace.appendChild(optionSpace0);

    let optionSpace1 = document.createElement("option");
    optionSpace1.innerText = rooms[1].nom;
    selectSpace.appendChild(optionSpace1);

    let optionSpace2 = document.createElement("option");
    optionSpace2.innerText = rooms[2].nom;
    selectSpace.appendChild(optionSpace2);

    // Div for Formula :

    let divFormula = document.createElement("div");
    divFormula.setAttribute("class", "col display");
    divThirdRow.appendChild(divFormula);

    let labelFormula = document.createElement("label");
    labelFormula.innerText = "Choisissez votre formule* :";
    labelFormula.setAttribute("for", "choice");
    divFormula.appendChild(labelFormula);

    let selectFormula = document.createElement("select");
    selectFormula.setAttribute("name", "choix");
    selectFormula.id = "choice";
    divFormula.appendChild(selectFormula);

    let optionFormula0 = document.createElement("option");
    optionFormula0.innerText = "Week-end d'amour";
    selectFormula.appendChild(optionFormula0);

    let optionFormula1 = document.createElement("option");
    optionFormula1.innerText = "Nature et découverte";
    selectFormula.appendChild(optionFormula1);

    let optionFormula2 = document.createElement("option");
    optionFormula2.innerText = "Travail saisonnier";
    selectFormula.appendChild(optionFormula2);


    ///////////////////////////////////////////////////////


    // Creating the div for the stay :

    let divFourthRow = document.createElement("div");
    divFourthRow.setAttribute("class", "row segment");
    formReserve.appendChild(divFourthRow);

    let pChoose = document.createElement("p");
    pChoose.innerText = "Choisissez vos dates de séjour* :";
    pChoose.setAttribute("class", "pStay");
    divFourthRow.appendChild(pChoose);

    // Div for startdate :

    let divStart = document.createElement("div");
    divStart.setAttribute("class", "col display");
    divFourthRow.appendChild(divStart);

    let labelStart = document.createElement("label");
    labelStart.setAttribute("for", "start_date");
    labelStart.innerText = "Début";
    divStart.appendChild(labelStart);

    let inputStart = document.createElement("input");
    inputStart.setAttribute("type", "date");
    inputStart.setAttribute("name", "début");
    inputStart.setAttribute("id", "start_date");
    inputStart.setAttribute("required", "");
    inputStart.setAttribute("min", new Date().toISOString().substr(0, 10));
    divStart.appendChild(inputStart);

    // Div for enddate :

    let divEnd = document.createElement("div");
    divFourthRow.appendChild(divEnd);
    divEnd.setAttribute("class", "col display");

    let labelEnd = document.createElement("label");
    labelEnd.setAttribute("for", "end_date");
    labelEnd.innerText = "Fin";
    divEnd.appendChild(labelEnd);

    let inputEnd = document.createElement("input");
    inputEnd.setAttribute("type", "date");
    inputEnd.setAttribute("name", "fin");
    inputEnd.setAttribute("id", "end_date");
    inputEnd.setAttribute("required", "");
    divEnd.appendChild(inputEnd);


    ///////////////////////////////////////////////////////


    // Creating the div for prices :

    let divPrices = document.createElement("div");
    divPrices.setAttribute("class", "segment strong display");
    formReserve.appendChild(divPrices);

    let pNights = document.createElement("p");
    pNights.setAttribute("class", "nights");
    divPrices.appendChild(pNights);

    let pPrices = document.createElement("p");
    pPrices.setAttribute("class", "prices");
    divPrices.appendChild(pPrices);


    ///////////////////////////////////////////////////////


    // Creating the div for info :

    let divInfo = document.createElement("div");
    divInfo.setAttribute("class", "segment strong display");
    formReserve.appendChild(divInfo);

    let labelInfo = document.createElement("label");
    labelInfo.setAttribute("for", "info");
    labelInfo.innerText = "Voulez-vous ajouter des informations complémentaires ?";
    divInfo.appendChild(labelInfo);

    let textInfo = document.createElement("textarea");
    textInfo.setAttribute("id", "info");
    textInfo.setAttribute("name", "informations");
    textInfo.setAttribute("row", "10");
    textInfo.setAttribute("cols", "100");
    divInfo.appendChild(textInfo);


    ///////////////////////////////////////////////////////


    // Creating the mandatory message :

    let warning = document.createElement("p");
    warning.setAttribute("class", "mandatory");
    warning.innerText = "Les champs suivis d'un * sont obligatoires";
    formReserve.appendChild(warning);


    ///////////////////////////////////////////////////////


    // Creating the div for Button :

    let divButton = document.createElement("div");
    divButton.className = "reserve";
    formReserve.appendChild(divButton);

    let inputButton = document.createElement("input");
    inputButton.type = "submit";
    inputButton.id = "reserve";
    inputButton.value = "Réserver";
    divButton.appendChild(inputButton);


    ///////////////////////////////////////////////////////


    // Styling :

    let formR = document.getElementsByClassName("formR");
    for (let elements of formR) {
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

    let pStay = document.getElementsByClassName("pStay");
    for (let elements of pStay) {
        elements.style.fontWeight = "bold";
    }

    let nights = document.getElementsByClassName("nights");
    for (let elements of nights) {
        elements.style.fontWeight = "bold";
        elements.style.textAlign = "center";
        elements.style.marginTop = "20px";
        elements.style.marginBottom = "2px";
    }

    let prices = document.getElementsByClassName("prices");
    for (let elements of prices) {
        elements.style.fontWeight = "bold";
        elements.style.textAlign = "center";
        elements.style.marginBottom = "15px";
    }

    let info = document.getElementById("info");
    info.style.marginBottom = "20px";

    let mandatory = document.getElementsByClassName("mandatory");
    for (elements of mandatory) {
        elements.style.fontWeight = "normal";
        elements.style.textAlign = "center";
    }

    let reserve = document.getElementsByClassName("reserve");
    for (let elements of reserve) {
        elements.style.margin = "0 auto";
        elements.style.width = "100px";
    }


    ///////////////////////////////////////////////////////


    // Forcing users to enter a start date before entering an end date : 

    let valid = 0;

    if (valid === 0) {
        inputEnd.disabled = true;
        valid += 1;
    }

    inputStart.addEventListener("input", function () {
        inputEnd.disabled = false;
    });


    ///////////////////////////////////////////////////////


    // Imposing a minimum number of 2 overnight stays during the week :


    inputStart.addEventListener("input", function () {

        let date = new Date(inputStart.value);

        if (date.getDay() !== 0 &&
            date.getDay() !== 6) {
            let end = date.setDate(date.getDate() + 2);
            endNewDate = new Date(end);
            endNewFormat = endNewDate.toISOString().substr(0, 10);
            inputEnd.setAttribute("min", endNewFormat);
        } else {
            let end = date.setDate(date.getDate() + 1);
            endNewDate = new Date(end);
            endNewFormat = endNewDate.toISOString().substr(0, 10);
            inputEnd.setAttribute("min", endNewFormat);
        }
    });


    ///////////////////////////////////////////////////////


    // Imposing a minimum of 1-month stays for "Travail saisonnier" from june to august and from december to march :


    selectFormula.addEventListener("input", function () {
        if (optionFormula2.selected === true) {

            inputStart.addEventListener("input", function () {

                let date = new Date(inputStart.value);
                let dateMonth = date.getMonth();

                if (dateMonth === 5 ||
                    dateMonth === 6 ||
                    (dateMonth === 7 && date.getDate() === 1) ||
                    dateMonth === 11 ||
                    dateMonth === 0 ||
                    dateMonth === 1 ||
                    (dateMonth === 2 && date.getDate() === 1)) {

                    let end = date.setDate(date.getDate() + 30);
                    endNewDate = new Date(end);
                    endNewFormat = endNewDate.toISOString().substr(0, 10);
                    inputEnd.setAttribute("min", endNewFormat);

                }
            });

        }

    });


    ///////////////////////////////////////////////////////


    // Imposing "Week-end d'amour" formula for the double bedroom :


    let check = 0;
    if (optionFormula0.selected === true && room === 0) {

        if (check === 0) {
            optionSpace1.style.display = "none";
            optionSpace2.style.display = "none";
            check += 1;
        } else {
            optionSpace1.style.display = "block";
            optionSpace2.style.display = "block";
        }
    }
    if (room !== 0) {
        optionFormula1.selected = true;

    } else {
        optionFormula1.selected = false;
    }
    selectFormula.addEventListener("input", function () {
        if (optionFormula0.selected === true) {
            optionSpace0.selected = true;
            optionSpace1.style.display = "none";
            optionSpace2.style.display = "none";
        } else {
            optionSpace1.style.display = "block";
            optionSpace2.style.display = "block";
        }
    });


    ///////////////////////////////////////////////////////


    // Calculating prices :

    // Creating a function that converts dates in number of nights :

    function convertDatesInNights() {
        startDate = new Date(inputStart.value);
        startDateInMs = startDate.getTime();

        endDate = new Date(inputEnd.value);
        endDateInMs = endDate.getTime();

        differenceInMs = endDateInMs - startDateInMs;

        aDayInMs = 24 * 3600 * 1000;
        numberOfNights = differenceInMs / aDayInMs;
        return numberOfNights;
    }

    // Price for Week-end d'amour formula :

    let prixTotal = undefined;

    // addEventListener when changing enddate :        
    inputEnd.addEventListener("input", function () {
        convertDatesInNights();
        let date = new Date(inputStart.value);
        let dateMonth = date.getMonth();

        if (optionFormula0.selected === true &&
            inputStart.value !== "") {
            pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;

            if (dateMonth === 5 ||
                dateMonth === 6 ||
                dateMonth === 7 ||
                dateMonth === 11 ||
                dateMonth === 0 ||
                dateMonth === 1 ||
                dateMonth === 2) {

                let amourPrice = ((35 + 35 * 0.1) * numberOfNights) - (((35 + 35 * 0.1) * numberOfNights) * 0.1);
                pPrices.innerHTML = "Prix du séjour :<br>" + amourPrice + " €";
                prixTotal = amourPrice;

            } else {
                let amourPrice = (35 * numberOfNights) - (35 * numberOfNights * 0.1);
                pPrices.innerHTML = "Prix du séjour :<br>" + amourPrice + " €";
                prixTotal = amourPrice;
            }
        }

        return prixTotal;

    });


    // addEventListener when changing startdate :        
    inputStart.addEventListener("input", function () {
        convertDatesInNights();
        let date = new Date(inputStart.value);
        let dateMonth = date.getMonth();

        if (optionFormula0.selected === true &&
            inputEnd.value !== "") {
            pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;

            if (dateMonth === 5 ||
                dateMonth === 6 ||
                dateMonth === 7 ||
                dateMonth === 11 ||
                dateMonth === 0 ||
                dateMonth === 1 ||
                dateMonth === 2) {

                let amourPrice = ((35 + 35 * 0.1) * numberOfNights) - (((35 + 35 * 0.1) * numberOfNights) * 0.1);
                pPrices.innerHTML = "Prix du séjour :<br>" + amourPrice + " €";
                prixTotal = amourPrice;

            } else {
                let amourPrice = (35 * numberOfNights) - (35 * numberOfNights * 0.1);
                pPrices.innerHTML = "Prix du séjour :<br>" + amourPrice + " €";
                prixTotal = amourPrice;
            }
        }

        return prixTotal;
    });


    // Price for Nature & Découverte formula :

    // addEventListener when changing enddate :
    inputEnd.addEventListener("input", function () {
        convertDatesInNights();
        let date = new Date(inputStart.value);
        let dateMonth = date.getMonth();

        if (optionFormula1.selected === true) {

            pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;
            if (optionSpace0.selected === true) {
                if (numberOfNights >= 5) {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceDouble = ((35 + 35 * 0.1) * numberOfNights) - (((35 + 35 * 0.1) * numberOfNights) * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    } else {
                        let naturePriceDouble = (35 * numberOfNights) - (35 * numberOfNights * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    }
                } else {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceDouble = ((35 + 35 * 0.1) * numberOfNights);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    } else {
                        let naturePriceDouble = 35 * numberOfNights;
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    }
                }
            } else if (optionSpace1.selected === true) {
                if (numberOfNights >= 5) {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceFamiliale = ((55 + 55 * 0.1) * numberOfNights) - (((55 + 55 * 0.1) * numberOfNights) * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    } else {
                        let naturePriceFamiliale = (55 * numberOfNights) - (55 * numberOfNights * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    }
                } else {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceFamiliale = ((55 + 55 * 0.1) * numberOfNights);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    } else {
                        let naturePriceFamiliale = 55 * numberOfNights;
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    }
                }
            } else if (optionSpace2.selected === true) {
                if (numberOfNights >= 5) {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceAppart = ((110 + 110 * 0.1) * numberOfNights) - (((110 + 110 * 0.1) * numberOfNights) * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    } else {
                        let naturePriceAppart = (110 * numberOfNights) - (110 * numberOfNights * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    }
                } else {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceAppart = ((110 + 110 * 0.1) * numberOfNights);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    } else {
                        let naturePriceAppart = 110 * numberOfNights;
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    }
                }
            }
        }

        return prixTotal;

    });

    // addEventListener when changing startdate :
    inputStart.addEventListener("input", function () {
        convertDatesInNights();
        let date = new Date(inputStart.value);
        let dateMonth = date.getMonth();

        if (optionFormula1.selected === true) {

            if (optionSpace0.selected === true &&
                inputEnd.value !== "") {
                pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;

                if (numberOfNights >= 5) {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceDouble = ((35 + 35 * 0.1) * numberOfNights) - (((35 + 35 * 0.1) * numberOfNights) * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    } else {
                        let naturePriceDouble = (35 * numberOfNights) - (35 * numberOfNights * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    }
                } else {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceDouble = ((35 + 35 * 0.1) * numberOfNights);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    } else {
                        let naturePriceDouble = 35 * numberOfNights;
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceDouble + " €";
                        prixTotal = naturePriceDouble;
                    }
                }
            } else if (optionSpace1.selected === true &&
                inputEnd.value !== "") {
                pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;

                if (numberOfNights >= 5) {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceFamiliale = ((55 + 55 * 0.1) * numberOfNights) - (((55 + 55 * 0.1) * numberOfNights) * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    } else {
                        let naturePriceFamiliale = (55 * numberOfNights) - (55 * numberOfNights * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    }
                } else {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceFamiliale = ((55 + 55 * 0.1) * numberOfNights);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    } else {
                        let naturePriceFamiliale = 55 * numberOfNights;
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceFamiliale + " €";
                        prixTotal = naturePriceFamiliale;
                    }
                }
            } else if (optionSpace2.selected === true &&
                inputEnd.value !== "") {
                pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;

                if (numberOfNights >= 5) {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceAppart = ((110 + 110 * 0.1) * numberOfNights) - (((110 + 110 * 0.1) * numberOfNights) * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    } else {
                        let naturePriceAppart = (110 * numberOfNights) - (110 * numberOfNights * 0.05);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    }
                } else {

                    if (dateMonth === 5 ||
                        dateMonth === 6 ||
                        dateMonth === 7 ||
                        dateMonth === 11 ||
                        dateMonth === 0 ||
                        dateMonth === 1 ||
                        dateMonth === 2) {

                        let naturePriceAppart = ((110 + 110 * 0.1) * numberOfNights);
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    } else {
                        let naturePriceAppart = 110 * numberOfNights;
                        pPrices.innerHTML = "Prix du séjour :<br>" + naturePriceAppart + " €";
                        prixTotal = naturePriceAppart;
                    }
                }
            }
        }
        return prixTotal;

    });


    // Price for Travail saisonnier formula :

    // addEventListener when changing enddate :
    inputEnd.addEventListener("input", function () {
        convertDatesInNights();
        let date = new Date(inputStart.value);
        let dateMonth = date.getMonth();

        if (optionFormula2.selected === true) {

            pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;
            if (optionSpace0.selected === true) {

                if (dateMonth === 5 ||
                    dateMonth === 6 ||
                    dateMonth === 7 ||
                    dateMonth === 11 ||
                    dateMonth === 0 ||
                    dateMonth === 1 ||
                    dateMonth === 2) {

                    let travailPriceDouble = (35 * numberOfNights) - ((35 * numberOfNights) * 0.2);
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceDouble + " €";
                    prixTotal = travailPriceDouble;
                } else {
                    let travailPriceDouble = 35 * numberOfNights;
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceDouble + " €";
                    prixTotal = travailPriceDouble;
                }

            } else if (optionSpace1.selected === true) {

                if (dateMonth === 5 ||
                    dateMonth === 6 ||
                    dateMonth === 7 ||
                    dateMonth === 11 ||
                    dateMonth === 0 ||
                    dateMonth === 1 ||
                    dateMonth === 2) {

                    let travailPriceFamiliale = (55 * numberOfNights) - ((55 * numberOfNights) * 0.2);
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceFamiliale + " €";
                    prixTotal = travailPriceFamiliale;
                } else {
                    let travailPriceFamiliale = 55 * numberOfNights;
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceFamiliale + " €";
                    prixTotal = travailPriceFamiliale;
                }

            } else if (optionSpace2.selected === true) {

                if (dateMonth === 5 ||
                    dateMonth === 6 ||
                    dateMonth === 7 ||
                    dateMonth === 11 ||
                    dateMonth === 0 ||
                    dateMonth === 1 ||
                    dateMonth === 2) {

                    let travailPriceAppart = (110 * numberOfNights) - ((110 * numberOfNights) * 0.2);
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceAppart + " €";
                    prixTotal = travailPriceAppart;
                } else {
                    let travailPriceAppart = 110 * numberOfNights;
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceAppart + " €";
                    prixTotal = travailPriceAppart;
                }

            }

        }
        return prixTotal;
    });

    // addEventListener when changing startdate :
    inputStart.addEventListener("input", function () {
        convertDatesInNights();
        let date = new Date(inputStart.value);
        let dateMonth = date.getMonth();

        if (optionFormula2.selected === true) {

            if (optionSpace0.selected === true &&
                inputEnd.value !== "") {
                pNights.innerHTML = "Nombre de nuitées : " + numberOfNights;


                if (dateMonth === 5 ||
                    dateMonth === 6 ||
                    dateMonth === 7 ||
                    dateMonth === 11 ||
                    dateMonth === 0 ||
                    dateMonth === 1 ||
                    dateMonth === 2) {

                    let travailPriceDouble = (35 * numberOfNights) - ((35 * numberOfNights) * 0.2);
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceDouble + " €";
                    prixTotal = travailPriceDouble;
                } else {
                    let travailPriceDouble = 35 * numberOfNights;
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceDouble + " €";
                    prixTotal = travailPriceDouble;
                }

            } else if (optionSpace1.selected === true) {

                if (dateMonth === 5 ||
                    dateMonth === 6 ||
                    dateMonth === 7 ||
                    dateMonth === 11 ||
                    dateMonth === 0 ||
                    dateMonth === 1 ||
                    dateMonth === 2) {

                    let travailPriceFamiliale = (55 * numberOfNights) - ((55 * numberOfNights) * 0.2);
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceFamiliale + " €";
                    prixTotal = travailPriceFamiliale;
                } else {
                    let travailPriceFamiliale = 55 * numberOfNights;
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceFamiliale + " €";
                    prixTotal = travailPriceFamiliale;
                }

            } else if (optionSpace2.selected === true) {

                if (dateMonth === 5 ||
                    dateMonth === 6 ||
                    dateMonth === 7 ||
                    dateMonth === 11 ||
                    dateMonth === 0 ||
                    dateMonth === 1 ||
                    dateMonth === 2) {

                    let travailPriceAppart = (110 * numberOfNights) - ((110 * numberOfNights) * 0.2);
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceAppart + " €";
                    prixTotal = travailPriceAppart;
                } else {
                    let travailPriceAppart = 110 * numberOfNights;
                    pPrices.innerHTML = "Prix du séjour :<br>" + travailPriceAppart + " €";
                    prixTotal = travailPriceAppart;
                }
            }

        }
        return prixTotal;
    });


    ///////////////////////////////////////////////////////


    // Sending values of the formula when clicking on "Réserver"

    formReserve.addEventListener("submit", function (event) {

        reservations.push(reservation(inputLastName.value, inputFirstName.value, inputMail.value, inputPhone.value, selectSpace.value, inputStart.value, inputEnd.value, selectFormula.value, pPrices.innerHTML));

        message = "Espace disponible";
        statut = "Réservation en attente de validation";

        console.log(reservations);
        event.preventDefault();
        
        return prixTotal;

    });


    ///////////////////////////////////////////////////////




}

// const rooms = [0, 1, 2];
// makeFormBook(rooms[2]);
// // makeFormBook(rooms[0]);

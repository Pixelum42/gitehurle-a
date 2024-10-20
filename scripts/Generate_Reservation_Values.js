
// Putting the values of the formula in an associative array


let reservations = [];


const reservation = ( nom, prenom, email, telephone, espace, beginDate, endDate, formule, message, prix) => {

    // nom = inputLastName.value;
    // prenom = inputFirstName.value;
    // email = inputMail.value;
    // telephone = inputPhone.value;
    // espace = selectSpace.value;
    // beginDate = inputStart.value;
    // endDate = inputEnd.value;
    // formule = selectFormula.value;
    // prix = pPrices.innerHTML;

    return {

    "status" : "pending",
    "nom" : nom,
    "prenom" : prenom,
    "mail" : email,
    "telephone" : telephone,
    "espace" : espace,
    "beginDate" : beginDate,
    "endDate" : endDate,
    "formule" : formule,
    "message" : message,
    "prix" : prix

    }

}

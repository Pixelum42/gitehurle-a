
// Putting the values of the formula in an associative array


let messages = [];

const demandeInfo = (nom,  prenom, email, telephone, objet, message) => {

    // nom = inputLastName.value;
    // prenom = inputFirstName.value;
    // email = inputMail.value;
    // telephone = inputPhone.value;
    // objet = selectObject.value;
    // message = textAreaMessage.value;

    return {
    "status": "pending",
    "objet" : objet,
    "nom" : nom,
    "prenom" : prenom,
    "mail" : email,
    "telephone" : telephone,
    "message" : message,

    }

}
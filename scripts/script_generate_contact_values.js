
// Putting the values of the formula in an associative array


let demandeInfos = [];

const demandeInfo = (nom,  prenom, email, telephone, objet, message) => {

    nom = inputLastName.value;
    prenom = inputFirstName.value;
    email = inputMail.value;
    telephone = inputPhone.value;
    objet = selectObject.value;
    message = textAreaMessage.value;

    return {

    "nom" : nom,
    "prenom" : prenom,
    "email" : email,
    "telephone" : telephone,
    "objet" : objet,
    "message" : message,

    }

}
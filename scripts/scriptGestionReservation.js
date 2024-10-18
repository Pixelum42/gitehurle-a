// let submitBtn = document.addEventListener('click', submitFct);
// voir dispo chambre avec resa



let h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.textContent = "Bonjour";


let divRoot = document.createElement('div');
divRoot.className = "border border-dark div-root d-flex justify-content-between";
document.body.appendChild(divRoot);
// divRoot.style.display = 'flex';
// divRoot.style.justifyContent = 'space-around';

let divResaList = document.createElement('div');
divResaList.className = 'container';
divRoot.appendChild(divResaList);

let divRow = document.createElement('div');
divRow.className = 'row';
divResaList.appendChild(divRow);



let chambre = "chambre double";
let date2 = "24.09.27";
let date1 = () => {
    const a = Math.round(Math.random() + 2024);
    const m = Math.ceil(Math.random() * 12).toString().padStart(2, 0);
    const d = Math.ceil(Math.random() * 31).toString().padStart(2, 0);

    if (m < 10)
        date2 = `${a}-${m}-${d + 1}`;
    return (`${a}-${m}-${d}`);
};
let formule = "-10%";
let messageFac = "Les gens, n'est-ce pas ?";


let reservations = [

    { "status": 'accepted', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", "espace": "chambre", 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    { "status": 'pending', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", "espace": "chambre", 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    { "status": 'accepted', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", "espace": "chambre", 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    { "status": 'refused', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", "espace": "chambre", 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac, 'prix': 'prix'},
    { "status": 'pending', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", "espace": "chambre", 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac }
    
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'refused', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'accepted', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'refused', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'accepted', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'refused', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'accepted', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac },
    // { "status": 'pending', "espace": chambre, 'beginDate': date1(), 'endDate': date2, 'formule': formule, 'message': messageFac }
];


let divResa = [];

let dateQILDDLDDLR = [];
for (let i = 0; i < reservations.length; i++) {
    let test = reservations[i].beginDate.replaceAll("-", "");
    dateQILDDLDDLR.push(parseInt(test));
}
// console.log(dateQILDDLDDLR);

for (let i = 0; i < dateQILDDLDDLR.length; i++) {
    for (let j = i + 1; j < dateQILDDLDDLR.length; j++) {
        let tmp;
        let tmp2;

        if (dateQILDDLDDLR[j] < dateQILDDLDDLR[i]) {
            tmp = dateQILDDLDDLR[j];

            dateQILDDLDDLR[j] = dateQILDDLDDLR[i];
            dateQILDDLDDLR[i] = tmp;

            tmp2 = reservations[j];
            // console.log("tmp2 :", tmp2);
            // console.log("reservation j before :", reservations[j]);


            reservations[j] = reservations[i];
            // console.log("reservation j after :", reservations[j]);
            reservations[i] = tmp2;
        }
    }
}
// console.log("date de mes couilles comme il dit :", dateQILDDLDDLR);
// console.log(" reservation :", reservations);

let reservationSorted = [[], [], []];

for (let i = 0; i < reservations.length; i++) {
    if (reservations[i].status === 'pending') {
        reservationSorted[0].push(reservations[i]);
    } else if (reservations[i].status === 'accepted') {
        reservationSorted[1].push(reservations[i]);
    } else
        reservationSorted[2].push(reservations[i]);

}
reservations = [];

reservations.push(...reservationSorted[0]);
reservations.push(...reservationSorted[1]);
reservations.push(...reservationSorted[2]);
// console.log('reservation bitch:', reservations);

let divMesPart = [];



function creationResa() {
    for (let i = 0; i < reservations.length; i++) {
        
        let divCol = document.createElement('div');
        divCol.className = 'col-md-6';
        divRow.appendChild(divCol);

        divResa[i] = document.createElement('div');
        divCol.appendChild(divResa[i]);
        divResa[i].className = 'div-resa p-3 m-2 w-100';

        let divButton = document.createElement('div');
        divResa[i].appendChild(divButton);
        divButton.className = 'd-flex justify-content-between';

        let acceptButton = document.createElement('button');
        acceptButton.innerText = 'Accepter';
        acceptButton.className = 'accBtn btn btn-success mb-2';
        divButton.appendChild(acceptButton);
        acceptButton.addEventListener('click', () => {
                reservations[i].status = 'accepted';
                divResa[i].style.border = '3px solid green';
                acceptButton.disabled = true;
                refuseButton.disabled = false;
                alert('Réservation acceptée !');
        });

        let refuseButton = document.createElement('button');
        refuseButton.innerText = 'Refuser';
        refuseButton.className = 'refBtn btn btn-danger mb-2';
        divButton.appendChild(refuseButton);
        refuseButton.addEventListener('click', () => {
            reservations[i].status = 'refused';
            divResa[i].style.border = '3px solid red';
            refuseButton.disabled = true;
            acceptButton.disabled = false;
            alert('Réservation refusée !');
        });

        let resaH = document.createElement('h4');
        divResa[i].appendChild(resaH);
        resaH.innerText = reservations[i].espace;

        let divDateForm = document.createElement('div');
        divResa[i].appendChild(divDateForm);
        divDateForm.className = 'd-flex justify-content-between';


        let p = document.createElement('p');
        divDateForm.appendChild(p);
        p.textContent = `De ${reservations[i].beginDate} à ${reservations[i].endDate}`;

        p = document.createElement('p');
        divDateForm.appendChild(p);
        p.innerText = reservations[i].formule;

        divMesPart[i] = document.createElement('div');
        divResa[i].appendChild(divMesPart[i]);



        let showButton = document.createElement('button');
        showButton.innerText = "Afficher la réservation";
        showButton.className = 'btn btn-info mb-2';
        divResa[i].appendChild(showButton);
        showButton.addEventListener('click', () => {
            addInfo(i);
            showButton.remove();
        });

        switch (reservations[i].status) {
            case 'pending':
                divResa[i].style.border = '3px solid orange';
                break;

            case 'accepted':
                divResa[i].style.border = '3px solid green';
                acceptButton.disabled = true;
                break;

            case 'refused':
                divResa[i].style.border = '3px solid red';
                refuseButton.disabled = true;
                break;

            default:
                break;
        }
    }



}
creationResa();
function addInfo (i) {

    let divInfo = document.createElement('div');
    divResa[i].appendChild(divInfo);


    p = document.createElement('p');
        divInfo.appendChild(p);
        p.innerText = reservations[i].nom;
    p = document.createElement('p');
        divInfo.appendChild(p);
        p.innerText = reservations[i].prenom;
    p = document.createElement('p');
        divInfo.appendChild(p);
        p.innerText = reservations[i].mail;
    p = document.createElement('p');
        divInfo.appendChild(p);
        p.innerText = reservations[i].telephone;
    p = document.createElement('p');
        divInfo.appendChild(p);
        p.innerText = "Message : " + reservations[i].message;

    let aFormRetour = document.createElement('a');
    divInfo.appendChild(aFormRetour);
    button = document.createElement('button');
    button.innerText = 'Répondre';
    button.className = 'btn btn-info mb-20;'
    aFormRetour.appendChild(button);
    aFormRetour.href = 'lien vers formulaire retour';
    aFormRetour.target = '_blank';
    
}


let divCalendar = document.createElement('div');
divCalendar.className = 'div-calendar border border-dark w-75 p-5 m-5';
divRoot.appendChild(divCalendar);

let tabMonth = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();


// console.log(acceptedReservations);

// console.log(date);

// for (let i = 0; i < 11; i++) {
//         console.log(new Date(date.getFullYear(),date.getMonth()+i).getDay());// jour début de ce mois 
//     if(new Date(date.getFullYear(),date.getMonth()+1+i).getDay()-1<0) {
//         console.log(6);
//     } else{
//         console.log(new Date(date.getFullYear(),date.getMonth()+1+i).getDay()-1); // jour fin de ce mois
//     }
//     console.log(new Date(date.getFullYear(),date.getMonth()+1+i,0).getDate()); // nombre de jours du mois
// }

let divInputGroup = document.createElement('div');
divInputGroup.className = "input-group d-flex flex-column";
divCalendar.appendChild(divInputGroup);

const inputGroupText = document.createElement('span');
inputGroupText.className = "input-group-text text-center";
inputGroupText.textContent = 'Calendrier des réservations';
divInputGroup.appendChild(inputGroupText);

let trMonth = document.createElement('span');
trMonth.className = "d-flex input-group justify-content-between";
divInputGroup.appendChild(trMonth);

const btnPre = document.createElement('button');
btnPre.textContent = "Précédent";
btnPre.className = "input-group-text";
btnPre.addEventListener('click', () => {
    displayMonth--;
    tab.innerHTML = "";
    createTab();
    month--;
    if  (month<0) {
        month = 11;
        year--;
    }
    pMonth.textContent = tabMonth[month];
});

trMonth.appendChild(btnPre);
let pMonth = document.createElement('p');
pMonth.className = "d-flex align-items-center";
trMonth.appendChild(pMonth);


// pMonth.textContent = tabMonth[month];

const btnNext = document.createElement('button');
btnNext.className = "input-group-text";
btnNext.textContent = "Suivant";
trMonth.appendChild(btnNext);
btnNext.addEventListener('click', () => {
    displayMonth++;
    tab.innerHTML = "";
    createTab();
    month++;
    if (month>11) {
        month = 0;
        year++;
    }
    pMonth.textContent = tabMonth[month];
});

// let trDays = document.createElement



let tab = document.createElement('table');
divInputGroup.appendChild(tab);
let trEsp = document.createElement('tr');
tab.appendChild(trEsp);




let displayMonth = 0;
let trDays = document.createElement('tr');
tab.appendChild(trDays);
for (let i = 0; i < 7; i++) {
    let day = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    let tdDays = document.createElement('td');
    tdDays.className = 'text-center';
    trDays.appendChild(tdDays);
    tdDays.innerText = day[i];
    
}

function createTab() {
    // trMonth.appendChild(bNext);
    // trMonth.appendChild(bPre);

    let monthDay = new Date(date.getFullYear(),date.getMonth()+displayMonth).getDay();
    let nbDayMonth = new Date(date.getFullYear(),date.getMonth()+1+displayMonth,0).getDate();
    let dayCount=1;
    let beforeArray = [];
    let tr;
    for (let i = 0; i < 42; i++) {
        if (i===0 || (i)%7===0) {
            tr = document.createElement('tr');
            tab.appendChild(tr);
        }
        let td = document.createElement('td');
        td.className = 'text-center p-1';
        tr.appendChild(td);
        if (i===monthDay) {
            td.textContent = dayCount;
            dayCount++;
            monthDay++;
        }else{
            beforeArray.push(td);
        }
        if (dayCount>nbDayMonth) {
            break;
        }    
    }

    beforeArray.reverse();
    // for (let i = 0; i < ; i++) {
    //     const element = array[i];
        
    // }
    pMonth.textContent = tabMonth[month];

}
createTab();

let acceptedReservations = reservations.filter(reservations => reservations.status === 'accepted');
console.log(acceptedReservations);
let datesReservations = [];
function SelectDateAccepted () {
    let tabDate = [];
    for (let i = 0; i < acceptedReservations.length; i++) {
        // tabDate = [];
        tabDate.push(acceptedReservations[i].beginDate);
        tabDate.push(acceptedReservations[i].endDate);
        datesReservations.push(tabDate);
        // console.log(tabDate);
        // console.log(datesReservations);
        
        
    }

}

acceptedReservations.filter(SelectDateAccepted); 
console.log(acceptedReservations);

console.log(datesReservations);




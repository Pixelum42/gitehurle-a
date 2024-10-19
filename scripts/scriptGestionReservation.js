

let chambre = "chambre double";
let date2;
let date1 = () => {
    const a = Math.round(Math.random() + 2024);
    const m = Math.ceil(Math.random() * 12).toString().padStart(2, 0);
    const d = Math.ceil(Math.random() * 31).toString().padStart(2, 0);
    if (m < 12) {
        let x = (parseInt(d) + 1).toString().padStart(2,0);
    
        date2 = `${a}-${m}-${x}`;

    }
    return (`${a}-${m}-${d}`);
};


let formule = "-10%";
let messageFac = "Les gens, n'est-ce pas ? THE SOFTWARE IS PROVIDED AS IS AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.";


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


function gestionResaGeneration () {
    let main = document.getElementById('main-id');
    main.innerHTML = "";


    let divRoot = document.createElement('div');
    divRoot.className = "border border-dark d-flex justify-content-between";
    main.appendChild(divRoot);
    
    let divResaList = document.createElement('div');
    divResaList.className = 'container';
    divRoot.appendChild(divResaList);
    
    let divRow = document.createElement('div');
    divRow.className = 'row';
    divResaList.appendChild(divRow);

    // tabTri();
    creationResa(divRow);
    displayCalendar(divRoot);
    // createTab();

}


function tabTri() {
    let dateQILDDLDDLR = [];
    for (let i = 0; i < reservations.length; i++) {
        let test = reservations[i].beginDate.replaceAll("-", "");
        dateQILDDLDDLR.push(parseInt(test));
    }
    
    for (let i = 0; i < dateQILDDLDDLR.length; i++) {
        for (let j = i + 1; j < dateQILDDLDDLR.length; j++) {
            let tmp;
            let tmp2;
            
            if (dateQILDDLDDLR[j] < dateQILDDLDDLR[i]) {
                tmp = dateQILDDLDDLR[j];
                
                dateQILDDLDDLR[j] = dateQILDDLDDLR[i];
                dateQILDDLDDLR[i] = tmp;
                
                tmp2 = reservations[j];
                reservations[j] = reservations[i];
                reservations[i] = tmp2;
            }
        }
    }

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
}
// tabTri();





function creationResa(row) {
    tabTri();
    for (let i = 0; i < reservations.length; i++) {
        
        let divCol = document.createElement('div');
        divCol.className = 'col-md-6';
        row.appendChild(divCol);

        let divEntResa = document.createElement('div');
        divCol.appendChild(divEntResa);
        divEntResa.className = "input-group d-flex flex-column p-1 m-2 w-100";

        let divTrResa = document.createElement('span');
        divEntResa.appendChild(divTrResa);
        divTrResa.className = "input-group-text mb-2";

        let divResa = [];

        divResa[i] = document.createElement('div');
        divEntResa.appendChild(divResa[i]);
        // divResa[i].className = 'div-resa';


        let divButton = document.createElement('div');
        divResa[i].appendChild(divButton);
        divButton.className = 'd-flex justify-content-between';

        let acceptButton = document.createElement('button');
        acceptButton.innerText = 'Accepter';
        acceptButton.className = 'accBtn btn btn-success mb-2';
        divButton.appendChild(acceptButton);
        acceptButton.addEventListener('click', () => {
                reservations[i].status = 'accepted';
                divEntResa.classList.remove('border-warning');
                divEntResa.classList.add('border-success');
                divTrResa.classList.remove('bg-warning');
                divTrResa.classList.add('bg-success', 'text-light');
                divTrResa.innerText = "Réservation acceptée";
                acceptButton.disabled = true;
                refuseButton.disabled = false;
                alert('Réservation acceptée !');
                gestionResaGeneration();
        });

        let refuseButton = document.createElement('button');
        refuseButton.innerText = 'Refuser';
        refuseButton.className = 'refBtn btn btn-danger mb-2';
        divButton.appendChild(refuseButton);
        refuseButton.addEventListener('click', () => {
            reservations[i].status = 'refused';
            divEntResa.classList.remove('border-warning');
            divEntResa.classList.add('border-danger');
            divTrResa.classList.remove('bg-warning');
            divTrResa.classList.add('bg-danger', 'text-light');
            divTrResa.innerText = "Réservation refusée";
            refuseButton.disabled = true;
            acceptButton.disabled = false;
            alert('Réservation refusée !');
            gestionResaGeneration();
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




        let showButton = document.createElement('button');
        showButton.innerText = "Afficher la réservation";
        showButton.className = 'btn btn-info mb-2';
        divResa[i].appendChild(showButton);
        showButton.addEventListener('click', () => {
            addInfo(i, divResa);
            showButton.remove();
        });

        switch (reservations[i].status) {
            case 'pending':
                // divEntResa.style.border = '3px solid orange';
                divTrResa.innerText = "Réservation en attente";
                divTrResa.classList.add('bg-warning');
                divEntResa.classList.add('border', 'border-warning', 'rounded', 'border-2');
                break;

            case 'accepted':
                divEntResa.style.border = '3px solid green';
                acceptButton.disabled = true;
                divTrResa.innerText = "Réservation validée";
                divTrResa.classList.add('bg-success', 'text-light');
                divEntResa.classList.add('border', 'border-success', 'rounded', 'border-2');
                break;

            case 'refused':
                divEntResa.style.border = '3px solid red';
                refuseButton.disabled = true;
                divTrResa.classList.add('bg-danger', 'text-light');
                divEntResa.classList.add('border', 'border-danger', 'rounded', 'border-2');
                divTrResa.innerText = "Réservation refusée";
                break;

            default:
                break;
        }
    }



}
// creationResa();


function addInfo (i, divResa) {

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
    let pMes = document.createElement('p');
        // p.id = `message-id-${i}`;
        divInfo.appendChild(pMes);
        pMes.innerText = "Message : " + reservations[i].message;
    
    let divButtonEnd = document.createElement('div');
    divInfo.appendChild(divButtonEnd);
    divButtonEnd.className = 'd-flex justify-content-between';

    let aFormRetour = document.createElement('a');
    divButtonEnd.appendChild(aFormRetour);
    button = document.createElement('button');
    button.innerText = 'Répondre';
    button.className = 'btn btn-info mb-20';
    aFormRetour.appendChild(button);

    aFormRetour.addEventListener('click',()=>{
        const blurTable=[];
          blurTable.push(document.getElementById('header-id'));
          blurTable.push(document.getElementById('nav-id'));
          blurTable.push(document.getElementById('main-id'));
          blurTable.push(document.getElementById('footer-id'));
           
           console.log(blurTable);
           for (let i = 0; i < blurTable.length; i++) {
            blurTable[i].style.filter= 'blur(4px)';          
           }
          //  document.body.classList.add('d-flex', 'justify-content-between','align-items-center')
           setTimeout(() => {
            generateRetMessage(reservations[i].message);
            
           }, 300);
      });


    // aFormRetour.href = 'lien vers formulaire retour';
    // aFormRetour.target = '_blank';

    let buttonBack = document.createElement('button');
    divButtonEnd.appendChild(buttonBack);
    buttonBack.innerText = 'Masquer la réservation';
    buttonBack.className = 'btn btn-info mb-20';
    buttonBack.addEventListener('click', () => {
        divInfo.remove();
        let showButton = document.createElement('button');
        showButton.innerText = "Afficher la réservation";
        showButton.className = 'btn btn-info mb-2';
        divResa[i].appendChild(showButton);
        showButton.addEventListener('click', () => {
            addInfo(i, divResa);
            showButton.remove();
        });
    })

    
}




function displayCalendar(root) {
    let tabMonth = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    let displayMonth = 0;
    let tab = document.createElement('table');
    let pMonth = document.createElement('p');
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let divCalendar = document.createElement('div');
    divCalendar.className = 'div-calendar border border-dark w-75 p-5 m-5';
    root.appendChild(divCalendar);
    
    
    
    let divInputGroup = document.createElement('div');
    divInputGroup.className = "input-group d-flex flex-column";
    divCalendar.appendChild(divInputGroup);
    
    const inputGroupText = document.createElement('span');
    inputGroupText.className = "input-group-text text-center";
    inputGroupText.textContent = 'Calendrier des réservations';
    divInputGroup.appendChild(inputGroupText);
    
    let trYear = document.createElement('div');
    trYear.innerText = year;
    divInputGroup.appendChild(trYear)
    
    let trMonth = document.createElement('span');
    trMonth.className = "d-flex input-group justify-content-between";
    divInputGroup.appendChild(trMonth);
    
    
    
    const btnPre = document.createElement('button');
    btnPre.textContent = "Précédent";
    btnPre.className = "input-group-text";
    btnPre.addEventListener('click', () => {
        displayMonth--;
        tab.innerHTML = "";
        month--;
        if  (month<0) {
            month = 11;
            year--;
        }
        createTab(tabMonth, displayMonth, tab, pMonth, year, month);
        trYear.innerText = year;
        pMonth.textContent = tabMonth[month];
    });
    
    trMonth.appendChild(btnPre);
    pMonth.className = "d-flex align-items-center";
    trMonth.appendChild(pMonth);
    
    
    
    const btnNext = document.createElement('button');
    btnNext.className = "input-group-text";
    btnNext.textContent = "Suivant";
    trMonth.appendChild(btnNext);
    btnNext.addEventListener('click', () => {
        displayMonth++;
        tab.innerHTML = "";
        month++;
        if  (month>11) {
            month = 0;
            year++;
        }
        createTab(tabMonth, displayMonth, tab, pMonth, year, month);
        trYear.innerText = year;
        pMonth.textContent = tabMonth[month];
    });
    
    
    
    // let trEsp = document.createElement('tr');
    // divInputGroup.appendChild(trEsp);
    divInputGroup.appendChild(tab);
    
   
    createTab(tabMonth, displayMonth, tab, pMonth, year, month);

}


function createTab(tabMonth, disMonth, tab, pMonth, year, month) {
    let date = new Date();
    let dayCount=1;
    let nbDayMonth = new Date(date.getFullYear(),date.getMonth()+1+disMonth,0).getDate();
    let monthDay = new Date(date.getFullYear(),date.getMonth()+disMonth).getDay();
    let tr;
    let td;
    let currentDate = new Date(date.getFullYear(), date.getMonth(), dayCount);
    let trDays = document.createElement('tr');
    tab.appendChild(trDays);
    trDays.style.border = "2px black solid";
    for (let i = 0; i < 7; i++) {
        let day = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        let tdDays = document.createElement('td');
        tdDays.className = 'text-center';
        tdDays.style.border = "2px black solid";
        trDays.appendChild(tdDays);
        tdDays.innerText = day[i];
        
    }
    for (let i = 0; i < 42; i++) {
        if (i===0 || (i)%7===0) {
            tr = document.createElement('tr');
            tab.appendChild(tr);
        }
        td = document.createElement('td');
        td.className = 'text-center p-1';
        tr.appendChild(td);
        if (i===monthDay) {
            td.textContent = dayCount;
            grisDate(td, currentDate);
            currentDate = new Date(year, month, dayCount);
            monthDay++;
            dayCount++; 
        }
        if (dayCount>nbDayMonth) {
            break;
        }
    }

    pMonth.textContent = tabMonth[date.getMonth()];
        
}
// createTab();

function grisDate(e, currentDate) {
    
    let datesReservations = [];
    let acceptedReservations = reservations.filter(reservations => reservations.status === 'accepted');
    let tabDate = [];
    for (let i = 0; i < acceptedReservations.length; i++) {
        tabDate = [];
        tabDate.push(acceptedReservations[i].beginDate);
        tabDate.push(acceptedReservations[i].endDate);
        
        datesReservations.push(tabDate); 
    }

    // let dateAccepted = SelectDateAccepted(acceptedReservations);
    for (let j = 0; j < datesReservations.length; j++) {
        let currentDateBegin = new Date(datesReservations[j][0]);
        currentDateBegin.setHours(0,0,0);
        
        let currentDateEnd = new Date(datesReservations[j][1]);
        currentDateEnd.setHours(0,0,0);

        if (currentDate >= currentDateBegin && currentDate <= currentDateEnd ) {
            e.classList.add("bg-secondary-subtle");
            e.setAttribute('style','background-color:black');
            
        }
    }
    
    
}

// formulaire réponse pop-up


function generateRetMessage(Message) {
    // if(document.getElementById('co-div')){document.getElementById('co-div').remove();}
    const reDiv = document.createElement('div');
    reDiv.id='re-div';
    reDiv.classList.add('position-fixed', 'translate-middle', 'top-50', 'start-50', 'co-div');
    document.body.appendChild(reDiv);

    // let button = document.createElement('button');
    // button.innerText = "X";
    // button.className = "bg-danger"
    // reDiv.appendChild(button);
   
    let form = document.createElement('form');
    form.className = 'form-signin p-3 rounded co-div bg-light border border-2 border-black';
    form.setAttribute('style','position:relative; z-index:666');
    reDiv.appendChild(form);

    let divHeader = document.createElement('div');
    form.appendChild(divHeader);

    let button = document.createElement('button');
    button.innerText = "X";
    button.className = "bg-danger"
    divHeader.appendChild(button);
    button.addEventListener('click',closeRetMessage);
   
    let h1 = document.createElement('h1');
    h1.className = "co-div h3 mb-3 fw-normal";
    h1.textContent = "Répondre au message";
    divHeader.appendChild(h1);

    let divMessage = document.createElement('div');
    divMessage.className = "form-floating co-div";
    form.appendChild(divMessage);

    let labelMessage = document.createElement("p");
    divMessage.appendChild(labelMessage);
    labelMessage.className = "font-weight-bold";
    labelMessage.innerText = "Message :";
    labelMessage.setAttribute("for", "info");

    let pMessage = document.createElement('p'); 
    pMessage.innerText = Message;
    divMessage.appendChild(pMessage);

    let divReponse = document.createElement('div');
    divReponse.className = "form-floating co-div";
    form.appendChild(divReponse);

    let labelReponse = document.createElement("p");
    divMessage.appendChild(labelReponse);
    labelReponse.className = "font-weight-bold";
    labelReponse.innerText = "Réponse :";
    labelReponse.setAttribute("for", "info");


    let textAreaMessage = document.createElement("textarea");
    divReponse.appendChild(textAreaMessage);
    textAreaMessage.className = "w-100";

    button = document.createElement('button');
    button.innerText = "Envoyer";
    button.className = "btn btn-info m-1";
    form.appendChild(button);
    button.addEventListener('click', () => {
        alert('Message envoyé');
        // envoyer message au client via mail
    })

   
}
   
  function closeRetMessage() {
    document.getElementById('re-div').remove();
    const blurTable=[];
    blurTable.push(document.getElementById('header-id'));
    blurTable.push(document.getElementById('nav-id'));
    blurTable.push(document.getElementById('main-id'));
    blurTable.push(document.getElementById('footer-id'));
    for (let i = 0; i < blurTable.length; i++) {
    blurTable[i].style.filter= 'blur(0px)';          
    }
  }


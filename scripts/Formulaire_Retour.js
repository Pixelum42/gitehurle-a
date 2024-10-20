// let mes = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";


// let messages = [

//     { "status": 'pending', "objet": 'objet', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", 'message': mes },
//     { "status": 'archived', "objet": 'objet', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", 'message': 'message' },
//     { "status": 'pending', "objet": 'objet', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", 'message': 'message' },
//     { "status": 'archived', "objet": 'objet', "nom": "nom", "prenom": "prenom", "mail": "mail", "telephone": "telephone", 'message': 'message' },

// ];

function mesTri() {
    let messagesorted = [[], []];

    for (let i = 0; i < messages.length; i++) {
        if (messages[i].status === 'pending') {
            messagesorted[0].push(messages[i]);
        } else if (messages[i].status === 'archived') {
            messagesorted[1].push(messages[i]);
        }
    }
    messages = [];
    messages.push(...messagesorted[0]);
    messages.push(...messagesorted[1]);
}

function listMessage() {
    let main = document.getElementById('main-id');
    main.innerHTML = "";

    let h3 = document.createElement('h3');
    h3.textContent = "Messages reçus";
    h3.className = 'text-center';
    main.appendChild(h3);

    let divRoot = document.createElement('div');
    divRoot.className = "d-flex justify-content-between";
    main.appendChild(divRoot);


    let divMesList = document.createElement('div');
    divMesList.className = 'container mt-3';
    divRoot.appendChild(divMesList);

    let divRow = document.createElement('div');
    divRow.className = 'row';
    divMesList.appendChild(divRow);


    mesTri();
    for (let i = 0; i < messages.length; i++) {



        let divCol = document.createElement('div');
        divCol.className = 'col-md-6';
        divRow.appendChild(divCol);

        let divEntMes = document.createElement('div');
        divCol.appendChild(divEntMes);
        divEntMes.className = "input-group d-flex flex-column p-1 m-2 w-100";

        let divTrMes = document.createElement('span');
        divEntMes.appendChild(divTrMes);
        divTrMes.className = "input-group-text mb-2";

        let divMes = [];

        divMes[i] = document.createElement('div');
        divEntMes.appendChild(divMes[i]);
        // divMes[i].className = 'div-resa';

        let mesH = document.createElement('h4');
        divMes[i].appendChild(mesH);
        mesH.className = 'text-center';
        mesH.innerText = messages[i].objet;

        let divInfo = document.createElement('div');
        divMes[i].appendChild(divInfo);

        let divName = document.createElement('div');
        divName.className = 'd-flex justify-content-around';
        divInfo.appendChild(divName);

        let p = document.createElement('p');
        divName.appendChild(p);
        p.innerText = messages[i].nom;
        p = document.createElement('p');
        divName.appendChild(p);
        p.innerText = messages[i].prenom;

        p = document.createElement('p');
        divInfo.appendChild(p);
        p.innerText = messages[i].mail;

        p = document.createElement('p');
        divInfo.appendChild(p);
        p.innerText = messages[i].telephone;

        let showButton = document.createElement('button');
        showButton.innerText = "Afficher le message";
        showButton.className = 'btn btn-info mb-2';
        divMes[i].appendChild(showButton);
        showButton.addEventListener('click', () => {
            reponseForm(messages[i], divRoot, divEntMes, divTrMes);
        });

        switch (messages[i].status) {
            case 'pending':
                divTrMes.innerText = "Réponse en attente";
                divTrMes.classList.add('bg-warning');
                divEntMes.classList.add('border', 'border-warning', 'rounded', 'border-2');
                break;

            case 'archived':
                divEntMes.style.border = '3px solid green';
                divTrMes.innerText = "Répondu";
                divTrMes.classList.add('bg-success', 'text-light');
                divEntMes.classList.add('border', 'border-success', 'rounded', 'border-2');
                break;

            default:
                break;
        }

    }




}






function reponseForm(message, root) {

    if (document.getElementById('re-div')) { document.getElementById('re-div').remove(); }
    let reDiv = document.createElement('div');
    reDiv.id = 're-div';
    reDiv.className = 'w-75 p-5 m-5';
    root.appendChild(reDiv);


    let form = document.createElement('form');
    form.className = 'form-signin p-3 rounded co-div bg-light border border-2 border-black';
    form.setAttribute('style', 'position:relative; z-index:666');
    reDiv.appendChild(form);

    let divHeader = document.createElement('div');
    form.appendChild(divHeader);

    let h1 = document.createElement('h1');
    h1.className = "co-div h3 mb-3 fw-normal";
    h1.textContent = "Répondre au message";
    divHeader.appendChild(h1);

    let divMessage = document.createElement('div');
    divMessage.className = "form-floating co-div";
    form.appendChild(divMessage);

    let divName = document.createElement('div');
        divName.className = 'd-flex justify-content-around';
        divMessage.appendChild(divName);

    let p = document.createElement('p');
        divName.appendChild(p);
        p.innerText = message.nom;
        p = document.createElement('p');
        divName.appendChild(p);
        p.innerText = message.prenom;

        p = document.createElement('p');
        divMessage.appendChild(p);
        p.innerText = message.mail;

    let labelMessage = document.createElement("p");
    divMessage.appendChild(labelMessage);
    labelMessage.className = "font-weight-bold";
    labelMessage.innerText = "Message :";
    labelMessage.setAttribute("for", "info");

    let pMessage = document.createElement('p');
    pMessage.innerText = message.message;
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

    let sendButton = document.createElement('button');
    sendButton.innerText = 'Envoyer';
    sendButton.className = 'sendBtn btn btn-success mb-2';
    form.appendChild(sendButton);
    sendButton.addEventListener('click', () => {
        message.status = 'archived';

        // entMes.classList.remove('border-warning');
        // entMes.classList.add('border-success');
        // trMes.classList.remove('bg-warning');
        // trMes.classList.add('bg-success', 'text-light');
        // trMes.innerText = "Répondu";
        // sendButton.disabled = true;
        // refuseButton.disabled = false;
        alert('Message envoyé');
        listMessage();
    });
}

// listMessage();
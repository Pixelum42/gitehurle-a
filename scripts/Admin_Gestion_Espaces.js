function generateMainAdminSpaceManagement(space) {// arg take spaceName[i];
    const main = document.getElementById("main-id");
    main.innerHTML = '';

    const navGMASM = document.createElement('nav');
    navGMASM.className = "navbar navbar-expand-lg";
    const bodyGMASM = document.createElement('div');
    bodyGMASM.className = "row m-2";
    main.append(navGMASM, bodyGMASM);

    const innerNavGMASM0 = document.createElement('div');
    innerNavGMASM0.className = "container-fluid";
    navGMASM.appendChild(innerNavGMASM0);
    const innerNavGMASM1 = document.createElement('div');
    innerNavGMASM1.className = "collapse navbar-collapse";
    innerNavGMASM1.id = "navbarNavDropdown";
    innerNavGMASM0.appendChild(innerNavGMASM1);

    const innerNavGMASM2 = document.createElement('ul');
    innerNavGMASM2.className = "navbar-nav";
    innerNavGMASM1.appendChild(innerNavGMASM2);
    const innerNavGMASM3 = document.createElement('li');
    innerNavGMASM3.className = "nav-item dropdown";
    innerNavGMASM2.appendChild(innerNavGMASM3);
    const innerNavGMASM4 = document.createElement('a');
    innerNavGMASM4.className = "nav-link dropdown-toggle";
    innerNavGMASM4.href = "#"; ///////////////////////////////////////NOT A LINK 
    innerNavGMASM4.role = "button";
    innerNavGMASM4.setAttribute('data-bs-toggle', "dropdown");
    innerNavGMASM4.setAttribute('aria-expanded', "false");
    innerNavGMASM4.textContent = "Espaces";//////////////////////////////BROPDOWN NAME 1

    const innerNavGMASM5 = document.createElement('ul');
    innerNavGMASM5.className = "dropdown-menu";
    innerNavGMASM3.append(innerNavGMASM4, innerNavGMASM5);
    let dropdownNavSpaces0 = [];
    let dropdownNavSpacesLink0 = [];
    for (let i = 0; i < rooms.length; i++) {
        dropdownNavSpaces0.push(document.createElement('li'));
        innerNavGMASM5.appendChild(dropdownNavSpaces0[i]);
        dropdownNavSpacesLink0.push(document.createElement('a'));
        dropdownNavSpacesLink0[i].className = "dropdown-item";
        dropdownNavSpacesLink0[i].href = "#";//////////////////////////////////LINK SPACES
        dropdownNavSpacesLink0[i].addEventListener('click', () => generateMainAdminSpaceManagement(i));
        dropdownNavSpacesLink0[i].textContent = rooms[i].nom;
        dropdownNavSpaces0[i].appendChild(dropdownNavSpacesLink0[i]);
    }
    const innerDivGMASM1 = document.createElement('div');
    innerDivGMASM1.className = 'row m-2';
    main.appendChild(innerDivGMASM1);
    const innerDivGMASM2 = document.createElement('div');
    innerDivGMASM2.className = "col-6 d-flex flex-column";
    innerDivGMASM1.appendChild(innerDivGMASM2);

    const innerDivGMASM3 = document.createElement('div');
    innerDivGMASM3.className = "input-group mb-3";
    innerDivGMASM2.appendChild(innerDivGMASM3);
    const innerDivGMASM4 = document.createElement('span');
    innerDivGMASM4.className = "input-group-text";
    innerDivGMASM4.id = "inputGroup-sizing-default";
    innerDivGMASM4.textContent = "Name";
    const innerDivGMASM5 = document.createElement('input');
    innerDivGMASM5.className = "form-control";
    innerDivGMASM5.type = "text";
    innerDivGMASM5.setAttribute("aria-label", "Sizing example input");
    innerDivGMASM5.setAttribute("aria-describedby", "inputGroup-sizing-default");
    innerDivGMASM5.value = rooms[space].nom;
    innerDivGMASM3.append(innerDivGMASM4, innerDivGMASM5);
    let innerDivGMASM6;
    let innerDivGMASM8 = [];
    for (let i = 0; i < rooms[space].images.length; i++) {

        innerDivGMASM6 = document.createElement('div');
        innerDivGMASM6.className = "input-group mb-3";
        innerDivGMASM2.appendChild(innerDivGMASM6);
        const innerDivGMASM7 = document.createElement('button');
        innerDivGMASM7.className = "btn btn-outline-secondary";
        innerDivGMASM7.type = "button";
        innerDivGMASM7.id = "button-addon1";
        innerDivGMASM7.textContent = `URL ${i + 1}`;
        innerDivGMASM7.addEventListener('click', () => {
            rooms[space].images[i] = innerDivGMASM8[i].value;
            generateMainAdminSpaceManagement(space);
        });
        innerDivGMASM8.push(document.createElement('input'));
        innerDivGMASM8[i].className = "form-control";
        innerDivGMASM8[i].type = "text";
        innerDivGMASM8[i].setAttribute("aria-label", "Example text with button addon");
        innerDivGMASM8[i].setAttribute("aria-describedby", "button-addon1");
        innerDivGMASM8[i].value = rooms[space].images[i];
        const innerDivGMASMBin = document.createElement('button');
        innerDivGMASMBin.className = "btn btn-outline-secondary";
        innerDivGMASMBin.type = "button";
        innerDivGMASMBin.id = "button-addon1";
        innerDivGMASMBin.addEventListener('click', () => {
            rooms[space].images.splice(i, 1);
            generateMainAdminSpaceManagement(space);
        });
        const binIcon = document.createElement('i');
        binIcon.className = "bi bi-trash";
        innerDivGMASMBin.appendChild(binIcon);
        innerDivGMASM6.append(innerDivGMASM7, innerDivGMASM8[i], innerDivGMASMBin);
    }
    const innerDivAddUrlBtn = document.createElement('button');
    innerDivAddUrlBtn.className = "btn btn-outline-secondary";
    innerDivAddUrlBtn.type = "button";
    innerDivAddUrlBtn.addEventListener('click', () => {
        rooms[space].images.push("");
        generateMainAdminSpaceManagement(space);
    });
    const addIcon = document.createElement('i');
    addIcon.className = "bi bi-plus-square";
    innerDivAddUrlBtn.appendChild(addIcon);
    innerDivGMASM2.appendChild(innerDivAddUrlBtn);

    const innerDivGMASM9 = document.createElement('div');
    innerDivGMASM9.className = "row my-2";
    innerDivGMASM2.appendChild(innerDivGMASM9);
    const innerDivGMASM10 = document.createElement('div');
    innerDivGMASM10.className = "input-group";
    innerDivGMASM9.appendChild(innerDivGMASM10);
    const innerDivGMASM11 = document.createElement('span');
    innerDivGMASM11.className = "input-group-text";
    innerDivGMASM11.textContent = "Description";
    const innerDivGMASM12 = document.createElement('textarea');
    innerDivGMASM12.className = "form-control";
    innerDivGMASM12.value = rooms[space].description;
    innerDivGMASM12.setAttribute("aria-label", "With textarea");
    innerDivGMASM9.append(innerDivGMASM11, innerDivGMASM12);

    const innerDivRapidFix0 = document.createElement('div');
    innerDivRapidFix0.className = "row my-2";
    innerDivGMASM2.appendChild(innerDivRapidFix0);
    const innerDivRapidFix1 = document.createElement('div');
    innerDivRapidFix1.className = "input-group";
    innerDivRapidFix0.appendChild(innerDivRapidFix1);
    const innerDivRapidFix2 = document.createElement('span');
    innerDivRapidFix2.className = "input-group-text";
    innerDivRapidFix2.textContent = "Description Courte";
    const innerDivRapidFix3 = document.createElement('textarea');
    innerDivRapidFix3.className = "form-control";
    innerDivRapidFix3.value = rooms[space].shortDescription;
    innerDivRapidFix3.setAttribute("aria-label", "With textarea");
    innerDivRapidFix0.append(innerDivRapidFix2, innerDivRapidFix3);

    const innerDivRapidFix4 = document.createElement('div');
    innerDivRapidFix4.className = "row my-2";
    innerDivGMASM2.appendChild(innerDivRapidFix4);
    const innerDivRapidFix5 = document.createElement('div');
    innerDivRapidFix5.className = "input-group";
    innerDivRapidFix4.appendChild(innerDivRapidFix5);
    const innerDivRapidFix6 = document.createElement('span');
    innerDivRapidFix6.className = "input-group-text";
    innerDivRapidFix6.textContent = "Description Supplémentaire";
    const innerDivRapidFix7 = document.createElement('textarea');
    innerDivRapidFix7.className = "form-control";
    innerDivRapidFix7.value = rooms[space].descriptionSup;
    innerDivRapidFix7.setAttribute("aria-label", "With textarea");
    innerDivRapidFix4.append(innerDivRapidFix6, innerDivRapidFix7);

    const innerDivGMASM13 = document.createElement('div');
    innerDivGMASM13.className = "row my-2";
    innerDivGMASM2.appendChild(innerDivGMASM13);
    const innerDivGMASM14 = document.createElement('div');
    innerDivGMASM14.className = "col-6";
    innerDivGMASM13.appendChild(innerDivGMASM14);
    const innerDivGMASM15 = document.createElement('div');
    innerDivGMASM15.className = "input-group";
    innerDivGMASM14.appendChild(innerDivGMASM15);
    const innerDivGMASM16 = document.createElement('span');
    innerDivGMASM16.className = "input-group-text";
    innerDivGMASM16.textContent = "Prix";
    const innerDivGMASM17 = document.createElement('input');
    innerDivGMASM17.type = 'text';
    innerDivGMASM17.className = 'form-control';
    innerDivGMASM17.setAttribute('aria-label', "Euros amount");
    innerDivGMASM17.value = rooms[space].prix;
    const innerDivGMASM18 = document.createElement('span');
    innerDivGMASM18.className = "input-group-text";
    innerDivGMASM18.textContent = "€/nuit";
    innerDivGMASM15.append(innerDivGMASM16, innerDivGMASM17, innerDivGMASM18);

    const innerDivGMASM19 = document.createElement('div');
    innerDivGMASM19.className = 'col-6 d-flex flex-row-reverse';
    innerDivGMASM13.appendChild(innerDivGMASM19);
    const innerDivGMASM20 = document.createElement('button');
    innerDivGMASM20.className = "btn btn-outline-secondary";
    innerDivGMASM20.type = "button";
    innerDivGMASM20.id = "button-addon1";
    innerDivGMASM20.textContent = "Sauvegarder";
    innerDivGMASM20.addEventListener('click', () => {
        rooms[space].nom = innerDivGMASM5.value;
        for (let i = 0; i < rooms[space].images.length; i++) {
            rooms[space].images[i] = innerDivGMASM8[i].value;
        }
        rooms[space].description = innerDivGMASM12.value;
        rooms[space].shortDescription = innerDivRapidFix3.value;
        rooms[space].descriptionSup = innerDivRapidFix7.value;
        rooms[space].prix = innerDivGMASM17.value;

        generateMainAdminSpaceManagement(space);
    });
    innerDivGMASM19.appendChild(innerDivGMASM20);
    const innerDivGMASM21 = document.createElement('div');
    innerDivGMASM21.className = "col-6 d-flex flex-column";
    innerDivGMASM1.appendChild(innerDivGMASM21);

    const innerDivGMASM22 = document.createElement('div');
    innerDivGMASM22.id = "carouselExampleFade";
    innerDivGMASM22.className = "carousel slide carousel-fade";
    innerDivGMASM21.appendChild(innerDivGMASM22);
    const innerDivGMASM25 = document.createElement('div');
    innerDivGMASM25.className = "carousel-inner";
    innerDivGMASM22.appendChild(innerDivGMASM25);

    for (let i = 0; i < rooms[space].images.length; i++) {

        const innerDivGMASM26 = document.createElement('div');
        (i === 0) ? innerDivGMASM26.className = "carousel-item active" : innerDivGMASM26.className = "carousel-item";
        innerDivGMASM25.appendChild(innerDivGMASM26);

        const innerDivGMASM23 = document.createElement('span');
        innerDivGMASM23.className = "input-group-text";
        innerDivGMASM23.textContent = `Preview URL ${i + 1}`;
        const innerDivGMASM24 = document.createElement('img');
        innerDivGMASM24.src = rooms[space].images[i];
        innerDivGMASM24.className = "d-block w-100";
        innerDivGMASM26.append(innerDivGMASM23);
        innerDivGMASM26.append(innerDivGMASM24);

    }

    const innerDivGMASM27 = document.createElement("button");
    innerDivGMASM27.className = "carousel-control-prev";
    innerDivGMASM27.type = "button";
    innerDivGMASM27.setAttribute("data-bs-target", "#carouselExampleFade");
    innerDivGMASM27.setAttribute("data-bs-slide", "prev");

    const innerDivGMASM28 = document.createElement("span");
    innerDivGMASM28.className = "carousel-control-prev-icon";
    innerDivGMASM28.setAttribute('aria-hidden', 'true');
    const innerDivGMASM29 = document.createElement("span");
    innerDivGMASM29.className = "visually-hidden";
    innerDivGMASM29.textContent = "Previous";

    innerDivGMASM27.append(innerDivGMASM28, innerDivGMASM29);

    const innerDivGMASM30 = document.createElement("button");
    innerDivGMASM30.className = "carousel-control-next";
    innerDivGMASM30.type = "button";
    innerDivGMASM30.setAttribute("data-bs-target", "#carouselExampleFade");
    innerDivGMASM30.setAttribute("data-bs-slide", "next");

    const innerDivGMASM31 = document.createElement("span");
    innerDivGMASM31.className = "carousel-control-next-icon";
    innerDivGMASM31.setAttribute('aria-hidden', 'true');
    const innerDivGMASM32 = document.createElement("span");
    innerDivGMASM32.className = "visually-hidden";
    innerDivGMASM32.textContent = "Next";
    innerDivGMASM30.append(innerDivGMASM31, innerDivGMASM32);

    innerDivGMASM22.append(innerDivGMASM27, innerDivGMASM30);

}
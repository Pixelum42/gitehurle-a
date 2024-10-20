const adminLog = {
    "username": "beweb",
    "password": "2024"
};

const makeNav = () => {
    const navbar = document.getElementById("nav-id");
    navbar.innerHTML = '';
    navbar.className = "navbar navbar-expand navbar-light fixed-top";
    navbar.style.backgroundColor = rootColors["--secondary"];

    const divNavbar = document.createElement("div");
    divNavbar.className = "container-fluid d-flex justify-content-evenly";
    navbar.appendChild(divNavbar);

    const brandDiv = document.createElement("div");
    brandDiv.className = "d-flex align-items-center";
    divNavbar.appendChild(brandDiv);

    const brand = document.createElement("a");
    brand.className = "navbar-brand active";
    brand.setAttribute("aria-current", "page");
    brand.href = "#";
    brand.addEventListener("click", () => {
        generateClient_Accueil();
    });
    brand.style.color = rootColors["--text"];
    brand.innerText = "Le Gîte Hurle";
    brandDiv.appendChild(brand);

    const logo = document.createElement("img");
    logo.className = "ms-2";
    logo.src = "assets/logo.svg";
    logo.width = 40;
    logo.height = 40;
    logo.setAttribute("draggable", "false");
    logo.alt = "Logo de Le Gîte Hurle";
    brandDiv.appendChild(logo);

    const divNavbarItems = document.createElement("div");
    divNavbar.appendChild(divNavbarItems);

    const navList = document.createElement("ul");
    navList.className = "navbar-nav me-auto";
    divNavbarItems.appendChild(navList);

    const dropdownTitle = document.createElement("li");
    dropdownTitle.className = "nav-item dropdown";
    navList.appendChild(dropdownTitle);

    const dropdownTitleLink = document.createElement("a");
    dropdownTitleLink.className = "nav-link dropdown-toggle";
    dropdownTitleLink.style.color = rootColors["--text"];
    dropdownTitleLink.setAttribute("data-bs-toggle", "dropdown");
    dropdownTitleLink.setAttribute("aria-expanded", "false");
    dropdownTitleLink.innerText = "Chambres";
    dropdownTitleLink.addEventListener('mouseover', () => {
        dropdownTitleLink.style.cursor = 'pointer';
    });
    dropdownTitle.appendChild(dropdownTitleLink);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.style.backgroundColor = rootColors["--secondary"];
    dropdownTitle.appendChild(dropdownMenu);

    const roomItem0 = document.createElement("li");
    const roomItem1 = document.createElement("li");
    const roomItem2 = document.createElement("li");

    dropdownMenu.append(roomItem0, roomItem1, roomItem2);

    const roomLink0 = document.createElement("a");
    const roomLink1 = document.createElement("a");
    const roomLink2 = document.createElement("a");
    roomLink0.className = "dropdown-item";
    roomLink1.className = "dropdown-item";
    roomLink2.className = "dropdown-item";

    roomLink0.href = "#main-id";
    roomLink0.addEventListener("click", () => {
        displayRoomDetails(rooms[0]);
        roomLink0.setAttribute("scroll-margin-top", "2em");
    });
    roomLink1.href = "#main-id";
    roomLink1.addEventListener("click", () => {
        displayRoomDetails(rooms[1]);
        roomLink1.setAttribute("scroll-margin-top", "2em");
    });
    roomLink2.href = "#main-id";
    roomLink2.addEventListener("click", () => {
        displayRoomDetails(rooms[2]);
        roomLink2.setAttribute("scroll-margin-top", "2em");
    });
    roomLink0.style.color = rootColors["--text"];
    roomLink1.style.color = rootColors["--text"];
    roomLink2.style.color = rootColors["--text"];
    roomLink0.innerText = "Chambre double";
    roomLink1.innerText = "Chambre familiale";
    roomLink2.innerText = "Appartement";

    roomLink0.addEventListener("mouseenter", () => {
        roomLink0.style.color = rootColors["--primary"];
        roomLink0.style.backgroundColor = rootColors["--background"];
    });
    roomLink0.addEventListener("mouseleave", () => {
        roomLink0.style.color = rootColors["--text"];
        roomLink0.style.backgroundColor = rootColors["--secondary"];
    });
    
    roomLink1.addEventListener("mouseenter", () => {
        roomLink1.style.color = rootColors["--primary"];
        roomLink1.style.backgroundColor = rootColors["--background"];
    });
    roomLink1.addEventListener("mouseleave", () => {
        roomLink1.style.color = rootColors["--text"];
        roomLink1.style.backgroundColor = rootColors["--secondary"];
    });
    
    roomLink2.addEventListener("mouseenter", () => {
        roomLink2.style.color = rootColors["--primary"];
        roomLink2.style.backgroundColor = rootColors["--background"];
    });
    roomLink2.addEventListener("mouseleave", () => {
        roomLink2.style.color = rootColors["--text"];
        roomLink2.style.backgroundColor = rootColors["--secondary"];
    });
    
    roomItem0.appendChild(roomLink0);
    roomItem1.appendChild(roomLink1);
    roomItem2.appendChild(roomLink2);

    const formItem0 = document.createElement("li");
    formItem0.className = "nav-item";
    const formLink0 = document.createElement("a");
    formLink0.className = "nav-link";
    formLink0.href = "#";
    formLink0.style.color = rootColors["--text"];

    formLink0.addEventListener("mouseenter", () => { formLink0.style.color = rootColors["--primary"]; });
    formLink0.addEventListener("mouseleave", () => { formLink0.style.color = rootColors["--text"]; });
    formLink0.addEventListener("click", () => {
        makeFormBook();
    });
    formLink0.innerText = "Réserver";
    formItem0.appendChild(formLink0);

    const formItem1 = document.createElement("li");
    formItem1.className = "nav-item";
    const formLink1 = document.createElement("a");
    formLink1.className = "nav-link";
    formLink1.href = "#";
    formLink1.style.color = rootColors["--text"];
    
    formLink1.addEventListener("mouseenter", () => { formLink1.style.color = rootColors["--primary"]; });
    formLink1.addEventListener("mouseleave", () => { formLink1.style.color = rootColors["--text"]; });
    formLink1.addEventListener("click", () => {
        makeFormContact();
    });
    formLink1.innerText = "Contact";
    formItem1.appendChild(formLink1);

    navList.append(formItem0, formItem1);
};


const makeHeader = () => {
    const header = document.getElementById("header-id");
    header.className = "py-5";
    header.innerHTML = '';
    header.style.background = "url('https://www.gites-de-france.com/sites/default/files/styles/facebook_1200x630/public/ispagnac-lozere.jpeg') bottom";
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundAttachment = "fixed";

    const headerDiv = document.createElement("div");
    headerDiv.className = "my-5 text-white text-center";
    header.appendChild(headerDiv);

    const h1Tag = document.createElement("h1");
    h1Tag.className = "display-2 py-3 my-5 fw-bold";
    h1Tag.style.textShadow = "1px 3px 0 #969696, 1px 13px 5px #aba8a8";
    h1Tag.style.color = rootColors["--accent"];
    h1Tag.innerText = "Le Gîte Hurle";

    headerDiv.appendChild(h1Tag);
};

function generateConnexion() {
    if (document.getElementById('co-div')) { document.getElementById('co-div').remove(); }
    const coDiv = document.createElement('div');
    coDiv.id = 'co-div';
    coDiv.classList.add('co-div', 'translate-middle', 'position-fixed', 'top-50', 'start-50', 'z-3');
    document.body.appendChild(coDiv);

    let form = document.createElement('form');
    form.className = 'form-signin p-3 rounded co-div';
    form.style.zIndex = 666;
    form.style.backgroundColor = rootColors["--secondary"];
    form.method = "POST";
    coDiv.appendChild(form);

    let h2 = document.createElement('h2');
    h2.className = "co-div h3 mb-3 fw-normal";
    h2.textContent = "Admin Panel";
    h2.style.color = rootColors["--primary"];
    form.appendChild(h2);

    let div = document.createElement('div');
    div.className = "form-floating co-div";
    form.appendChild(div);

    let input = document.createElement('input');
    input.type = "text";
    input.id = "floatingInput";
    input.placeholder = "Username";
    input.className = "co-div mb-2 form-control";
    div.appendChild(input);

    let label = document.createElement('label');
    label.setAttribute('for', "floatingInput");
    label.className = 'co-div';
    label.textContent = "Username";
    div.appendChild(label);

    div = document.createElement('div');
    div.className = "form-floating co-div mb-3";
    form.appendChild(div);

    input = document.createElement('input');
    input.type = "password";
    input.id = "floatingPassword";
    input.placeholder = "Password";
    input.className = "co-div form-control";
    input.setAttribute("autocomplete", "off");
    div.appendChild(input);

    label = document.createElement('label');
    label.setAttribute('for', 'floatingPassword');
    label.className = 'co-div';
    label.textContent = "Password";
    div.appendChild(label);

    let button = document.createElement('button');
    button.className = "co-div btn btn-primary w-100 py-2";
    button.type = "submit";
    button.style.backgroundColor = rootColors["--accent"];
    button.textContent = "Sign in";

    button.addEventListener('click', (event) => {
        event.preventDefault();
        adminCo();
    });
    form.appendChild(button);
}

function closeConnexion() {
    document.getElementById('co-div').remove();
    const blurTable = [];
    blurTable.push(document.getElementById('header-id'));
    blurTable.push(document.getElementById('nav-id'));
    blurTable.push(document.getElementById('main-id'));
    blurTable.push(document.getElementById('footer-id'));
    for (let i = 0; i < blurTable.length; i++) {
        blurTable[i].style.filter = 'blur(0px)';
    }
}

window.onclick = function (event) {
    try {
        if (!(event.target.classList.value.split(' ').includes('co-div'))) {
            closeConnexion();
        }
    } catch (error) {
        return null;
    }
};

function adminCo() {
    if (document.getElementById('floatingInput').value === adminLog.username && document.getElementById('floatingPassword').value === adminLog.password) {
        closeConnexion();
        gestionResaGeneration();
        generateStructureAdmin();
    }
    else {
        alert('Mauvais Utilisateur / Mot de Passe');
    }
}

const makeFooter = () => {
    const footer = document.getElementById("footer-id");
    footer.innerHTML = '';
    footer.className = "container";

    const footerDiv = document.createElement("div");
    footerDiv.className = "d-flex flex-wrap justify-content-between align-items-center py-3 my-2 border-top";
    footer.appendChild(footerDiv);

    const footerCopyrightDiv = document.createElement("div");
    footerCopyrightDiv.className = "col-md-4 d-flex align-items-center";
    footerDiv.appendChild(footerCopyrightDiv);

    const footerCopyright = document.createElement("span");
    footerCopyright.className = "text-body-secondary";
    footerCopyright.innerText = "© 2024 Le Gîte Hurle";
    footerCopyrightDiv.appendChild(footerCopyright);

    const footerLogoLink = document.createElement("a");
    footerLogoLink.className = "ms-3 co-div";
    footerLogoLink.addEventListener("mouseover", () => {
        footerLogoLink.style.cursor = "pointer";
    });
    footerLogoLink.addEventListener('click', () => {
        const blurTable = [];
        blurTable.push(document.getElementById('header-id'));
        blurTable.push(document.getElementById('nav-id'));
        blurTable.push(document.getElementById('main-id'));
        blurTable.push(document.getElementById('footer-id'));
        for (let i = 0; i < blurTable.length; i++) {
            blurTable[i].style.filter = 'blur(4px)';
        }
        generateConnexion();
    });
    footerCopyrightDiv.appendChild(footerLogoLink);

    const footerLogo = document.createElement("img");
    footerLogo.src = "assets/logo.svg";
    footerLogo.className = 'co-div';
    footerLogo.width = 40;
    footerLogo.height = 40;
    footerLogo.setAttribute("draggable", "false");
    footerLogo.alt = "logo";
    footerLogoLink.appendChild(footerLogo);

    const contactUl = document.createElement("ul");
    contactUl.className = "nav col-md-4 justify-content-end";
    footerDiv.appendChild(contactUl);

    const contactItem = document.createElement("li");
    contactItem.className = "nav-item";
    contactUl.appendChild(contactItem);

    const contactLink = document.createElement("a");
    contactLink.className = "nav-link";
    contactLink.id = "contact";
    contactLink.href = "#";

    contactLink.addEventListener("mouseenter", () => { contactLink.style.color = rootColors["--primary"]; });
    contactLink.addEventListener("mouseleave", () => { contactLink.style.color = rootColors["--text"]; });
    contactLink.addEventListener("click", () => {
        makeFormContact();
    });
    contactLink.style.color = rootColors["--text"];
    contactLink.innerText = "Contact";
    contactItem.appendChild(contactLink);
};


// Defines color for specific elements
function defineElementColors() {
    document.body.className = "d-flex flex-column mt-5 pt-2";
    document.body.style.backgroundColor = rootColors["--background"];

    const allATag = document.querySelector("a");
    allATag.style.color = rootColors["--text"]

    const contactLink = document.getElementById("contact");
    contactLink.style.color = rootColors["--text"];

    contactLink.addEventListener("mouseenter", () => { contactLink.style.color = rootColors["--primary"]; });
    contactLink.addEventListener("mouseleave", () => { contactLink.style.color = rootColors["--text"]; });
}


const generateStructure = () => {
    makeNav();
    makeHeader();
    generateClient_Accueil();
    makeFooter();

    defineElementColors();
};
generateStructure();
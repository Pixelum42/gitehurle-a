function makeNavAdmin() {
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
        generateStructure();
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

    const pAdmin = document.createElement("p");
    pAdmin.className = "ms-3 mt-3 navbar-brand active";
    pAdmin.setAttribute("aria-current", "page");
    // roomLink0.addEventListener("click", () => {
    // generateClient_Accueil();
    // });
    pAdmin.style.color = rootColors["--text"];
    pAdmin.innerText = "Admin";
    brandDiv.appendChild(pAdmin);

    const divNavbarItems = document.createElement("div");
    divNavbar.appendChild(divNavbarItems);

    const navList = document.createElement("ul");
    navList.className = "navbar-nav me-auto";
    divNavbarItems.appendChild(navList);

    const formResaItem = document.createElement("li");
    formResaItem.className = "nav-item";
    const formResaLink = document.createElement("a");
    formResaLink.className = "nav-link";
    formResaLink.href = "#";
    formResaLink.addEventListener('click', gestionResaGeneration);
    formResaLink.innerText = "Gestion des réservations";
    
    formResaLink.addEventListener("mouseenter", () => {
        formResaLink.style.color = rootColors["--primary"];
    });
    formResaLink.addEventListener("mouseleave", () => {
        formResaLink.style.color = rootColors["--text"];
    });
    formResaItem.appendChild(formResaLink);
    navList.appendChild(formResaItem);

    const editEspForm = document.createElement("li");
    editEspForm.className = "nav-item dropdown";
    navList.appendChild(editEspForm);

    const dropdownTitleLink = document.createElement("a");
    dropdownTitleLink.className = "nav-link dropdown-toggle";
    dropdownTitleLink.style.color = rootColors["--text"];
    dropdownTitleLink.setAttribute("data-bs-toggle", "dropdown");
    dropdownTitleLink.setAttribute("aria-expanded", "false");
    dropdownTitleLink.innerText = "Edition du contenu";
    dropdownTitleLink.addEventListener("mouseenter", () => {
        dropdownTitleLink.style.color = rootColors["--primary"];
    });
    dropdownTitleLink.addEventListener("mouseleave", () => {
        dropdownTitleLink.style.color = rootColors["--text"];
    });
    dropdownTitleLink.addEventListener('mouseover', () => {
        dropdownTitleLink.style.cursor = 'pointer';
    });
    editEspForm.appendChild(dropdownTitleLink);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.style.backgroundColor = rootColors["--secondary"];
    editEspForm.appendChild(dropdownMenu);

    const espacesItem = document.createElement("li");
    const formulesItem = document.createElement("li");
    dropdownMenu.append(espacesItem, formulesItem);

    const espLink = document.createElement("a");
    const formLink = document.createElement("a");
    espLink.className = "dropdown-item";
    formLink.className = "dropdown-item";
    espLink.href = "#";
    espLink.addEventListener('click', () => {
        generateMainAdminSpaceManagement(0, 0);
    });
    formLink.href = "#";

    espLink.style.color = rootColors["--text"];
    espLink.innerText = "Gestion des espaces";
    espLink.addEventListener("mouseenter", () => {
        espLink.style.color = rootColors["--primary"];
        espLink.style.backgroundColor = rootColors["--background"];
    });
    espLink.addEventListener("mouseleave", () => {
        espLink.style.color = rootColors["--text"];
        espLink.style.backgroundColor = rootColors["--secondary"];
    });

    formLink.style.color = rootColors["--text"];
    formLink.innerText = "Gestion des formules";
    formLink.addEventListener("mouseenter", () => {
        formLink.style.color = rootColors["--primary"];
        formLink.style.backgroundColor = rootColors["--background"];
    });
    formLink.addEventListener("mouseleave", () => {
        formLink.style.color = rootColors["--text"];
        formLink.style.backgroundColor = rootColors["--secondary"];
    });
    formLink.addEventListener('click',generateMainAdminFormulaManagement);

    espacesItem.appendChild(formLink);
    formulesItem.appendChild(espLink);



    const contactItem = document.createElement("li");
    contactItem.className = "nav-item";
    const contactLink1 = document.createElement("a");
    contactLink1.className = "nav-link";
    contactLink1.href = "#";
    contactLink1.innerText = "Contact";
    contactLink1.addEventListener("mouseenter", () => {
        contactLink1.style.color = rootColors["--primary"];
    });
    contactLink1.addEventListener("mouseleave", () => {
        contactLink1.style.color = rootColors["--text"];
    });
    contactLink1.addEventListener("click", () => {
        listMessage();
    });
    contactItem.appendChild(contactLink1);

    navList.appendChild(contactItem);
}


function makeHeaderAdmin() {
    const header = document.getElementById("header-id");
    header.innerHTML = '';
    header.className = "py-5";
    header.style.background = "url('https://www.gites-de-france.com/sites/default/files/styles/facebook_1200x630/public/ispagnac-lozere.jpeg') bottom";
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundAttachment = "fixed";

    const headerDiv = document.createElement("div");
    headerDiv.className = "my-5 text-center";
    header.appendChild(headerDiv);

    const h1Tag = document.createElement("h1");
    h1Tag.className = "display-2 py-3 my-5 fw-bold";
    h1Tag.style.textShadow = "1px 3px 0 #969696, 1px 13px 5px #aba8a8";
    h1Tag.style.color = rootColors["--accent"];
    h1Tag.innerHTML = "Le Gîte Hurle<br>Admin";

    headerDiv.appendChild(h1Tag);
}


function makeFooterAdmin() {
    const footer = document.getElementById("footer-id");
    footer.innerHTML = '';
    footer.className = "container";

    const footerDiv = document.createElement("div");
    footerDiv.className = "d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top";
    footer.appendChild(footerDiv);

    const footerCopyrightDiv = document.createElement("div");
    footerCopyrightDiv.className = "col-md-4 d-flex align-items-center";
    footerDiv.appendChild(footerCopyrightDiv);

    const footerCopyright = document.createElement("span");
    footerCopyright.className = "text-body-secondary";
    footerCopyright.innerText = "© 2024 Le Gîte Hurle";
    footerCopyrightDiv.appendChild(footerCopyright);

    const footerLogoLink = document.createElement("a");
    footerLogoLink.className = "ms-3";
    footerLogoLink.href = "#";
    footerLogoLink.addEventListener("mouseover", () => {
        footerLogoLink.style.cursor = "pointer";
    });
    footerLogoLink.addEventListener('click', generateStructure);
    footerCopyrightDiv.appendChild(footerLogoLink);

    const footerLogo = document.createElement("img");
    footerLogo.src = "assets/logo.svg";
    footerLogo.width = 40;
    footerLogo.height = 40;
    footerLogo.setAttribute("draggable", "false");
    footerLogo.alt = "logo";
    footerLogoLink.appendChild(footerLogo);

    const footerAdminText = document.createElement("span");
    footerAdminText.className = "ms-3 text-body-secondary";
    footerAdminText.innerText = "Admin";
    footerCopyrightDiv.appendChild(footerAdminText);
}

function generateStructureAdmin() {
    makeNavAdmin();
    makeHeaderAdmin();
    makeFooterAdmin();
}
const makeNav = () => {
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand navbar-light fixed-top";
    navbar.style.backgroundColor = rootColors["--A-secondary"];
    document.body.appendChild(navbar);

    const divNavbar = document.createElement("div");
    divNavbar.className = "container-fluid d-flex justify-content-evenly";
    navbar.appendChild(divNavbar);

    const brand = document.createElement("a");
    brand.className = "navbar-brand active";
    brand.setAttribute("aria-current", "page");
    brand.href = "#"
    brand.style.color = rootColors["--A-text"];
    brand.innerText = "Le Gîte Hurle";
    divNavbar.appendChild(brand);

    const logo = document.createElement("img");
    logo.className = "ms-2";
    logo.src = "assets/logo.svg";
    logo.width = 40;
    logo.height = 40;
    logo.alt = "Logo de Le Gîte Hurle";
    brand.appendChild(logo);

    const divNavbarItems = document.createElement("div");
    divNavbar.appendChild(divNavbarItems);

    const navList = document.createElement("ul");
    navList.className = "navbar-nav me-auto";
    divNavbarItems.appendChild(navList);

    const dropdownTitle = document.createElement("li");
    dropdownTitle.className = "nav-item dropdown";
    navList.appendChild(dropdownTitle)

    const dropdownTitleLink = document.createElement("a");
    dropdownTitleLink.className = "nav-link dropdown-toggle";
    dropdownTitleLink.style.color = rootColors["--A-text"];
    dropdownTitleLink.href = "#";
    dropdownTitleLink.setAttribute("data-bs-toggle", "dropdown");
    dropdownTitleLink.setAttribute("aria-expanded", "false");
    dropdownTitleLink.innerText = "Chambres";
    dropdownTitle.appendChild(dropdownTitleLink);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.style.backgroundColor = rootColors["--A-secondary"];
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
    roomLink0.href = "#";
    roomLink1.href = "#";
    roomLink2.href = "#";
    roomLink0.style.color = rootColors["--A-text"];
    roomLink1.style.color = rootColors["--A-text"];
    roomLink2.style.color = rootColors["--A-text"];
    roomLink0.innerText = "Chambre double";
    roomLink1.innerText = "Chambre familiale";
    roomLink2.innerText = "Appartement";
    roomItem0.appendChild(roomLink0);
    roomItem1.appendChild(roomLink1);
    roomItem2.appendChild(roomLink2);

    const formItem0 = document.createElement("li");
    formItem0.className = "nav-item";
    const formLink0 = document.createElement("a");
    formLink0.className = "nav-link";
    formLink0.href = "#";
    formLink0.innerText = "Réserver";
    formItem0.appendChild(formLink0);
    
    const formItem1 = document.createElement("li");
    formItem1.className = "nav-item";
    const formLink1 = document.createElement("a");
    formLink1.className = "nav-link";
    formLink1.href = "#";
    formLink1.innerText = "Contact";
    formItem1.appendChild(formLink1);

    navList.append(formItem0, formItem1);
}


const makeHeader = () => {
    const header = document.createElement("header");
    header.className = "py-5";
    header.style.background = "url('https://www.gites-de-france.com/sites/default/files/styles/facebook_1200x630/public/ispagnac-lozere.jpeg') bottom";
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundAttachment = "fixed";
    document.body.appendChild(header);

    const headerDiv = document.createElement("div");
    headerDiv.className = "my-5 text-white text-center";
    header.appendChild(headerDiv);

    const h1Tag = document.createElement("h1");
    h1Tag.className = "display-2 py-3 my-5 fw-bold";
    h1Tag.style.textShadow = "1px 3px 0 #969696, 1px 13px 5px #aba8a8";
    h1Tag.style.color = "var(--A-accent)"
    h1Tag.innerText = "Le Gîte Hurle";

    headerDiv.appendChild(h1Tag);
}


const makeFooter = () => {
    const footer = document.createElement("footer");
    footer.className = "container";
    document.body.appendChild(footer);

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
    footerCopyrightDiv.appendChild(footerLogoLink);

    const footerLogo = document.createElement("img");
    footerLogo.src = "assets/logo.svg";
    footerLogo.width = 40;
    footerLogo.height = 40;
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
    contactLink.innerText = "Contact";
    contactItem.appendChild(contactLink);
}



const generateStructure = () => {
    document.body.className = "d-flex flex-column mt-5 pt-3";
    document.body.style.backgroundColor = rootColors["--A-background"];

    makeNav();
    makeHeader();
    // Add page function here
    makeFooter();

    // Defines color for specific elements
    const allATag = document.querySelector("a");
    allATag.style.color = rootColors["--A-text"];
    const contactLink = document.getElementById("contact");
    contactLink.style.color = rootColors["--A-text"];
}
generateStructure();
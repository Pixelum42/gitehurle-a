

    function makeNavAdmin() {
        const navbar = document.getElementById("nav-id");
        navbar.innerHTML='';
        navbar.className = "navbar navbar-expand navbar-light fixed-top";
        navbar.style.backgroundColor = rootColors["--A-secondary"];
    
        const divNavbar = document.createElement("div");
        divNavbar.className = "container-fluid d-flex justify-content-evenly";
        navbar.appendChild(divNavbar);
    
        const brandDiv = document.createElement("div");
        brandDiv.className = "d-flex align-items-center"
        divNavbar.appendChild(brandDiv);
    
        const brand = document.createElement("a");
        brand.className = "navbar-brand active";
        brand.setAttribute("aria-current", "page");
        brand.href = "#"
        // roomLink0.addEventListener("click", () => {
        // generateClient_Accueil();
        // });
        brand.style.color = rootColors["--A-text"];
        brand.innerText = "Le Gîte Hurle";
        brandDiv.appendChild(brand);
    
        const logo = document.createElement("img");
        logo.className = "ms-2";
        logo.src = "assets/logo.svg";
        logo.width = 40;
        logo.height = 40;
        logo.alt = "Logo de Le Gîte Hurle";
        brandDiv.appendChild(logo);

        const pAdmin = document.createElement("p");
        pAdmin.className = "ms-3 mt-3 navbar-brand active";
        pAdmin.setAttribute("aria-current", "page");
        // roomLink0.addEventListener("click", () => {
        // generateClient_Accueil();
        // });
        pAdmin.style.color = rootColors["--A-text"];
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
        // formLink0.addEventListener("click", () => {
        //     gestionDesResa();
        // });
        formResaLink.innerText = "Gestion des réservations";
        formResaItem.appendChild(formResaLink);
        navList.appendChild(formResaItem);
    
        const editEspForm = document.createElement("li");
        editEspForm.className = "nav-item dropdown";
        navList.appendChild(editEspForm);
    
        const dropdownTitleLink = document.createElement("a");
        dropdownTitleLink.className = "nav-link dropdown-toggle";
        dropdownTitleLink.style.color = rootColors["--A-text"];
        dropdownTitleLink.setAttribute("data-bs-toggle", "dropdown");
        dropdownTitleLink.setAttribute("aria-expanded", "false");
        dropdownTitleLink.innerText = "Edition du contenu";
        dropdownTitleLink.addEventListener('mouseover', () => {
            dropdownTitleLink.style.cursor = 'pointer';
        });
        editEspForm.appendChild(dropdownTitleLink);
    
        const dropdownMenu = document.createElement("ul");
        dropdownMenu.className = "dropdown-menu";
        dropdownMenu.style.backgroundColor = rootColors["--A-secondary"];
        editEspForm.appendChild(dropdownMenu);
    
        const espacesItem = document.createElement("li");
        const formulesItem = document.createElement("li");
        dropdownMenu.append(espacesItem, formulesItem);
        
        const espLink = document.createElement("a");
        const formLink = document.createElement("a");
        espLink.className = "dropdown-item";
        formLink.className = "dropdown-item";
        espLink.href = "#";
        // roomLink0.addEventListener("click", () => {
        //     gestionDesEspaces();
        // });
        formLink.href = "#";
        // roomLink1.addEventListener("click", () => {
        //     gestionDesFormules();
        // });
        espLink.style.color = rootColors["--A-text"];
        formLink.style.color = rootColors["--A-text"];
        espLink.innerText = "Gestion des espaces";
        formLink.innerText = "Gestion des formules";

        espacesItem.appendChild(formLink);
        formulesItem.appendChild(espLink);
    
        
        
        const contactItem = document.createElement("li");
        contactItem.className = "nav-item";
        const contactLink1 = document.createElement("a");
        contactLink1.className = "nav-link";
        contactLink1.href = "#";
        // formLink1.addEventListener("click", () => {
        //     makeFormContact();
        // });
        contactLink1.innerText = "Contact";
        contactItem.appendChild(contactLink1);
    
        navList.appendChild(contactItem);
    }
    
    
    function makeHeaderAdmin() {
        const header = document.getElementById("header-id");
        header.innerHTML='';
        header.className = "py-5";
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
        h1Tag.style.color = rootColors["--A-accent"];
        h1Tag.innerHTML = "Le Gîte Hurle<br>Admin";
    
        headerDiv.appendChild(h1Tag);
    }
    
    
    function makeFooterAdmin() {
        const footer = document.getElementById("footer-id");
        footer.innerHTML='';
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
        footerLogoLink.addEventListener('click',generateStructure);
        footerCopyrightDiv.appendChild(footerLogoLink);
    
        const footerLogo = document.createElement("img");
        footerLogo.src = "assets/logo.svg";
        footerLogo.width = 40;
        footerLogo.height = 40;
        footerLogo.alt = "logo";
        footerLogoLink.appendChild(footerLogo);

        const footerAdminText = document.createElement("span");
        footerAdminText.className = "ms-3 text-body-secondary";
        footerAdminText.innerText = "  Admin";
        footerCopyrightDiv.appendChild(footerAdminText);
    }
    
    
    function defineElementColors() {
        // Defines color for specific elements
        const allATag = document.querySelector("a");
        allATag.style.color = rootColors["--A-text"];
        
        // allATag.addEventListener("mouseenter", )
        // allATag.addEventListener("mouseleave")
        // allATag.style.backgroundColor = rootColors["--A-background"];
    
        document.body.className = "d-flex flex-column mt-5 pt-2";
        document.body.style.backgroundColor = rootColors["--A-background"];
        
        const contactLink = document.getElementById("contact");
        contactLink.style.color = rootColors["--A-text"];
    }
    
    
function generateStructureAdmin() {
        makeNavAdmin();
        makeHeaderAdmin();
        makeFooterAdmin();
    
        defineElementColors();
    }
    

const adminLog = {
    "username" : "admin",
    "password" : "admin"
  }

const makeNav = () => {
    const navbar = document.getElementById("nav-id");
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
    dropdownTitleLink.setAttribute("data-bs-toggle", "dropdown");
    dropdownTitleLink.setAttribute("aria-expanded", "false");
    dropdownTitleLink.innerText = "Chambres";
    dropdownTitleLink.addEventListener('mouseover', () => {
        dropdownTitleLink.style.cursor = 'pointer';
    });
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
    // roomLink0.addEventListener("click", () => {
    //     displayRoomDetails(rooms[0]);
    // });
    roomLink1.href = "#";
    // roomLink1.addEventListener("click", () => {
    //     displayRoomDetails(rooms[1]);
    // });
    roomLink2.href = "#";
    // roomLink2.addEventListener("click", () => {
    //     displayRoomDetails(rooms[2]);
    // });
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
    // formLink0.addEventListener("click", () => {
    //     makeFormBook();
    // });
    formLink0.innerText = "Réserver";
    formItem0.appendChild(formLink0);
    
    const formItem1 = document.createElement("li");
    formItem1.className = "nav-item";
    const formLink1 = document.createElement("a");
    formLink1.className = "nav-link";
    formLink1.href = "#";
    // formLink1.addEventListener("click", () => {
    //     makeFormContact();
    // });
    formLink1.innerText = "Contact";
    formItem1.appendChild(formLink1);

    navList.append(formItem0, formItem1);
}


const makeHeader = () => {
    const header = document.getElementById("header-id");
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
    h1Tag.innerText = "Le Gîte Hurle";

    headerDiv.appendChild(h1Tag);
}

function generateConnexion() {
    if(document.getElementById('co-div')){document.getElementById('co-div').remove();}
    const coDiv = document.createElement('div');
    coDiv.id='co-div';
    coDiv.classList.add( 'co-div','translate-middle','position-fixed', 'top-50', 'start-50','z-3');
    document.body.appendChild(coDiv);
   
    let form = document.createElement('form');
    form.className = 'form-signin  p-3 rounded co-div';
    form.setAttribute('style','z-index:666;background-color : black');
    coDiv.appendChild(form);
    
    let h1 = document.createElement('h1');
    h1.className = "co-div h3 mb-3 fw-normal";
    h1.textContent = "Admin Panel";
    form.appendChild(h1);
    
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
    label.setAttribute('for',"floatingInput");
    label.className = 'co-div';
    label.textContent = "Username";
    div.appendChild(label);
    
    div = document.createElement('div');
    div.className = "form-floating co-div";
    form.appendChild(div);
    
    input = document.createElement('input');
    input.type = "password";
    input.id = "floatingPassword";
    input.placeholder = "Password";
    input.className = "co-div form-control";
    div.appendChild(input);
    
    label = document.createElement('label');
    label.setAttribute('for', 'floatingPassword');
    label.className = 'co-div';
    label.textContent = "Password";
    div.appendChild(label);
    
    div = document.createElement('div');
    div.className = "form-check text-start my-3 co-div";
    form.appendChild(div);
    
    input = document.createElement('input');
    input.type = "checkbox";
    input.id = "flexCheckDefault";
    input.value = "remember-me";
    input.className = "co-div form-check-input";
    div.appendChild(input);
    
    label = document.createElement('label');
    label.className = "co-div form-check-label";
    label.setAttribute('for', 'flexCheckDefault')
    label.textContent = "Remember me";
    div.appendChild(label);
    
    let button = document.createElement('button');
    button.className = "co-div btn btn-primary w-100 py-2";
    button.type = "submit";
    button.textContent = "Sign in";
    button.addEventListener('click',adminCo);
    form.appendChild(button); 
  }
  
  function closeConnexion() {
    document.getElementById('co-div').remove();
    const blurTable=[];
    blurTable.push(document.getElementById('header-id'));
    blurTable.push(document.getElementById('nav-id'));
    blurTable.push(document.getElementById('main-id'));
    blurTable.push(document.getElementById('footer-id'));
    for (let i = 0; i < blurTable.length; i++) {
    blurTable[i].style.filter= 'blur(0px)';          
    }
  }
  
  window.onclick = function(event) {
    try {
      if(!(event.target.classList.value.split(' ').includes('co-div'))){
        closeConnexion();
      }    
    } catch (error) {
      return null;
    }
  }
  
  function adminCo(){
    if(document.getElementById('floatingInput').value===adminLog.username && document.getElementById('floatingPassword').value===adminLog.password){
      closeConnexion();
      //generateAdminNav();
      //generateAdminResa();
      gestionResaGeneration();
    }
    else{
      alert('Mauvais Utilisateur / Mot de Passe');      
    }
  }

const makeFooter = () => {
    const footer = document.getElementById("footer-id");
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
    footerLogoLink.className = "ms-3 co-div";
    footerLogoLink.href = "#";
    
    footerLogoLink.addEventListener('click',()=>{
        const blurTable=[];
        blurTable.push(document.getElementById('header-id'));
        blurTable.push(document.getElementById('nav-id'));
        blurTable.push(document.getElementById('main-id'));
        blurTable.push(document.getElementById('footer-id'));
        for (let i = 0; i < blurTable.length; i++) {
        blurTable[i].style.filter= 'blur(4px)';          
        }  
        generateConnexion();
      });
    // formLink1.addEventListener("click", () => {
    //     adminPage();
    // });
    footerCopyrightDiv.appendChild(footerLogoLink);

    const footerLogo = document.createElement("img");
    footerLogo.src = "assets/logo.svg";
    footerLogo.className='co-div';
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


const generateStructure = () => {
    makeNav();
    makeHeader();
    makeFooter();

    defineElementColors();
}
generateStructure();
function generateMainAdminFormulaManagement() {// arg take spaceName[i];
    const main = document.getElementById("main-id");
    main.innerHTML = '';


    for (let i = 0; i < FormulaRepertory.length; i++) {
        const formulaBS0 = document.createElement('div');
        formulaBS0.className = "container-fluid ";
        main.appendChild(formulaBS0);
        const formulaBS1 = document.createElement('div');
        formulaBS1.className = "row m-2";
        formulaBS0.appendChild(formulaBS1);
        const formulaBS2 = document.createElement('div');
        formulaBS2.className = "col-6";
        const formulaBS3 = document.createElement('div');
        formulaBS3.className = "col-6";

        const formulaContainer = document.createElement('div');
        formulaContainer.className = "d-flex flex-column input-group";
        formulaBS2.appendChild(formulaContainer)

        const formulaTitle = document.createElement('span');
        formulaTitle.className = "input-group-text col-12";
        formulaTitle.textContent = `Formule ${i + 1}`;

        formulaBS1.append(formulaTitle, formulaBS2, formulaBS3);
        const formulaContent = document.createElement('div');
        formulaContent.className = "input-group";

        formulaContainer.appendChild(formulaContent);

        const innerDiv0 = document.createElement('div');
        innerDiv0.className = "input-group";
        formulaContent.appendChild(innerDiv0);
        const innerDiv1 = document.createElement('span');
        innerDiv1.className = "input-group-text";
        innerDiv1.id = "inputGroup-sizing-default";
        innerDiv1.textContent = "Name";
        const innerDiv2 = document.createElement('input');
        innerDiv2.className = "form-control";
        innerDiv2.type = "text";
        innerDiv2.setAttribute("aria-label", "Sizing example input");
        innerDiv2.setAttribute("aria-describedby", "inputGroup-sizing-default");
        innerDiv2.value = FormulaRepertory[i].name;
        innerDiv0.append(innerDiv1, innerDiv2);



        const innerDiv6 = document.createElement('div');
        innerDiv6.className = "input-group";
        formulaContent.appendChild(innerDiv6);
        const innerDiv7 = document.createElement('span');
        innerDiv7.className = "input-group-text";
        innerDiv7.id = "inputGroup-sizing-default";
        innerDiv7.textContent = "Tarif";
        const innerDiv8 = document.createElement('input');
        innerDiv8.className = "form-control";
        innerDiv8.type = "text";
        innerDiv8.setAttribute("aria-label", "Sizing example input");
        innerDiv8.setAttribute("aria-describedby", "inputGroup-sizing-default");
        innerDiv8.value = FormulaRepertory[i].tarifModifier;
        innerDiv6.append(innerDiv7, innerDiv8);

        const innerDiv9 = document.createElement('div');
        innerDiv9.className = "input-group";
        formulaContent.appendChild(innerDiv9);
        const innerDiv10 = document.createElement('span');
        innerDiv10.className = "input-group-text";
        innerDiv10.id = "inputGroup-sizing-default";
        innerDiv10.textContent = "Séjour minimal (Jour)";
        const innerDiv11 = document.createElement('input');
        innerDiv11.className = "form-control";
        innerDiv11.type = "text";
        innerDiv11.setAttribute("aria-label", "Sizing example input");
        innerDiv11.setAttribute("aria-describedby", "inputGroup-sizing-default");
        innerDiv11.value = FormulaRepertory[i].minimalDayResa;
        innerDiv9.append(innerDiv10, innerDiv11);

        const innerDiv12 = document.createElement('div');
        innerDiv12.className = "input-group";
        formulaContent.appendChild(innerDiv12);
        const innerDiv13 = document.createElement('span');
        innerDiv13.className = "input-group-text";
        innerDiv13.id = "inputGroup-sizing-default";
        innerDiv13.textContent = "Séjour minimal (Mois)";
        const innerDiv14 = document.createElement('input');
        innerDiv14.className = "form-control";
        innerDiv14.type = "text";
        innerDiv14.setAttribute("aria-label", "Sizing example input");
        innerDiv14.setAttribute("aria-describedby", "inputGroup-sizing-default");
        innerDiv14.value = FormulaRepertory[i].minimalMonthResa;
        innerDiv12.append(innerDiv13, innerDiv14);



        const innerDiv3 = document.createElement('div');
        innerDiv3.className = "input-group d-flex flex-column ";
        formulaBS3.appendChild(innerDiv3);
        const innerDiv4 = document.createElement('span');
        innerDiv4.className = "input-group-text";
        innerDiv4.textContent = "Description";
        const innerDiv5 = document.createElement('textarea');
        innerDiv5.className = "form-control mb-2 h-100 w-100";
        innerDiv5.textContent = FormulaRepertory[i].description;
        innerDiv5.setAttribute("aria-label", "With textarea");
        innerDiv3.append(innerDiv4, innerDiv5);

        const innerDiv18 = document.createElement('div');
        innerDiv18.className = 'd-flex flex-row';
        formulaBS3.appendChild(innerDiv18);

        const innerDiv16=[];
        for (let j = 0; j < rooms.length; j++) {

            const innerDiv15 = document.createElement('div');
            innerDiv15.className = "form-check";
            innerDiv18.appendChild(innerDiv15);
            innerDiv16.push(document.createElement('input'));
            innerDiv16[j].className = "form-check-input";
            innerDiv16[j].type = "checkbox";
            innerDiv16[j].id = `check${toString(j)+i}`;
            innerDiv16[j].checked = (FormulaRepertory[i].spaceAvailibility[j]) ? true : false;
            const innerDiv17 = document.createElement('label');
            innerDiv17.className = "form-check-label me-3";
            innerDiv17.textContent = rooms[j].name;
            innerDiv17.setAttribute("for", `check${j}`);
            innerDiv15.append(innerDiv16[j], innerDiv17);

        }


        const innerDivSaveBtn = document.createElement('button');
        innerDivSaveBtn.className = "btn btn-outline-secondary text-right";
        innerDivSaveBtn.type = "button";
        innerDivSaveBtn.id = `Savebutton${i}`;
        innerDivSaveBtn.addEventListener('click', () => {
            FormulaRepertory[i].name = innerDiv2.value;
            FormulaRepertory[i].description = innerDiv5.textContent;
            FormulaRepertory[i].tarifModifier = innerDiv8.value;
            FormulaRepertory[i].minimalDayResa = innerDiv11.value;
            FormulaRepertory[i].minimalMonthResa = innerDiv14.value;
            for (let k = 0; k < rooms.length; k++) {
                FormulaRepertory[i].spaceAvailibility[k] = ((innerDiv16[k].checked) ? 1 : 0);
            }
            console.log(innerDiv5.value);
        })
        innerDivSaveBtn.textContent = "Sauvegarder";

        innerDiv18.appendChild(innerDivSaveBtn);

        const innerDivBin = document.createElement('button');
        innerDivBin.className = "btn btn-outline-secondary";
        innerDivBin.type = "button";
        innerDivBin.id = `Deletebutton${i}`;
        innerDivBin.addEventListener('click', () => {
            FormulaRepertory.splice(i, 1);
            generateMainAdminFormulaManagement();
        });
        const binIcon = document.createElement('i');
        binIcon.className = "bi bi-trash";
        innerDivBin.appendChild(binIcon);
        innerDiv18.appendChild(innerDivBin);

    }



    const innerDivAddDiv = document.createElement('div');
    innerDivAddDiv.className = 'row m-2';
    main.appendChild(innerDivAddDiv);
    const innerDivAddDiv2 = document.createElement('div');
    innerDivAddDiv2.className = "d-flex flex-column";
    innerDivAddDiv.appendChild(innerDivAddDiv2);

    const innerDivAddBtn = document.createElement('button');
    innerDivAddBtn.className = "btn btn-outline-secondary position-relative end-0";
    innerDivAddBtn.type = "button";
    innerDivAddBtn.addEventListener('click', () => {
        FormulaRepertory.push(
            {
                "name": "Nom de la formule",
                "spaceAvailibility": [0],
                "description": "Description",
                "tarifModifier": "formule à appliquer(ex : *1)",
                "minimalDayResa": "Nombre de jour minimal de réservation (ex : 2)",
                "minimalMonthResa": "Nombre de mois minimal de réservation (ex : 0)"
            }
        );
        generateMainAdminFormulaManagement();
    });
    const addIcon = document.createElement('i');
    addIcon.className = "bi bi-plus-square";
    innerDivAddBtn.appendChild(addIcon);
    innerDivAddDiv2.appendChild(innerDivAddBtn);
}
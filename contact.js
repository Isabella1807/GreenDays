const employeeContainer = document.getElementById("contactImgContainer");

const employeeList = [
    {
        img: "img/loge_mand1.jpg",
        titel: "Formand",
        navn: "Claus Stougaard",
        mail: "c_stougaard@hotmail.com",
        number: "+45 93 92 12 66"
    },
    {
        img: "img/loge_mand1.jpg",
        titel: "Kasserer",
        navn: "Jørgen Nielsen",
        mail: "j.n.indramning@stofanet.dk",
        number: "+45 22 48 47 57"
    },
    {
        img: "img/loge_dame1.jpg",
        titel: "Næstformand",
        navn: "Edith Kjengaard",
        mail: "e.kjengaard@gmail.com",
        number: "+45 20 85 14 90"
    },
    {
        img: "img/loge_dame1.jpg",
        titel: "Sekretær",
        navn: "Kirsten Jørgensen",
        mail: "bedstekorup@hotmail.com",
        number: "+45 27 37 40 40"
    },
];

const addEmployeeToDOM = (image_url, title, name, mail, number) => {
    employeeContainer.innerHTML += `
    <div class="imgContainerItems">
        <img src="${image_url}" alt="Billede af medarbejder ${name}">
        
        <div class="imgContainerText">
            <p>${title}</p>
            <p>${name}</p>
            <p>${mail}</p>
            <p>${number}</p>
        </div>
    </div>
    `;
}

for (let i = 0; i < employeeList.length; i++){
    const employee = employeeList[i];
    addEmployeeToDOM(employee.img, employee.titel, employee.navn, employee.mail, employee.number);
}
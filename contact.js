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
];

const addEmployeeToDOM = (name, title, image_url, mail, number) => {
    employeeContainer.innerHTML += `
    <div class="imgContainerItems">
        <img src="${image_url}" alt="Billede af medarbejder ${name}">
        <div class="imgContainerText">
            <p>${name}</p>
            <p>${title}</p>
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
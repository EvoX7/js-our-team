// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg




//! Company Employees List 

const companyEmployeesList = [{
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: './img/wayne-barnett-founder-ceo.jpg',

}, {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: './img/angela-caroll-chief-editor.jpg',

}, {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: './img/walter-gordon-office-manager.jpg',

}, {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: './img/angela-lopez-social-media-manager.jpg',

}, {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: './img/scott-estrada-developer.jpg',

}, {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: './img/barbara-ramos-graphic-designer.jpg',
}];

// * Defining DOM output 

const outputList = document.getElementById('list-output');

// ? Cycling through the list of employees and show info on the consle 
for (let i = 0; i < companyEmployeesList.length; i++) {
    const listVisual = companyEmployeesList[i];
    console.log(`    ${listVisual.name} 
    ${listVisual.role} 
    ${listVisual.photo}`);

    const ListItem = document.createElement('div');
    ListItem.innerHTML = `<div class="card m-3 " style="width: 18rem;">
      <img src="${listVisual['photo']}" class="card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title fw-bold">Employee Card</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${listVisual.name}</li>
        <li class="list-group-item fw-bold">${listVisual.role}</li>
      </ul>
    </div>
`;
    outputList.append(ListItem);
}




// * Milestone 2 output
// outputList.innerHTML += `<p>${listVisual.name} <br> ${listVisual.role} <br> ${listVisual.photo}</p>`;



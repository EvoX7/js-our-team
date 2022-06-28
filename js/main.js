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
    photo: 'wayne-barnett-founder-ceo.jpg',

}, {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg',

}, {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg',

}, {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg',

}, {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg',

}, {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg',
}];

const outputList = document.getElementById('list-output');

// ? Cycling through the list of employees and show info on the consle 

for (let i = 0; i < companyEmployeesList.length; i++) {

    const listVisual = companyEmployeesList[i];
    console.log(`    ${listVisual.name} 
    ${listVisual.role} 
    ${listVisual.photo}`);
    outputList.innerHTML += `<p>${listVisual.name} <br> ${listVisual.role} <br> ${listVisual.photo}</p>`;
    
}




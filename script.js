

const message = "Thank you for submitting your message to the Argo ship. Jason and his crew will respond shortly.";

const forma = document.querySelector('#contactos');

console.log(forma);

forma.addEventListener('submit', (event) => {
    
    event.preventDefault();
    alert(message);



});

//copia

let team = "the argonauts"
let membersCount = 50;
console.log(membersCount);

let boat = "The Argo";
// As the captain is not Jason anymore you have to change the value of the variable "captain".
let captain = "Natis"; // Feel free to add your name
let welcome_message = "Welcome on board " + captain + "!";
console.log(welcome_message);
let team_message =  "All the " +  membersCount +  " members of the crew are proud to see you on " +  boat;
console.log(team_message);

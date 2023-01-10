//Fonction pour tirer aléatoirement un chiffre

// function random(min, max) {
//     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }
// récupération des boutons 

let styleMenu = document.querySelectorAll('.button');
console.log(styleMenu)

styleMenu.addEventListener('click',test);

function test() {
    console.log('test')
}
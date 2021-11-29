// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce 
// un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) 
// per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri 
// è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e 
//     somma pari o dispari)
// In un secondo momento creiamo delle funzioni 
// per i numeri random e per il check pari dispari


//SENZA FUNZIONE

// let choice = prompt ("pari o dispari?");
// console.log(choice);

// let user_number =  parseInt(prompt("scegli un numero da 1 a 5"));

// console.log(user_number);

// let pc_number = Math.floor(Math.random() * 6);

// console.log(pc_number);

// totale = user_number + pc_number;
// console.log(totale);

// if (choice == "pari" && totale % 2 == 0) {
//     console.log("hai vinto");
// } else if (choice == "dispari" && totale % 2 == 1){
//     console.log("hai vinto");
// } else {
//     console.log ("hai perso");
// }


//CON FUNZIONE

let choice = prompt ("pari o dispari?");

let user_number =  parseInt(prompt("scegli un numero da 1 a 5"));

console.log(user_number);

function rand() {
    let num_rand =  Math.floor(Math.random() * 6);
    return num_rand;
}

let pc_number = rand();
console.log(pc_number);

let totale = user_number + pc_number;
console.log(totale);


//CHECK PARI O DISPARI
function ped(totale) {
    if (totale % 2 == 0){
        return ("pari");
    } else if (totale % 2 == 1) {
        return ("dispari"); 
    }
}

let check = ped(totale);
console.log(check);

//CONDIZIONE PER IL RISULTATO
if (check == choice) {
    console.log("hai vinto");
} else if (check != choice) {
    console.log ("hai perso");
}

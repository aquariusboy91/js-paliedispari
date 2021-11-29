
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione
//  per capire se la parola inserita è palindroma

//SENZA FUNZIONE

// let parola = prompt("inserisci una parola");

// user_word_split = parola.split("");

// user_word_reverse = user_word_split.reverse("");

// user_word_join = user_word_reverse.join(""); 


// if (parola == user_word_join)  {
//     console.log ("è palindroma");

// } else {
//     console.log ("non è palindroma");
// }


// CON FUNZIONE

let parola = prompt("inserisci una parola");

function palindroma(){
    let user_word_split = parola.split("");
    let user_word_reverse = user_word_split.reverse("");
    let user_word_join = user_word_reverse.join("");    
    return user_word_join;
}


let parola_finale = palindroma();

if (parola == parola_finale)  {
    console.log ("è palindroma");
} else {
    console.log ("non è palindroma");
}

/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }

    return message;
}
const result = checkAge();
// console.log(result);

// Questa funzione dovrebbe stampare
    // "Sei troppo giovane! Hai ${myAge} anni!" se l'età < 18
// Altrimenti
    // "Hai più di 18 anni!"

// La variabile message è const e non può cambiare il suo valore (fa parte degli errori sintattici giusto?)
// Bisognerebbe ritornare message e assegnare tutto ad una variabile che invochi la 
// funzione così con il console.log vedremo la frase contenuta in message

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// Stampa il numero di colori che ci sono nell'array 
// C'è un errore sintattico, lenght invece di length
// Non ci sono errori logici

// ESERCIZIO 3
// function addNumbers() {
//     // const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// Questa funzione dovrebbe sommare ad un numero in input 12 e stampare il risultato
// Non ci sono errori sintattici
// Il numero preso in input è una stringa e non viene convertito in numero durante l'operazione
// quindi avviene la concatenazione


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// Questa funzione dovrebbe verificare se l'email inserita dall'utente è presente nell'array e consentire o meno
// l'accesso tramite delle condizioni
// Non ci sono errori sintattici
// C'è un errore logico, grantAccess viene inizializzata come stringa e poi nell'if viene controllato se il suo valore 
// è booleano, la strada più conveniente sarebbe usare il tipo booleano


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

        
    }
    
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();


// Questa è una versione della funzione di prima con qualche controllo in più
// ERRORI SINTATTICI:
    // - manca la chiusura della funzione }
    // - grantAccess è una stringa e quindi la condizione non sarà mai 
    // - la stampa in console attraverso il controllo va fatto fuori dal for






























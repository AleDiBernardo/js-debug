/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 10; i > 5; i--) {
//     console.log(i);
// }
// Questo codice stampa in console il valore della i ad ogni iterazione finchè la ì > 5
// Non sono presenti errori di sintassi
// Si, siccome la i è inizializzata a 0 non entrerà mai nel ciclo

// SOLUZIONE: si potrebbe inizializzare la i maggiore di 5 e decrementarla ogni ciclo


// ESERCIZIO 2

//-------------------------//
// PROVA
// let num = 3;
// const result = addIfEven(num);
// console.log(result);
//-------------------------//

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// Questa funzione prende in ingresso un numero e se è pari restituisce il num + 5 altrimenti restituisce num
// C'è un errore sintattico, nella condizione c'è un'inizializzazione e non un confronto
// Errori logic non ce ne sono 

// SOLUZIONE: possiamo sia mettere === oppure rimuovere proprio l'ultima parte della condizione e lasciare num % 2

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// Questa funzione dovrebbe stampare in console il valore di i 5 volte
// Ci sono errori sintattici, bisogna mettere il ";" al posto delle ","
// Non sembrerebbero esserci errrori logici

// SOLUZIONE: sostituire le , con ;


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        // console.log("ITERAZIONE:"+i);
        // console.log("NUMERO:"+ numbers[i]);
        if (numbers[i] % 2 === 0) {
            // console.log("PARI: " + numbers[i]);
            evenNumbers.push(numbers[i]);
        }
        // return evenNumbers;
    }
    return evenNumbers;
}
const result = displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(result);

// Questa funzione dovrebbe restotuire un array di numeri pari
// ERRORI:
    // 1- ; dopo la i++
    // 2- = invece di ===
    // 3- numbers invece di numbers[i] nella condizione
    // 4- ; dopo la condizione
    // 5- return evenNumbers dentro il ciclo
    // 6- viene pushata la i e non il numbers[i]
    // 7- il ciclo salta l'ultimo elemento quindi si leva il -1 da numbers.length

// SOLUZIONE: risolvere gli errori individuati


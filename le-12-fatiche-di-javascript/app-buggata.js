const input = document.querySelector("input");
const array = []; //dovrebbe essere un array vuoto non null (null si crea, null si distrugge ma tutto si trasforma)

input.addEventListener("keypress", function (event) {
  if (event.code != "Enter") return;
  if (input.value == "") return;
  //perchè confrontare la lunghezza di un valore

  array.push(input.value); // add non è una funzione

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = input.value; // si utilizza inneText (qui non mi fregate)
  document.querySelector("ul").append(li); // append per gli element html

  let counter = 0; // è un contatore dovrebbe essere number
  let item = array[0];
  let max = 1; // non deve essere const
  const elems = [];

  for (let i = 0; i < array.length; i++) {
    // aggiungere .length
    let val = array[i];

    if (!elems[val]) {
      elems[val] = 1;
    } else {
      elems[val]++;
    }

    for (let j = i; j < array.length; j++) { // increamentare la j (e chi l'aveva notato)
      if (array[i] == array[j]) {
        counter++;
        if (max < counter) {
          max = counter;
          item = array[i];
        } // perchè vi mangiate le parentesi :-)
      }
    }

    counter = 0;
  }

  const alert = document.getElementsByClassName("alert")[0];

  alert.classList.remove("d-none");
  alert.classList.add("d-flex");

  alert.querySelector("span:first-child").innerText = item;
  alert.querySelector("span:last-child").innerText = max;

  console.log(`${item} trovato ${max} volte`); // utilzzo template literal
});

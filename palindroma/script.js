
let word = prompt("Inserisci una parola:");

let inverseWord = invertWord(word);

if (word == inverseWord) {
    console.log("la parola è palindroma");
  } else {
    console.log("la parola non è palindroma");
  }
  
function invertWord(str) {
 let strInversa = str.split("").reverse().join("");  
  return strInversa;
}

let userChoiceEvenOdd = prompt("Pari o Dispari?");
let userChoiceNumber = prompt("Inserisci un numero da 1 a 5:");
let userNumber = validateInputNumber(userChoiceNumber);
let computerChoice = randomNumberGenerator();
let sumNumber = evenOddNumbersSum();


// funzioni

function validateInputNumber(stringa) {
    while(isNaN(stringa) || stringa == ""){
        stringa = prompt("Reinserisci un numero: ");
    }

    let numero = parseInt(stringa);
    return numero;
}

function randomNumberGenerator(computerChoice) {
    computerChoice = Math.floor(Math.random() * 5);
    return computerChoice;
}

function evenOddNumbersSum(userNumber, computerChoice) {
    const sumNumber = userNumber+computerChoice;
    if(sumNumber % 2 == 0){
      console.log("La somma dei numeri è:" + sumNumber +" - pari");
      return sumNumber;
    } else {
    console.log("La somma dei numeri è:" + sumNumber +" - dispari");
    return sumNumber;
    }
}


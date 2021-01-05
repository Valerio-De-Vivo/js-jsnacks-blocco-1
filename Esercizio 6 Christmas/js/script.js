
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.


// BONUS COMPLESSITà

var difficolta = parseInt(prompt('Inserisci un livello di difficoltà da 1 a 3'));

while (difficolta != 1 && difficolta != 2 && difficolta != 3) {
    difficolta = parseInt(prompt('Inserisci un numero tra 1 , 2 o 3'));
}

var numMax = 100;

if (difficolta == 1) {
    numMax = 30;
} else if (difficolta == 2) {
    numMax = 60;
}

console.log(numMax);

// IL COMPUTER DECIDE IL NUMERO Random

var numeroComputer = randomNumbers(1 , numMax);
console.log(numeroComputer);

var tentativi = 4;

for (var i = 0 ; i < 4 ; i++) {

    if (difficolta == 1) {
        var numeroUtente = parseInt(prompt('Indovina il numero vincente tra 1 e 30, hai ' + tentativi + ' tentativi'));
    } else if (difficolta==2) {
        var numeroUtente = parseInt(prompt('Indovina il numero vincente tra 1 e 60, hai ' + tentativi + ' tentativi'));
    } else {
        var numeroUtente = parseInt(prompt('Indovina il numero vincente tra 1 e 100, hai ' + tentativi + ' tentativi'));
    }

    if (numeroUtente > numeroComputer) {
        alert('il numero da indovinare è minore');
        tentativi-- ;
    } else if (numeroUtente < numeroComputer) {
        alert('il numero da indovinare è maggiore');
        tentativi-- ;
    } else if (numeroUtente == numeroComputer) {
        alert('hai vinto! il numero era:' + numeroComputer);
        document.getElementById('win').innerHTML = '<h1>Hai vinto!</h1>'
        i = 3;
    } else {
        tentativi--;
    }
}

document.getElementById('stampa').innerHTML = numeroComputer ;



// FUNZIONI 

function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var numeri = [];

for (i = 0 ; i < 6 ; i++) {

    var numero = parseInt(prompt('Inserisci un numero'));

    if (numero % 2 !=0) {
        numeri.push(numero);
    }
}

console.log(numeri);
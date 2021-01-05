var numero1 = parseInt(prompt('Inserisci il primo numero'));
var numero2 = parseInt(prompt('Inserisci il secondo numero'));

if (numero1 > numero2) {
    document.getElementById('lista').innerHTML = numero1;
} else if (numero2 > numero1) {
    document.getElementById('lista').innerHTML = numero2;
} else {
    document.getElementById('lista').innerHTML = 'i numeri sono uguali';
}

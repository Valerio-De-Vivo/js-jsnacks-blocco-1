var parola1 = prompt('inserisci una parola');
var parola2 = prompt('inserisci una parola');

if (parola1.length > parola2.length) {
    document.getElementById('lista').innerHTML = parola2;
} else if (parola2.length > parola1.length) {
    document.getElementById('lista').innerHTML = parola1;
} else {
    document.getElementById('lista').innerHTML = 'le parole hanno la stessa lunghezza';
}

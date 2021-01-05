var invitati = [ 'pippo' , 'paperino' , 'pluto' , 'paperina']

var nomeUtente = prompt('inserisci il tuo nome');
var messaggio = 'Il tuo nome non è nella lista';

for (i=0 ; i < invitati.length ; i++) {
    if ( nomeUtente == invitati[i]) {
        messaggio = 'Sei in lista! Puoi partecipare!';
        var posizione = [i + 1];
    }
}

document.getElementById('lista').innerHTML = messaggio + 'sei il numero ' + posizione;

// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.


var punteggioPlayer = 0;
var punteggioComputer = 0;
var tentativi = 4;

for (var i = 0 ; i < 4 ; i++) {

    // DICHIARO LA MANO DEL COMPUTER

    var numeroComputer = randomNumbers(1, 3);
    var manoComputer;

    if (numeroComputer==1) {
        manoComputer = 'carta';
    } else if (numeroComputer==2) {
        manoComputer = 'sasso';
    } else {
        manoComputer = 'forbici';
    }

    console.log(manoComputer);

    var manoPlayer = prompt('Inserisci sasso , carta o forbici').toLowerCase();

    while (manoPlayer!= 'sasso' && manoPlayer!= 'carta' && manoPlayer!= 'forbici') {
        manoPlayer = prompt('Inserisci o la parola sasso o la parola carta o la parola forbici').toLowerCase();
    }
    

    // AZZERO LE IMMAGINI

    document.getElementById('sassop').className = 'none';
    document.getElementById('cartap').className = 'none';
    document.getElementById('forbicip').className = 'none';

    document.getElementById('sasso').className = 'none';
    document.getElementById('carta').className = 'none';
    document.getElementById('forbici').className = 'none';

    // ____________________________________________________________________


    

    // SE IL PLAYER GIOCA SASSO 

    if (manoPlayer=='sasso') {

        document.getElementById('sassop').className = 'display';


        if (manoComputer=='carta') {
            document.getElementById('carta').className = 'display';
            tentativi--;
            punteggioComputer++;
            alert('Hai perso, hai altri ' + tentativi + 'tentativi');
        }
        else if (manoComputer=='sasso') {
            document.getElementById('sasso').className = 'display';
            tentativi--;
            alert('Hai pareggiato, hai altri ' + tentativi + 'tentativi');
        }
        else {
            document.getElementById('forbici').className = 'display';
            tentativi--;
            punteggioPlayer++;
            alert('Hai vinto, hai altri ' + tentativi + 'tentativi');
        }
    }

    //SE L'UTENTE GIOCA CARTA

    if (manoPlayer=='carta') {

        document.getElementById('cartap').className = 'display';


        if (manoComputer=='forbici') {
            document.getElementById('forbici').className = 'display';
            tentativi--;
            punteggioComputer++;
            alert('Hai perso, hai altri ' + tentativi + 'tentativi');
        }
        else if (manoComputer=='carta') {
            document.getElementById('carta').className = 'display';
            tentativi--;
            alert('Hai pareggiato, hai altri ' + tentativi + 'tentativi');
        }
        else {
            document.getElementById('sasso').className = 'display';
            tentativi--;
            punteggioPlayer++;
            alert('Hai vinto, hai altri ' + tentativi + 'tentativi');
        }
    }

    //SE L'UTENTE GIOCA FORBICI


    if (manoPlayer=='forbici') {

        document.getElementById('forbicip').className = 'display';


        if (manoComputer=='sasso') {
            document.getElementById('sasso').className = 'display';
            tentativi--;
            punteggioComputer++;
            alert('Hai perso, hai altri ' + tentativi + 'tentativi');
        }
        else if (manoComputer=='forbici') {
            document.getElementById('forbici').className = 'display';
            tentativi--;
            alert('Hai pareggiato, hai altri ' + tentativi + 'tentativi');
        }
        else {
            document.getElementById('carta').className = 'display';
            tentativi--;
            punteggioPlayer++;
            alert('Hai vinto, hai altri ' + tentativi + 'tentativi');
        }
    }


    document.getElementById('punteggioplayer').innerHTML = punteggioPlayer;
    document.getElementById('punteggiocomputer').innerHTML = punteggioComputer;

}

document.getElementById('rigioca').addEventListener('click', function(){location.reload()});


















// FUNZIONI 

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
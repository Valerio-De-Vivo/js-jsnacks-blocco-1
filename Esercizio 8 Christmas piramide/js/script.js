var altezza = parseInt(prompt('numero'));


var asterisco;
var asterischi;

for (var i = 0 ; i < altezza *2 ; i+=2) {
    asterisco = '*';
    asterischi = asterisco.repeat(i);
    
    document.getElementById('piramide').innerHTML += asterischi + '*' + '<br>';
}
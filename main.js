var age = prompt ('Inserisci la tua età');
document.getElementById('age').innerHTML = age;

var distance = prompt ('Inserisci i chilometri da percorrere');
document.getElementById('distance').innerHTML = distance + "Km";

var price = distance * 0.21;
console.log(price);

if (age <= 18 ) {
    price = price - (price / 100 * 20);
    document.getElementById('sconto').innerHTML = Math.floor(price)  + ' €';
} else if (age >= 65 ) {
    price = price - (price / 100 * 40);
    document.getElementById('sconto').innerHTML = Math.floor(price) + ' €';
} else {
    price;
    document.getElementById('sconto').innerHTML = Math.floor(price) + ' €';
}

var age = prompt ('Quanti anni hai?');
console.log(age);

var distance = prompt ('Quanta chilometri vuoi percorrere?');
console.log(distance);

var price = distance * 0.21;
console.log(price);

var under18 = if (age <= 18 ) {
    console.log('sconto under 18');
    console.log(price - (price / 100 * 20));
}

if (age <= 18 ) {
    console.log('sconto under 18');
    console.log(price - (price / 100 * 20));
}

if (age >= 65 ) {
    console.log('sconto over 65');
    console.log(price - (price / 100 * 40));
}

document.getElementById('sconto').innerHTML = under18;

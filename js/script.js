// 1
const km = parseInt(prompt('Chilometri da percorrere?'));
const age = parseInt(prompt('Quanti anni ha il passeggero?'));

const discountUnderage = 0.20;
const discountOver65 = 0.40;

const priceKm = 0.21;

let message;

// 2
const price = (km * priceKm);

console.log(price);

// 3
if(age < 18){
  message = (price - (price * discountUnderage)).toFixed(2);
} else if(age > 64){
  message = (price - (price * discountOver65)).toFixed(2);
} else {
  message = price.toFixed(2);
}

// 4
console.log(message);
message += ' €'

// 5
document.getElementById('output').innerHTML = message;





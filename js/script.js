// 1
const km = parseInt(prompt('Chilometri da percorrere?'));
const age = parseInt(prompt('Quanti anni ha il passeggero?'));

const discountUnderage = 0.20;
const discountOver65 = 0.40;

const priceKm = 0.21;

let message;

let datiValidi = true;

// 2
const price = (km * priceKm);

console.log(price);

// 3
// if(age < 18){
//   message = (price - (price * discountUnderage)).toFixed(2);
// } else if(age > 64){
//   message = (price - (price * discountOver65)).toFixed(2);
// } else {
//   message = price.toFixed(2);
// }

if(age < 1){
 message = 'Errore! Hai inserito un valore non valido';
// in caso di errore il flag diventa false
 datiValidi = false;
}else if(isNaN(age)){
 message = 'Errore! Devi inserire un numero';
 datiValidi = false;
}else if(isNaN(km)){
  message = 'Errore! Devi inserire un numero';
  datiValidi = false;
}else{
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
}


// 5
document.getElementById('output').innerHTML = message;




// 1
const age = parseInt(prompt('Quanti anni ha il passeggero?'));

const discountUnderage = 0.20;
const discountOver65 = 0.40;

const priceKm = 0.21;

let message;


// 2


//3
if(age < 1){
  message = 'Errore! Etè segnalata inferiore a 1';
  }else if(isNaN(age)){
  message = 'Errore! Devi inserire un numero in età passeggero';
  }else{
    
    const km = parseInt(prompt('Chilometri da percorrere?'));
    const price = (km * priceKm);
    console.log(price);

  if(isNaN(km)){
    message = 'Errore! Devi inserire un numero nel campo chilometri';
  }else if(km < 1){
    message = 'Errore! Devi inserire un numero superiore a 1';
  }else{
    if(age < 18){
      message = (price - (price * discountUnderage)).toFixed(2);
    } else if(age > 64){
      message = (price - (price * discountOver65)).toFixed(2);
    } else {
      message = price.toFixed(2);
      
    }
    
    console.log(message);
    message += ' €'
}
  
  // 4
}


// 5
document.getElementById('output').innerHTML = message;




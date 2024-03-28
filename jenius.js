function generateCCNumber() {
    let number = "46616012";
  
    for (let i = 0; i < 8; i++) {
      number += Math.floor(Math.random() * 10);
    }
  
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      let digit = parseInt(number[i]);
  
      if (i % 2 === 0) {
        digit *= 2;
  
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
    }
  
    if (sum % 10 !== 0) {
      number += (10 - (sum % 10));
    }
  
    const expirationMonth = Math.floor(Math.random() * 12) + 1;
    const expirationYear = new Date().getFullYear() + Math.floor(Math.random() * 4);
  
    const cvv = Math.floor(Math.random() * 1000);
  
    return {
      number,
      expirationMonth,
      expirationYear,
      cvv
    };
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the number of cards to generate: ', function(num) {
    for (let i = 0; i < num; i++) {
      const card = generateCCNumber();
  
      console.log(`Card #${i + 1}:
  Number: ${card.number}
  Expiration: ${card.expirationMonth}/${card.expirationYear.toString().substr(2, 2)}
  CVV: ${card.cvv}`);
    }
  
    rl.close();
  });
  
  rl.on('close', function() {
    console.log('\nDONE GAN!..');
    process.exit(0);
  });
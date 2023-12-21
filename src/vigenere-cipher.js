const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.module = 26;
  }
  encrypt(message, key) {
    if(arguments.length === 0 || arguments.length === 1 || message === undefined) {
      throw new Error("Incorrect arguments!")
    }
    const arr = message.toUpperCase().split('');
    const arrNum = arr.map((letter) => {
      if (/\d/.test(letter)) {
        return String(letter);
      } else if (!/^[a-zA-Z]$/.test(letter)) {
       return letter;
     } else {
       return this.alphabet.indexOf(letter)
     }
   });
    // console.log('arr / это массив с буквами message:', arr) // массив с message
    // console.log('arrNum / это массив где буквы message заменены на индексы, небуквы должны сохраниться', arrNum) 
    const keyNum = key.toUpperCase().split('').map((letter) => letter = this.alphabet.indexOf(letter));
   //  console.log(keyNum) // индексы ключа
    let count = 0
    const arr2 = arr.reduce((acum, currentValue, index) => {
     if(!/^[a-zA-Z]$/.test(currentValue)) {
       acum.push(currentValue);
     } else {
       acum.push(keyNum[count % keyNum.length])
       count++
     }
     return acum
    }, []);
    // console.log('arr2 / индексы ключа подставлены под индексы message/небуквы сохранены', arr2) 
    //теперь надо склалывать индексы по модулю 26
 
    // использую массив с индексами послания /  не забудь про небуквы
    const multiply = arrNum.reduce((acum, currentValue, index) => {
     if (typeof currentValue !== 'number') {
       acum.push(currentValue);
     } else {
       let value = currentValue + arr2[index];
       if (value >= this.module) {
         value -= this.module
       }
       acum.push(value)
     }
     return acum
    }, [])
    // console.log('multiply / это массив после сложения по модулю. небуквы должны остаться неизменными и тут у нас проблемка', multiply)
    // console.log(typeof multiply[multiply.length - 2])
    //теперь надо перевести индексы в буквы
    const arrResult = multiply.map((letter) => {

     if (typeof letter === 'string') {
       return letter;
     } else {
       return this.alphabet[letter];
     }
    })
 
    if (!this.type) {
     return [...arrResult].reverse().join('')
    } else {
     return arrResult.join('')
    }
  }
  decrypt(message, key) {
    if(arguments.length === 0 || arguments.length === 1 || message === undefined) {
      throw new Error("Incorrect arguments!")
    }
    const arr = message.toUpperCase().split('');
    const arrNum = arr.map((letter) => {
      if (/\d/.test(letter)) {
        return String(letter);
      } else if (!/^[a-zA-Z]$/.test(letter)) {
       return letter;
     } else {
       return this.alphabet.indexOf(letter)
     }
   });
    // console.log('arr / это массив с буквами message:', arr) // массив с message
    // console.log('arrNum / это массив где буквы message заменены на индексы, небуквы должны сохраниться', arrNum)

    const keyNum = key.toUpperCase().split('').map((letter) => letter = this.alphabet.indexOf(letter));
    //  console.log('keyNum / это индексы ключа: ', keyNum) // индексы ключа

     let count = 0
    const arr2 = arr.reduce((acum, currentValue, index) => {
     if(!/^[a-zA-Z]$/.test(currentValue)) {
       acum.push(currentValue);
     } else {
       acum.push(keyNum[count % keyNum.length])
       count++
     }
     return acum
    }, []);
    // console.log('arr2 / индексы ключа подставлены под индексы message/небуквы сохранены', arr2)

    //теперь надо вычитать индексы по модулю 26
 
    // использую массив с индексами послания /  не забудь про небуквы
    const multiply = arrNum.reduce((acum, currentValue, index) => {
      if (typeof currentValue !== 'number') {
        acum.push(currentValue);
      } else {
        let value = currentValue - arr2[index];
        if (value < 0) {
          value += this.module
        }
        acum.push(value)
      }
      return acum
     }, [])
    //  console.log('multiply / это массив после сложения по модулю. небуквы должны остаться неизменными и тут у нас проблемка', multiply)

     //теперь надо перевести индексы в буквы
    const arrResult = multiply.map((letter) => {

      if (typeof letter === 'string') {
        return letter;
      } else {
        return this.alphabet[letter];
      }
     })
  
     if (!this.type) {
      return [...arrResult].reverse().join('')
     } else {
      return arrResult.join('')
     }
  }
}

module.exports = {
  VigenereCipheringMachine
};

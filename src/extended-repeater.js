const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strCore = str.toString();
  let stringAdditional = [];
  if (options.additionRepeatTimes && options.addition && options.additionSeparator) {
    strAdd = options.addition.toString();
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      stringAdditional.push(strAdd)
    }
  }
  let result = [];
  if (options.repeatTimes && options.separator) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(strCore + stringAdditional.join(`${options.additionSeparator}`));
    }

  }
 return result.join(`${options.separator}`);
}

module.exports = {
  repeater
};

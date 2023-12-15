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
  const mainStr = String(str);
  let separator;
  let addition;
  let repeatTimes;
  let additionRepeatTimes;
  let additionSeparator;
  options.separator ? separator = options.separator : separator = '+';
  options.addition instanceof String ? addition : addition = String(options.addition);
  options.addition === undefined ? addition = '' : addition;
  options.repeatTimes ? repeatTimes = options.repeatTimes : repeatTimes = 1;
  options.additionRepeatTimes ? additionRepeatTimes = options.additionRepeatTimes : additionRepeatTimes = 1;
  options.additionSeparator ? additionSeparator = options.additionSeparator : additionSeparator = '|';

  let stringAdditional = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    stringAdditional.push(addition);
  }

  let result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(mainStr + stringAdditional.join(`${additionSeparator}`));
  }
  return result.join(`${separator}`);
}

module.exports = {
  repeater
};

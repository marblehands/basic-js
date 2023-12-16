const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return str;
  }
  let stack = [];
  let charCounter = {};
  let arr = str.split('');
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (!charCounter[arr[i]]) {
      charCounter[arr[i]] = 1;
    } else if (stack[stack.length - 1] !== arr[i]) {

      charCounter[`${arr[i]}-`] = 1;
    }

    
    console.log(charCounter)
    if (!stack.includes(arr[i])) {
      stack.push(arr[i]);
      console.log(stack)
    } else {
      if (stack[stack.length - 1] === arr[i]) {
        charCounter[arr[i]] += 1;
      }
      console.log(charCounter)
      stack.push(arr[i]);
      console.log(stack)
    }
  }
  let keys = Object.keys(charCounter);
  let values = Object.values(charCounter);

  let strEncoded = ''
  values.forEach((value, index) => {
    if(value === 1) {
      value = '';
    }
    strEncoded += value + keys[index];
  })
  console.log(strEncoded.replace(/-/g, ''))
  return strEncoded.replace(/-/g, '')
}

module.exports = {
  encodeLine
};

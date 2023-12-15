const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let arrCopy = [...arr];
    arrCopy.splice(i, 1);
    stack.push(Number(arrCopy.join('')));
  }
  stack.sort((a, b) => b - a);
  return stack[0];
}

module.exports = {
  deleteDigit
};

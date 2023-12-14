const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catNum = 0;
  const catEars = '^^';
  matrix.forEach((item) => {
    let catHome = [];
    catHome = item.filter((isCat) => {
      return isCat === catEars;
    });
    catNum += catHome.length;
  });
  return catNum;
}

module.exports = {
  countCats
};

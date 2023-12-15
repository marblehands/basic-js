const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let arrayDepth = 1;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        arrayDepth++;
        const calcDepth = new DepthCalculator();
        calcDepth.calculateDepth(array[i])
      }
    }
    return arrayDepth;
  }
}


module.exports = {
  DepthCalculator
};

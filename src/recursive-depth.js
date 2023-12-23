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
    let depth = 1;
    array.forEach((item) => {
      if (Array.isArray(item)) {
        let depthOfItem;
        depthOfItem = this.calculateDepth(item) + 1;
        if(depthOfItem > depth) {
          depth = depthOfItem;
        }
      };
    })
    return depth;
  }
}
    // console.log(arrItemDepth)
    // for (let i = 0; i < array.length; i++) {
    //   let depth = 1;
    //   if (Array.isArray(array[i])) {
    //     depth++;
    //     const calcDepth = new DepthCalculator();
    //     calcDepth.calculateDepth(array[i])
    //   }
    // }
    // console.log(arrayDepth)



module.exports = {
  DepthCalculator
};

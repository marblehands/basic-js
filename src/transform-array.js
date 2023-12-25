const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
//   if (Array.isArray(arr)) {
//     if (!arr.length) {
//       return arr;
//     }

//     let count = {};

//     const commands = ['--double-next', '--discard-prev', '--double-prev', '--discard-next'];
//     commands.forEach((command) => {
//       let command = {}
//       if (arr.includes(item)) {
//         command[item] = arr.indexOf(item);
//       }
//     })


//   } else {
//     throw new Error("\'arr\' parameter must be an instance of the Array!");
//   }
function transform(arr) {
  if (Array.isArray(arr)) {
    if (!arr.length) {
      return arr;
    }
    // let count = {};
    // let i = 1;
    // commands.forEach((item) => {
    //   let commandInfo = {};
    //   if (arr.includes(item)) {
    //     commandInfo[item] = arr.indexOf(item);
    //     count[i] = commandInfo;
    //     i++;
    //   }
      
    // })

    // console.log(count)

    // let newArr = arr.map((item, index) => {
    //   if (
    //     (index === 0 && typeof item === 'string' && item.includes('prev')) ||
    //     (index === arr.length - 1 && typeof item === 'string' && item.includes('next'))
    //   ) {
    //     return null;
    //   } else if (item === 'string' && item.includes('prev') && item.include('double')) {
        
    //   }
    // })
    // console.log(newArr)
    // return newArr;

    let copyArr = [...arr];
    const commands = ['--double-next', '--discard-prev', '--double-prev', '--discard-next'];

    arr.forEach((item, index) => {
      if (typeof item === 'string' && item.includes('prev') && arr[index - 1]) {
        if (item.includes('discard') && typeof copyArr[index - 1] === 'number') {
          copyArr.splice(index - 1, 1);
        }
        if (item.includes('double') && typeof copyArr[index - 1] === 'number') {
          copyArr.splice(index - 1, 0, arr[index - 1])
        }
      }

      if (typeof item === 'string' && item.includes('next') && arr[index + 1]) {
        if (item.includes('discard') && typeof copyArr[index + 1] === 'number') {
          copyArr.splice(index + 1, 1);
        }
        if (item.includes('double') && typeof copyArr[index + 1] === 'number') {
          copyArr.splice(index + 1, 0, arr[index + 1]);
        }
      }
      console.log(copyArr)
    })
    let result = copyArr.filter((item) => !commands.includes(item));
    return result;
  } else {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
}







  //Прошлое решение / не проходят 2 теста



  // if (Array.isArray(arr)) {
  //   if (arr.length === 0) {
  //     return arr;
  //   } else {
  //     const commands = arr.filter((item) => item === '--discard-prev' || item === '--discard-next' || item === '--double-prev' ||  item === '--double-next');
  //     if (commands.length === 0) {
  //       return arr;
  //     } else {
  //       let copyArr = [...arr];
  //       let actions = [];

  //       if (commands.length > 0) {
  //         commands.forEach((item) => {
  //           actions.push(item.split('--')[1].split('-'));
  //           actions.push(copyArr.indexOf(item));
  //           copyArr.splice(copyArr.indexOf(item), 1)
  //         });
  //       }
    
  //       let items = [...copyArr]
    
  //       for (let i = 0; i < actions.length; i += 2) {
  //           let action = actions[i + 1][0];
  //           let target = actions[i + 1][1];
  //           let item = actions[i + 1];
      
  //           if (target === 'next' && action === 'double') {
  //             if (item === copyArr.length) {
  //               return copyArr;
  //             }
  //             copyArr.splice(item, 0, items[item]);
  //           }
      
  //           if (target === 'prev' && action === 'double') {
  //             if (item === 0) {
  //               return copyArr.splice(0, 1);
  //             }
  //             copyArr.splice(item - 1, 0, items[item - 1]);
  //           }
      
  //           if (target === 'next' && action === 'discard') {
  //             if (item === copyArr.length) {
  //               return copyArr;
  //             }
  //             copyArr.splice(item, 1);
  //           }
      
  //           if (target === 'prev' && action === 'discard') {
  //             if (item === 0) {
  //               return copyArr;
  //             }
  //             copyArr.splice(item - 1, 1);
  //           }
  //         }
  //         return copyArr;
  //     }
  //   }
  //   }
  //   throw new Error("\'arr\' parameter must be an instance of the Array!");
  
module.exports = {
  transform
};

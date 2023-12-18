const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
   function getDNSStats(domains) {
    let arr = []
    domains.forEach((item) => {
      let strings = item.split('.').reverse().map((item) => '.' + item);
      arr.push(strings);
    })
    console.log(arr)
    let arr2 = []
    arr.forEach((item) => {
      item.reduce((acum, value) => {
        acum += value;
        arr2.push(acum)
        return acum
       }, '');
    })
    console.log(arr2)
    let count = {};
    arr2.forEach((item) => {
      if (!count[item]) {
        count[item] = 1
      } else {
        count[item]++
      }
    })
    console.log(count)
    return count
  }

module.exports = {
  getDNSStats
};

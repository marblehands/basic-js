const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (isNaN(date)) {
    return 'Unable to determine the time of year!'
  } else if (date instanceof Date) {
    const month = date.getMonth();
  if (month >= 0 && month < 2 || month === 11) {
    return 'winter';
  }
  if (month > 1 && month < 5) {
    return 'spring';
  }
  if (month > 4 && month < 8) {
    return 'summer';
  }
  if (month > 7 && month < 11) {
    return 'autumn';
  }
  }
  return 'Invalid date!'
}

module.exports = {
  getSeason
};

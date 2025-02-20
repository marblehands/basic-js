const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  if (isNaN(Number(sampleActivity)) || typeof sampleActivity !== 'string' || Number(sampleActivity) >= 15 || Number(sampleActivity) <= 0 || arguments.length === 0) {
    return false;
  }

  const result = Math.ceil((Math.log(MODERN_ACTIVITY / Number(sampleActivity)) * HALF_LIFE_PERIOD) / Math.log(2));

  return result;
}

module.exports = {
  dateSample
};

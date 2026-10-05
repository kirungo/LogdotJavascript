`use strict`;

/** Problem Statement
 * We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temparatures of one day, calculate the temparature amplitude. Keep in mind that sometimes there might be a sensor error."
 *
 */

const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAltitude = function (temparature) {
  let maxTemp = temparatures[0];
  let minTemp = temparatures[0];

  for (currentTemp = 0; currentTemp < temparatures.length; currentTemp++) {
    if (temparatures[currentTemp] === 'error') {
      //console.log('Sensor error encountered');
    } else if (temparatures[currentTemp] > maxTemp) {
      maxTemp = temparatures[currentTemp];
    } else if (temparatures[currentTemp] < minTemp) {
      minTemp = temparatures[currentTemp];
    }
  }
  console.log(`Maximum temperature is: ${maxTemp}`);
  console.log(`Minimum temperature is: ${minTemp}`);
  return maxTemp - minTemp;
};

const amplitude = `The temperature amplitude is ${calcTempAltitude(temparatures)}.`;
console.log(amplitude);


`use strict`;

/** Coding Challenge
 * Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures
 *
 * Example: [17, 21, 23] will print
 * "... 17°C in 1 days"
 * "... 21°C in 2 days"
 * "... 23°C in 3 days"
 *
 * Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
 *
 *
 *
 */
const tempData1 = [17, 21, 23];

const tempData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = ``;
  for (let day = 0; day < arr.length; day++) {
    str += `${arr[day]}°C in ${day + 1} days ... `;
  }
  console.log(`...` + str);
};
printForecast(tempData1.concat(tempData2));

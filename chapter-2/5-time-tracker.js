/**
 * Building a time tracker for freelancers within 9 to 5
 *
 * The function receives daily work hours for a certain week and returns:
 * 1. Total hours worked
 * 2. Average daily hours
 * 3. The day with the most hours worked
 * 4. Number of days worked
 * 5. Whether the week was full-time (35 hours or more)
 */

const hours = [7.5, 8, 0, 8.5, 4, 0];

function calcTimeTraker(hoursWorked) {
  let totalHours = 0;
  let mostHoursWorked = 0;
  let numberOfDaysWorked = 0;

  for (let i = 0; i < hoursWorked.length; i++) {
    totalHours += hoursWorked[i];

    if (hoursWorked[i] > mostHoursWorked) {
      mostHoursWorked = hoursWorked[i];
    }

    if (hoursWorked[i] > 0) {
      numberOfDaysWorked++;
    }
    averageDailyHours = totalHours / numberOfDaysWorked;
  }

  console.log(`Total hours worked: ${totalHours}`);
  console.log(`Number of days worked: ${numberOfDaysWorked}`);
  console.log(`Average daily hours: ${averageDailyHours}`);
  console.log(`The day with the most hours worked: ${mostHoursWorked} hours`);
}

calcTimeTraker(hours);

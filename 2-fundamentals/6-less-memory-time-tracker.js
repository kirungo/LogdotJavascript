// Number 5 task but with more experience
const hours = [7.5, 8, 0, 8.5, 4, 0];

function timeTracker(hoursWorked) {
  let totalHours = 0;
  let mostHoursWorked = 0;
  let numberOfDaysWorked = 0;

  for (const hours of hoursWorked) {
    totalHours += hours;

    if (hours > mostHoursWorked) {
      mostHoursWorked = hours;
    }
    if (hours > 0) {
      numberOfDaysWorked++;
    }
  }
  const averageDailyHours =
    numberOfDaysWorked > 0 ? totalHours / numberOfDaysWorked : 0;

  console.log(`Total hours worked: ${totalHours}`);
  console.log(`Number of days worked: ${numberOfDaysWorked}`);
  console.log(`Average daily hours: ${averageDailyHours}`);
  console.log(`The day with the most hours worked: ${mostHoursWorked} hours`);

  return {
    totalHours,
    averageDailyHours,
    mostHoursWorked,
    numberOfDaysWorked,
    fullTime: totalHours >= 35,
  };
}

timeTracker(hours);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
/**
 * Remember x helps us loop through the array
 * for(start, range to loop, action)
*/
for (let x = 0; x < bills.length; x++) {
    let currentTip = calcTip(bills[x]);
    tips.push(currentTip);
    console.log(`For a bill of ${bills[x]}, the tip is ${tips[x]}.`);
}

console.log(`\n`);

let totals = [];
/**
 * Remember i helps us loop through the array
 * for(start, range to loop, action)
*/
for (let i = 0; i < bills.length; i++) {
    let totalBill = calcTip(bills[i]) + bills[i];
    totals.push(totalBill);
    console.log(`Your total bill is ${totalBill}`);
}

console.log(`\n`);
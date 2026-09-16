console.log(`Welcome to the counter rep`);

// start; limit range; action
for (let rep = 1; rep <= 10; rep += 1) {
	console.log(`You are now at counter rep ${rep} of 10.`);
}


// Looping Arrays, Breaking and Continuing
const markArray = [
	`Mark`,
	`Smith`,
	2037 - 2017,
	`teacher`,
	[`Michael`, `Peter`, `Steven`]
];

// Creates a new line
console.log(`\n`);

// continue with the loop when you encounter strings
console.log(`--- ONLY STRINGS ---`)
for(let i = 0; i < markArray.length; i++){
	if(typeof markArray[i] !== `string`) continue;
	console.log(markArray[i], typeof markArray[i]);
}

// Creates a new line
console.log(`\n`);

// break from the loop when you encounter numbers
console.log(`--- BREAK WITH NUMBERS ---`)
for(let i = 0; i < markArray.length; i++){
	if(typeof markArray[i] !== `number`) break;
	console.log(markArray[i], typeof markArray[i]);
}

// Using a for loop to log all the items out of the array above
// for(start; limit range; action)
for (let i = 0; i < 5; i++) {
	console.log(`Items in the array, at index ${i} we have ${markArray[i]}.`);
}

// Creates a new line
console.log(`\n`);

// Calculate years old and add items to a new Array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let currentAge = 0; currentAge < years.length; currentAge ++ ){
	ages.push(2026 - years[currentAge]);
}
console.log(ages);

// Creates a new line
console.log(`\n`);

// Loop backwards
const nancy = [
	`Nancy`,
	`Smith`,
	2037 - 2017,
	`teacher`,
	[`Michaela`, `Petra`, `Sky`]
];

// Loop backwards
for(let i = nancy.length - 1; i >= 0; i--){
	console.log(i, nancy[i]);
};

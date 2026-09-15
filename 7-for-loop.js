console.log(`Welcome to the counter rep`);

// start; limit range; action
for (let rep = 1; rep <= 10; rep += 1) {
	console.log(`You are now at counter rep ${rep} of 10.`);
}


// Looping Arrays, Breaking and Continuing
const markArray = [
	`Jonas`,
	`Smith`,
	2037 - 2017,
	`teacher`,
	[`Michael`, `Peter`, `Steven`]
];

// Creates a new line
console.log(`\n`);

// Using a for loop to log all the items out of the array above
// for(start; limit range; action)
for (let i = 0; i < 5; i++) {
	console.log(`Items in the array, at index ${i} we have ${markArray[i]}.`);
}

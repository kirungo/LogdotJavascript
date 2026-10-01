let rep = 1;

while (rep <= 10) {
	console.log(`While weight is ${rep}kg lift weights!`)
	rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
	console.log(`You rolled dice number ${dice}.`);
	dice = Math.trunc(Math.random() * 6) + 1;
}

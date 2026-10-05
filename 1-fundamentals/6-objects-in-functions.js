const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

if (mark.calcBMI() > john.calcBMI()) {
	console.log(
		`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
	);
} else {
	console.log(
		`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
	);
}


/** Using the ternary operator format,
 * this is how the code would look like
 * condition ? valueIfTrue : valueIfFalse
 */
mark.calcBMI() > john.calcBMI()
	? console.log(`${mark.fullName}'s BMI is higher!`)
	: console.log(`${john.fullName}'s BMI is higher!`);



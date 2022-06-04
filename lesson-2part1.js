"use strict"
let user = {};

user.name = 'Pylyp';
user.surname = 'Shevchenko';

user.name = 'Sergiy';
console.log(user);
delete user.name;

console.log(user);

console.log('-------');

let employeeSalaries = {
	'Olya': 2300,
	'ivan': 4500,
	'Dmitr': 1000,
};

let sum = 0;
for (let key in employeeSalaries) {
	sum += employeeSalaries[key];
};
console.log("Sum of employeeSalaries is " + sum);

console.log('-------');

function mathSum(a, b) {
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Entered incorrect number or numbers";
		} else {
			return a + b;
		}

	} catch (err) {
		console.log('a and b must be numbers');
	}
};
function mathSubtraction(a, b) {
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Entered incorrect number or numbers";
		} else {
			return a - b;
		}

	} catch (err) {
		console.log('a and b must be numbers');
	}

};
function mathDevide(a, b) {
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Entered incorrect number or numbers";
		} else {
			return a / b;
		}

	} catch (err) {
		console.log('a and b must be numbers');
	}
};
function mathMultiply(a, b) {
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Entered incorrect number or numbers";
		} else {
			return a * b;
		}

	} catch (err) {
		console.log('a and b must be numbers');
	}
};
console.log(mathSum(50, 'bb'));
console.log(mathSubtraction(34, 98));
console.log(mathDevide(10, 2));
console.log(mathMultiply('nf', 'vvv'));
















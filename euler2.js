//Euler 2: Fibonacci numbers

//Find the sum of the even values of the fibonacci sequence whose values dont exceed 4 million
//fibonacci sequence is the list of numbers that are the sum of the 2 numbers before them

function fibEvens() {
	
	var num1 = 0,
		num2 = 1,
		numlast,
		fibeven = [];

	for (i = 0; num2 < 4000000; i++) {

		numlast = num2;
		num2 += num1;
		num1 = numlast;

		if (num2 % 2 == 0 && num2 < 4000000) {
			fibeven.push(num2);
		}
	}

	return "The sum of the even numbers in the fibonacci sequence is: " +
	(fibeven.reduce(function(previous, current) {
	return previous + current;
	}));
};

console.log(fibEvens());


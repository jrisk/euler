/* Euler 2: Fibonacci numbers

Find the sum of the even values of the fibonacci sequence whose values dont exceed 4 million */

function fibonacciSequenceEvens() {
	
	var num1 = 0;
	var num2 = 1;
	var numlast;
	var fibarr = [];
	var fibarreven = [];

	for (i = 0; num2 < 4000000; i++) {

		numlast = num2;
		num2 += num1;
		num1 = numlast; 
		fibarr.push(num2);

		if (num2 % 2 == 0 && num2 < 4000000) {
			fibarreven.push(num2);
		}

	}

	console.log(fibarreven);

	return (fibarreven.reduce(function(previous, current) {
	return previous + current;
	}));
};

fibonacciSequenceEvens();


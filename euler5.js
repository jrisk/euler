/* Euler 5: Smallest Remainder

2520 is the smallest number that can be divided by each 
of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is 
evenly divisible by all of the numbers from 1 to 20? */

var number = 2;

function divisorSmall() {

	while (number > 1) {

		for (i = 1; i <= 20; i++) {
			
			if (number % i == 0) {
				if (i == 20) {
					return number + " is the smallest number divisible by the numbers 1 thru 20";
				}
			}
			else {
				number++;
				break;
			}
		}
	}
	return 0;
};

console.log(divisorSmall());
/* Euler 5: Smallest Remainder

2520 is the smallest number that can be divided by each 
of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is 
evenly divisible by all of the numbers from 1 to 20? */

for (j = 0; ; j++) {

for (i = 0, j = 0; i < 20; i++) {

	var product = i * j;
	
	if ((i * j) % i == 0) {
		console.log(product + " is divisible by " + i);
	}
}

}



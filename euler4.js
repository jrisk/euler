/* Euler 3: Palindrome Numbers 

Find the largest palindrome made from the product of two 3-digit numbers */

for (n = 100; n < 1000; n++) {
	
	for (i = 100; i < 1000; i++) {

		var product = i * n;

		console.log(product);

		if (product > (1000 * 1000)) {
			break;
		}
	}
};
//Euler 4: Palindrome Numbers 

//Find the largest palindrome made from the product of two 3-digit numbers

for (n = 100; n < 200; n++) {
	
	for (i = 100; i < 200; i++) {

		var product = i * n;

		console.log(product);

		//product.toString(); is slow
		var numToString = '' + product;
		console.log(numToString);

		var numReverse = numToString.split("").reverse().join("");
		console.log(numReverse);

		//if numToString == numReverse

		if (product > (100 * 200)) {
			break;
		}
	}
};
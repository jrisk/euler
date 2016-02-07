//Euler 4: Palindrome Numbers 

//Find the largest palindrome made from the product of two 3-digit numbers
//700% faster when you start from 999 (finding the largest, first find will be correct); 100ms

function getPal() {

for (n = 999; n > 99; n--) {
	
	for (i = 999; i > 99; i--) {

		var product = i * n;
		console.log(product);

		//product.toString(); is slow
		var numToString = '' + product;

		var numReverse = numToString.split("").reverse().join("");

		if (numToString == numReverse) {
			return "The largest palindrome of 2 three digit numbers is: " + product;
		}
	}
}

};

console.log(getPal());
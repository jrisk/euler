//Euler 4: Palindrome Numbers 

//Find the largest palindrome made from the product of two 3-digit numbers

function getPal() {

var palindromes = []

for (n = 100; n < 1000; n++) {
	
	for (i = 100; i < 1000; i++) {

		var product = i * n;

		//product.toString(); is slow
		var numToString = '' + product;

		var numReverse = numToString.split("").reverse().join("");

			if (numToString == numReverse) {
				palindromes.push(product);
			}
		}
	}
	return palindromes.pop();
};

function testPal() {

	var num1 = 1001;

	var num2 = '' + num1;

	var num2pal = num2.split("").reverse().join("");

	console.log(typeof num1);
	console.log(typeof num2);
	console.log(typeof num2pal);

	(num1 == num2) ? console.log('yes num1 == num2') : console.log('no num1 != num2');
	(num1 === num2) ? console.log('num1 === num2 IMPOSSIBRU') : console.log('num1 !== num2');

	(num2 == num2pal) ? console.log('num2 == num2pal') : console.log('num2 != num2pal NO');
	(num2 === num2pal) ? console.log('num2 === num2pal too') : console.log('no the split.reverse.join did something');

}

testPal();
console.log("largest palindrome is: " + getPal());
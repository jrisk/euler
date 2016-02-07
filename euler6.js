/* Euler 6: Sum of Squares, Square of Sums

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 102) = 552 = 3025

Hence the difference between the sum of the squares of 
the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of 
the first one hundred natural numbers and the square of the sum. */

function sumOfSquares(n) {
	var sum = (1/3)*Math.pow(n,3)+(1/2)*(Math.pow(n,2))+(1/6)*(n);

	return sum;
}

function arrayCreate(n) {
	var arr = [];

	for (i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr;
}

function squareOfSums(arr) {
	
	return Math.pow(arr.reduce(function(previous, current) {
		return previous+current;
		}), 2);
}

function diffSumSquare(sumSquares, squareSums) {

	return Math.abs(sumSquares - squareSums);
}

console.log(diffSumSquare(sumOfSquares(100), squareOfSums(arrayCreate(100))));





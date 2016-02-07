//Euler 3: Prime Factors

//What is the largest prime factor of the number 600851475143 ?
//a prime is a number who is only divisible by 1 and itself
//a prime factor is a prime that is a factor of another number

//This version of Problem 3 is way, way faster
var v1 = process.hrtime();
//run in node

var bigNum = 600851475143;

function isPrime(num) {

	console.log("entered the isPrime function at " + num);
	for (j = 2; j <= Math.sqrt(num); j++) {
		if (num % j == 0) {
		return false;
		}
	}
	return true;
};

function primeFactor() {

for (i =(bigNum - 1); i > 1; i--) {

	if (bigNum % i == 0) {
		console.log("its a factor");
		if (isPrime(i)) {
			console.log("its prime");
		return i;
		}
	}
}
};

var v2 = process.hrtime(v1);

console.log(primeFactor());
console.log(v2);
//console.log("The Largest Prime Factor is: " + primeFactor());
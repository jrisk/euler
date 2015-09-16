/* Euler 3: Prime Factors

What is the largest prime factor of the number 600851475143 ? */


var bigNum = 600851475143;

var Factors = [];

var Primes = [];

for (i = 2; i < bigNum; i++) {

	var isPrime = 0;

	if (bigNum % i == 0) {

		Factors.push(i);

		for (j = 2; j < i; j++) {

			if (i % j == 0) {
				isPrime = 1;
				}
			}
			
		if (isPrime == 0) {
		Primes.push(i);
		}
	}

};

console.log(Primes);

var LargestPrimeFactor = Primes.pop();

console.log(LargestPrimeFactor);
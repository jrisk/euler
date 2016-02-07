//Euler 3: Prime Factors

//What is the largest prime factor of the number 600851475143 ?
//a prime is a number who is only divisible by 1 and itself
//a prime factor is a prime that is a factor of another number

var bigNum = 600851475;

var Primes = [];

var Factors = [];

for (i = 2; i < bigNum; i++) {

	if (bigNum % i == 0) {

		Factors.push(i);

		//find if that factor is a prime number

		testPrime: {

			for (j = 2; j < i; j++) {

				if (i % j == 0) {
					break testPrime;
					}
				}
			Primes.push(i);
			}
		}
}

var LargestPrimeFactor = Primes.pop();

console.log(LargestPrimeFactor);
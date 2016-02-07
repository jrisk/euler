/* Euler 1: Multiples of 3 and 5

Find all multiples of 3 and 5 between 100 */

var narr = [];

for (n = 0; n < 1000; n++) {

if (n % 3 == 0 || n % 5 == 0) {
	narr.push(n);
	}
};

console.log( "the sum of all multiples of 3 and 5 under 1000 is: " +
	narr.reduce(function(prev, cur) {
	return prev + cur;
})
);

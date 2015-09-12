/* Euler 1: Multiples of 3 and 5

Find all multiples of 3 and 5 between 100 */

var narr = [];

for (n = 0; n < 1000; n++) {

if (n % 3 == 0) {
	console.log(n);
	narr.push(n);
}

else if (n % 5 == 0) {
	console.log(n);
	narr.push(n);
}

};

narr.reduce(function(prev, cur) {
	return prev + cur;
});
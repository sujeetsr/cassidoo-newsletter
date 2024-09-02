/*
https://buttondown.com/cassidoo/archive/to-lead-people-walk-behind-them-lao-tzu/

You are given an array of strings representing a collection of shoes. 
Each shoe is labeled with its type ("L" for left or "R" for right) and its size. 
Determine the maximum number of matching pairs of shoes that can be formed.

Example:
> maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"])
> 3

> maxPairs(["L-10", "L-11", "L-12", "L-13"])
> 0

> maxPairs(["L-8", "L-8", "L-8", "R-8"])
> 1
*/
var assert = require('assert');

function maxPairs(input) {
	const pairs = {};
	let numPairs = 0;
	input.forEach(label => {
		const [side, size] = label.split("-");
		const otherSide = side === 'L' ? 'R' : 'L';
		if (pairs[size] === undefined) {
			pairs[size] = {L: 0, R: 0};
		}
		pairs[size][side]++;
		if (pairs[size][side] > 0 && pairs[size][otherSide] > 0) {
			pairs[size][side]--;
			pairs[size][otherSide]--;
			numPairs++;
		}
	})
	return numPairs;
}

assert.equal(maxPairs(["L-10", "L-10", "L-11", "R-10", "R-10", "R-10", "R-11"]), 3);
assert.equal(maxPairs(["L-10", "L-11", "L-12", "L-13"]), 0);
assert.equal(maxPairs(["L-8", "L-8", "L-8", "R-8"]), 1);

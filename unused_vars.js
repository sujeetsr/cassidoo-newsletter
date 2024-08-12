/* 
https://buttondown.com/cassidoo/archive/work-smart-get-things-done/ 


Given an array of logs and variable assignments, return a list of all unused variables.

Examples:

findUnused(["a = 1", "b = a", "c = 2", "log(b)"]);
["c"]

findUnused(["a = 1", "b = a", "c = 2", "log(c)"]);
["a", "b"]

Run this file with `node unused_vars.js` and you should see the tests pass.
*/

var assert = require('assert');

function findUnused(input) {
	const assignments = input.slice(0, input.length - 1);
	const loggedVar = input[input.length - 1].split('(')[1].split(')')[0];
	const depMap = buildDependencyMap(assignments);
	const references = getReferences(depMap, loggedVar);
	const unused = Object.keys(depMap).filter(x => !references.includes(x));
	return unused;
}

function buildDependencyMap(assignments) {
	return assignments.reduce((acc, element) => {
		const lhs = element.split(' ')[0];
		const rhs = element.split(' ')[2];
		acc[lhs] = rhs;
		return acc;
	}, {});
}

function getReferences(varMap, loggedVar) {
	const references = [];
	let current = loggedVar;
	while (isNaN(Number.parseInt(current))) {
		references.push(current);
		current = varMap[current];
	};
	return references;
}

assert.deepStrictEqual(findUnused(["a = 1", "b = a", "c = 2", "log(b)"]), ["c"]);
assert.deepStrictEqual(findUnused(["a = 1", "b = a", "c = 2", "log(c)"]), ["a", "b"]);
assert.deepStrictEqual(findUnused(["a = 1", "b = a", "c = b", "d = a", "log(c)"]), ["d"]);
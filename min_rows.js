/*
 https://buttondown.com/cassidoo/archive/never-give-up-on-your-dreams-no-matter-how/

You are given an array of people represented by integers, 
where each number corresponds to the number of people in a group. 
Determine the minimum number of rows required to seat everyone 
such that no group is split across different rows. 
You can assume no group will be larger than a given row size!

Example:

let rowSize = 10

> minRows([4, 8, 3, 5, 6], rowSize)
> 3

> minRows([4, 5, 4, 3, 3], rowSize)
> 2

> minRows([7, 7, 8, 9, 6], rowSize)
> 5

*/
function minRows(groups, rowSize) {
  let rows = 1;
  let remaining = rowSize;
  while (groups.filter(size => size === -1).length < groups.length) {
    let [largest, index] = findLargest(groups, remaining);
    if (largest > -1) {
      groups[index] = -1
      remaining = remaining - largest;
    } else {
      rows++;
      remaining = rowSize - largest;
    }
  }

  return rows;
}

function findLargest(arr, max) {
  let largest = -1; 
  let index = -1;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] !== -1 && arr[i] > largest && arr[i] <= max) {
      largest = arr[i];
      index = i;
    }
  }
  return [largest, index]
}

const rowSize = 10;
console.log(minRows([4, 8, 3, 5, 6], rowSize));
console.log(minRows([4, 5, 4, 3, 3], rowSize));
console.log(minRows([7, 7, 8, 9, 6], rowSize));


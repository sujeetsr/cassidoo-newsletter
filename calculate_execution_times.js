/* 
https://buttondown.com/cassidoo/archive/yesterdays-home-runs-dont-win-todays-games-babe/

Given an array of function logs, where each log consists of a function name, 
a timestamp, and an event (either start or end), return the total execution time 
for each function. The timestamp is an integer representing milliseconds 
since the start of the program.

Examples:

calculateExecutionTimes([
    { name: "main", time: 0, event: "start" },
    { name: "subTask1", time: 5, event: "start" },
    { name: "subTask1", time: 10, event: "end" },
    { name: "subTask2", time: 15, event: "start" },
    { name: "subTask2", time: 20, event: "end" },
    { name: "main", time: 25, event: "end" }
])

{ main: 25, subTask1: 5, subTask2: 5 }

Run this file with `node calculate_execution_times.js` and you should see the tests pass
*/

var assert = require('assert');

function calculateExecutionTimes(logs) {
    const tmp = {};
    const times = {};
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        tmp[log.name] = tmp[log.name] ?? { start: undefined, end: undefined };
        tmp[log.name][log.event] = log.time;
        if (tmp[log.name].start !== undefined && tmp[log.name].end !== undefined) {
            times[log.name] = tmp[log.name].end - tmp[log.name].start
        }
    }
    return times;
}

const actual = calculateExecutionTimes([
    { name: "main", time: 0, event: "start" },
    { name: "subTask1", time: 5, event: "start" },
    { name: "subTask1", time: 10, event: "end" },
    { name: "subTask2", time: 15, event: "start" },
    { name: "subTask2", time: 20, event: "end" },
    { name: "main", time: 25, event: "end" }
]);
const expected = { main: 25, subTask1: 5, subTask2: 5 };
assert.deepStrictEqual(actual, expected);

const actual2 = calculateExecutionTimes([
    { name: "main", time: 0, event: "start" },
    { name: "subTask1", time: 5, event: "start" },
    { name: "subTask1", time: 10, event: "end" },
    { name: "subTask2", time: 15, event: "start" },
    { name: "subsubTask3", time: 17, event: "start" },
    { name: "subsubTask3", time: 19, event: "end" },
    { name: "subTask2", time: 20, event: "end" },
    { name: "subTask4", time: 21, event: "start" },
    { name: "subTask4", time: 25, event: "end" },
    { name: "main", time: 25, event: "end" }
])
const expected2 = { subTask1: 5, subsubTask3: 2, subTask2: 5, subTask4: 4, main: 25 }
assert.deepStrictEqual(actual2, expected2);
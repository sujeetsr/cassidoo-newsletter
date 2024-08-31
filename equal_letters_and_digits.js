/*
https://buttondown.com/cassidoo/archive/you-cant-turn-back-the-clock-but-you-can-wind-it/

Given a string s containing letters and digits, return the longest substring of s 
where the number of distinct letters is equal to the number of distinct digits.
If there are multiple substrings with the same length, return the one that appears first.

Example:
> equalLettersAndDigits("abc12345")
> "abc123"

> equalLettersAndDigits("a123b4c")
> "" // not possible with this example

> equalLettersAndDigits("a12bc34")
> "a12bc3"

*/


function isDigit(s) {
    return !isNaN(Number.parseInt(char));
}

function isLetter(s) {
    return s.match(/[a-zA-Z]/) !== null;
}

function isEqualLettersAndDigits(s) {
    let numDigits = 0;
    let numLetters = 0;
    for (let i=0; i<s.length; i++) {
        const char = s.charAt(i)
        if (!isNaN(Number.parseInt(char))) {
            numDigits++;
        } else if (char.match(/[a-zA-Z]/) !== null) {
            numLetters++;
        }
    }
    return s.length > 2 && isLetter(s[0]) && numDigits === numLetters;
}

function equalLettersAndDigits(s) {
    let substrings = [];
    let maxLength = 0;
    let maxLengthStrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substr = s.substring(i, j)
            substrings.push(substr);
            if (isEqualLettersAndDigits(substr)) {
                if (substr.length > maxLength) {
                    maxLengthStrings = [substr]
                    maxLength = substr.length;
                } else if (substr.length === maxLength) {
                    maxLengthStrings.push(substr);
                }
            }
        }
    }
    
    return maxLengthStrings?.[0] ?? '';	
}

console.log(equalLettersAndDigits("abc12345"));
console.log(equalLettersAndDigits("a123b4c"));
console.log(equalLettersAndDigits("a12bc34"));
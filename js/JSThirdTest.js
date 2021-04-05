"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false

function isNegative(num) {
    return num < 0;
}
// Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
//
// isTen(1) // false
// isTen(10) // true
// isTen('10') // false
function isTen(num) {
    return num === 10;
}
// Write a function named double that accepts a number and returns the number doubled.
//
// double(5) // 10
// double(20) // 40
function double(num) {
    return num * 2;
}
// Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
//
//     remove9s([7, 8, 9, 10]) // [7, 8, 10]
// remove9s([1, 2, 3])     // [1, 2, 3]
// remove9s([9, 9, 9])     // []
// function remove9s([7,8,9]){
//     return [remove9s.length - 1];
// }
function remove9s(input) {
    var result = [];
    input.forEach(function(item){
        if(item !== 9) {
            result.push(item)
        }
    });

    return result;

}

// Write a function named average that accepts an array of numbers and returns the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5
function average(x){
    var average = 0, numsLen = x.length;
    x.sort();
    if (numsLen % 2 === 0) {
        average = (x[numsLen / 2 - 1] + x[numsLen / 2]) / 2;
    } else {
        average = x[(numsLen - 1) / 2];
    }
    return average;
}
// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3
// function countOdds(x){
//     var array = 0;
//     for(var i = 0;i < x.length;i++){
//         if(x[i] % 2 !== 0){
//             array++;
//         }
//     }
//     return array;
// }
function countOdds(input) {
    var result = 0;
    input.forEach(function(n){
        if(n % 2 !== 0)
            result = result + 1;
    });

    return result;
}
// Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
//
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// // 100
// function averageSales(x){
//     var sales = 0;
//     for(var i = 0;i < x.length; i++){
//         sales +=x[i].price
//     }
//     return sales/x.length
// }

function averageSales(input) {
    var sum = 0;
    input.forEach(function(person) {
        sum = sum + person.sales;

    });
    return sum/input.length;
}
// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}
function convertNameToObject(string) {
    var names = string.split(' ')
    return {firstName: names[0], lastName: names[1]};
}
// convertNameToObject('Harry Potter'){firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject(`Ron Weasley`){firstName: 'Ron', lastName: 'Weasley'}
// Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
//
// countVowels('Hello, Codeup!') // 5
// countVowels('ABCDE!') // 2
function countVowels(x){
    let matched = x.match(/[aeiou]/gi)
    if (matched) {return matched.length}
    else {return 0};
}

// function countVowels(string) {
//     var sum = 0;
//     var vowels = ["a", "e", "i", "o", "u"];
//     string.split("").foreach(function(letter: T ){
//         if(vowel === letter) {
//             sum = sum + 1
//         }
//     })
// });
//     return sum;
// }
// Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
//     word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
// analyzeWord('codeup')
// // { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }
function analyzeWord(input) {

    return {
        word: input,
        numberOfLetters: input.length,
        numberOfVowels: countVowels(input)

    }

}




// Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
//
// capitalizeName('ron weasley') // "Ron Weasley"
// capitalizeName('Harry Potter') // "Harry Potter"
// capitalizeName('Nathan drake') // "Nathan Drake"
// function capitalizeName(name) {
//     return name.replace(/\b(\w)/g, s => s.toUpperCase());
// }
function capitalizeName(input) {
    var names = input.split(' ');
    console.log('capitalizeName', names);
    return capitalizeWord(names[0]) + " " + capitalizeWord(names[1]);
}

function capitalizeWord(s) {
    if (typeof s !== 'string'){
        return '';
    }
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

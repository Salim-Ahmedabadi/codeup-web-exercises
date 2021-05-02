//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
    var onMarsRightNow = false;
    console.log(onMarsRightNow);

// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
    var fruits = ["mango","banana","guava","kiwi","strawberry"];
    console.log(fruits);

// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini
    var vegetables = ["eggplant","broccoli","carrot","cauliflower","zucchini"];
    console.log(vegetables);

//Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

//Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push("tomato");
console.log(fruits);

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.
vegetables.push("tomato");
console.log(vegetables);

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
var someNumbers = [1,2,3,4,5,6,7,8,9,10];
someNumbers.reverse();
console.log(someNumbers);

//Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();
console.log(vegetables);

// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort(); fruits.reverse();
console.log(fruits);

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
var fruitsAndVeggies = fruits.concat(vegetables);
console.log(fruitsAndVeggies);

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello (name){
    return "Hello, " + name + "!";
}
console.log(sayHello("Salim"));

// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
function addOne (x) {
    return x + 1;
}

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// Is zero itself positive? What about infinity? What about negative infinity?
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators for guidance with JS comparison operators.
function isPositive(num) {
    return num > 0;
}
// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
function isNegative(num) {
    return num < 0;
}
// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd (number) {
    return (number % 2 !== 0);
}
// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(number) {
    return (number % 2 === 0);
}
// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
function identity(input){
    return input;
}
//Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
    function isPositiveOdd (num) {
        return (num % 2 !== 0 && num > 0);
    }
    // Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven(num) {
    return (num % 2 === 0 && num < 0)
}
// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
function isNegativeOdd(num) {
    return (num % 2 !== 0 && num < 0);
}
// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
function isNegativeEven(num) {
    return (num % 2 === 0 && num < 0);
}
// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
function half(num) {
    return num/2;
}
//Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
function double(num) {
    return num * 2;
}
// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
function triple(num) {
    return num * 3;
}
// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
function absoluteValue(num) {
    var absolute = Math.abs(num);
    return absolute;
}
// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
function isMultipleOfThree(num) {
    return num % 3 === 0;
}
// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
function isMultipleOfFive(num) {
    return num % 5 === 0;
}
//Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
function isMultipleOfBothThreeAndFive(num) {
    return num % 3 === 0 && num % 5 === 0;
}
// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
function square(num) {
    return num * num;
}
// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
function add(num1,num2) {
    return num1 + num2;
}
// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
function cube(num) {
    return Math.pow(num, 3);
}
// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
function squareRoot (num) {
    return Math.sqrt(num);
}
// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
function subtract (num1, num2) {
    return num1 - num2;
}
// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
function multiply (num1, num2) {
    return num1 * num2;
}
// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
function divide (num1, num2) {
    return num1 / num2;
}
// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
function quotient (num1, num2) {
    return Math.floor(num1 / num2);
}

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
function remainder (num1, num2) {
    return Math.round(num1 % num2);
}
// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
function sumOfSquares (num1, num2) {
    var sqr1 = Math.pow(num1, 2);
    var sqr2 = Math.pow(num2, 2);
    return sqr1 + sqr2;
}
// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
function timesTwoPlusThree (num) {
    var mul = num * 2;
    return mul + 3;
}
// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
function areaOfRectangle (width, length) {
    return width * length;
}
// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
function areaOfCircle (radius) {
    return Math.PI * Math.pow(radius, 2);
}
// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
function circumference (radius) {
    return (2 * Math.PI) * radius;
}
// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel (str) {
    var noCase = str.toLowerCase();
    return noCase === 'a' || noCase === 'e'|| noCase === 'i' || noCase === 'o' || noCase === 'u';
}
//Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
function hasVowels(str) {
    var vowels = 'aeiou';
    var vcount = 0;
    for (var x = 0; x < str.length; x++) {
        if (vowels.toLowerCase().indexOf(str[x]) !== -1) {
            vcount++;
        }
    }
    return vcount > 0;
}
// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.

function countVowels (str) {
    var vowels = 'aeiou';
    var vcount = 0;
    for (var x = 0; x < str.length; x++) {
        if (vowels.toLowerCase().indexOf(str[x]) !== -1) {
            vcount++;
        }
    }
    return vcount;
}
// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels

function removeVowels (str) {
    var newStr = "";
    for (var x = 0; x < str.length; x++) {
        if (!isVowel(str[x])) {
            newStr += str[x]
        }
    }
    console.log(newStr)
    return newStr;
}
// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
function startsWithVowel (str) {
    if(!isVowel(str[0])){
        return false;
    }else {
        return true;
    }
}
// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
function endsWithVowel (str) {
    var newStr = str.split("");
    var reverseArray = newStr.reverse();
    var jString = reverseArray.join("");
    if(!isVowel(jString[0])){
        return false;
    }else {
        return true;
    }
}
// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
function startsAndEndsWithVowel(str) {
    if(!startsWithVowel(str[0]) && !endsWithVowel(str[0])){
        return false;
    }else {
        return true;
    }
}
//Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
function first (input) {
    return input[0];
}
// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
function second (input) {
    return input[1];
}
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


console.log("Hello from external JavaScript")
alert("Welcome to my Website!.")
var colorInput = prompt("What is your favorite color?")
alert("Great, " + colorInput + " is my favorite color too!")
//Exercise 3 Question 1.
// No of Days lmermaid = 3;
// No of Days bBear = 5;
// No of Days hCules = 1;
rentalPrice = 3.00;
var lMermaid = prompt ("How many days did you rent littleMermaid?")
var bBear = prompt ("How many days did you rent brotherBear?")
var hCules = prompt ("How many days did you rent herCules?")
var rentalPrice = prompt ("What was the price of the rental?")
var totalPay = (lMermaid * rentalPrice) + (bBear * rentalPrice) + (hCules * rentalPrice)
console.log(totalPay);
alert("My total price today is $" + totalPay)
//Exercise 3 Question 2.
//No of hours worked facebook = 10;
//No of hours worked google = 6;
//No of hours worked amazon = 4;
fpays = 350.00;
gPays = 400.00;
aPays = 380.00;
var facebook = prompt ("How many hours did I work for facebook?")
var google = prompt ("Hoe many hours did I work for google?")
var amazon = prompt ("How many hours did I work for amazon?")
var fullPay = (facebook * fpays) + (google * gPays) + (amazon * aPays)
console.log(fullPay)
alert("The total amount all companies paid is $" + fullPay)

var classIsFull = confirm ("Is the class full?")

var hasScheduleConflicts = confirm ("Do you have a class at 2:30 already?")

alert("You can join the class is a " + (!classIsFull && !hasScheduleConflicts) + "statement.")

var hasMoreThanTwoItems = confirm ("Are you buying more than two items?")

var isOfferValid = confirm ("Is this offer still valid?")

var isPremiumMember = confirm ("Are you a premium member?")

var hasEnoughItems = hasMoreThanTwoItems || isPremiumMember

var canUserUseOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid

alert("You can use this offer is a " + canUserUseOffer + "statement.")


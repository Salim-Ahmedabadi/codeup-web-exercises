

    // function oddNumber() {
    //     for (var i = 1; i <= 25; i++) {
    //         var numberToSkip = prompt("Please type in a number between 1 and 50 :)");
    //         if (numberToSkip >= 1 && numberToSkip < 50 && numberToSkip % 2 === 1) {
    //             console.log("Number to skip is: " + numberToSkip);
    //             break;
    //         }
    //     }
    //
    //     for (var number = 1; number <= 50; number++) {
    //         if (number % 2 === 0) {
    //             // number is even
    //             // skip the even number and continue with the next iteration
    //
    //         } else if (number === numberToSkip) {
    //             console.log("Yikes! Skipping number: " + numberToSkip);
    //             continue;
    //         } else {
    //             console.log("Here is an odd number: " + number);
    //         }
    //     }
    // }
    //
    // oddNumber();

var usersNumber = Number(prompt("Give me an odd number between 1 and 50"));
function  isNumberInRange(num){
    return num >= 1 && num <= 50;

}
function isNumberEven(num){
    return num % 2 === 0;
}

while (true){

    if (!isNumberEven(usersNumber) && isNumberInRange(usersNumber)){
        break;

    }
    usersNumber = Number(prompt("Give me an odd number between 1 and 50"));


}
    console.log("Number to skip is: " + usersNumber);

for (var i = 1; i <= 49; i += 2){
    if (i === usersNumber){
        console.log("Yikes! Skipping number: " + usersNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
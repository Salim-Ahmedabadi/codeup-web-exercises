// var onMarsRightNow = false;
// console.log(onMarsRightNow);
//
// function sayHello(name){
//     return "Hello, " + name + "!";
// }
// console.log(sayHello("Salim"));
// var helloMessage = sayHello("Aisha");
// console.log(helloMessage);

function calculateTax(total, percent) {
    if (typeof total === "number" && typeof percent === "number") {
        var totalWithTax = total * (1 + (percent / 100));
        return console.log("$" + totalWithTax.toFixed(2));
    }
    return console.log(false);
}
calculateTax(25, 8)              // "$27.00"
calculateTax(10, 12)             // "$11.20"
calculateTax(120, 15.5)           //    "$138.60"
calculateTax(10, true)           // false
calculateTax([1, 2, 3], 10)      // false
calculateTax("Codeup", 100)      // false
calculateTax()                   // false
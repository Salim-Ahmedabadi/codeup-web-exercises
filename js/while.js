// var number = 2
// while(number <= 65536){
//     console.log(number)
//     number = number * 2
// }
// function icecreamSold() {
//
//     var allCones = Math.floor(Math.random() * 50) + 50;
//     do{
//         var conesSold =  Math.floor(Math.random() * 5) + 1;
//         if (conesSold > allCones){
//             console.log("Cannot sell you " + conesSold + " as I only have " + allCones + " left.");
//             continue;
//         }
//         console.log(conesSold + " cones sold...");
//         allCones = allCones - conesSold;
//     }while (allCones > 0);
//
//     console.log("All cones have been sold!");
//
// }
// icecreamSold();
var number = 2;
while (number <= 65536){
    console.log(number);
    number = number * 2
    //number *= 2;

}
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You have " + allCones + " Cones to sell today!!");
do {
    var requestedCones = Math.floor(Math.random() * 5) + 1;

    if (requestedCones <= allCones){
        //This means you can sell the cones
        allCones = allCones - requestedCones;
        console.log("You sold  " + requestedCones +" cones, and have " + allCones +"cones left.");
    }else {
        //This means you do  ot have cones to sell
        console.log("n I don't have " + requestedCones + " cones, I only have " + allCones + "cones left.");
    }
}while (allCones > 0)

console.log("I sold all my cones for the day!!")
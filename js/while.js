var number = 2
while(number <= 65536){
    console.log(number)
    number = number * 2
}
function icecreamSold() {

    var allCones = Math.floor(Math.random() * 50) + 50;
    do{
        var conesSold =  Math.floor(Math.random() * 5) + 1;
        if (conesSold > allCones){
            console.log("Cannot sell you " + conesSold + " as I only have " + allCones + " left.");
            continue;
        }
        console.log(conesSold + " cones sold...");
        allCones = allCones - conesSold;
    }while (allCones > 0);

    console.log("All cones have been sold!");

}
icecreamSold();
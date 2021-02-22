
function showMultiplicationTable (num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i))
    }

    }
    showMultiplicationTable(7);

for( var i = 1 ; i <=10 ; i++){
    var random = Math.floor((Math.random() * (200 - 20 + 1) + 20));
    if(random % 2 === 0){
        console.log(random + " is even!");
    }else{
        console.log( random  + " is odd!");
    }
}


for (var outerLoop = 1; outerLoop <= 9; outerLoop++){
    var output = "";
    for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
        output = output + outerLoop;
    }
        console.log(output);

    }

for ( i = 100; i >= 5; i -= 5){
    console.log(i);
}
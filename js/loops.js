
function showMultiplicationTable () {
    for (var i = 1; i <= 10; i++) {
        var result = i * 7;
        console.log("7 * " + i + " = " + result);
    }

    }
    showMultiplicationTable();

for( var i = 1 ; i <=10 ; i++){
    var random = Math.floor((Math.random() * (200 - 20 + 1) + 20));
    if(random % 2 === 0){
        console.log(random + " is even");
    }else{
        console.log( random  + " is odd");
    }
}

for (var i = 1; i <= 10; i--) {
    var string = i.toString()
   var refactor = string.repeat(i)
   var number = parseInt(refactor)
    console.log(number)
}
// second way by using function
function numberPyramid(){
    for (var i = 1; i < 10; i++){
        var output = "";
        for (var j = 1;j <= i; j++){
            output = output.concat(i);
        }
        console.log(output);
    }
}

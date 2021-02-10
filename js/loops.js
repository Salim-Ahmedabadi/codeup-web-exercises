//Loops lecture
var areWeThereYet;

while(!areWeThereYet){
    areWeThereYet = confirm("Are we there yet?")
}
var haveToy = confirm("Can I have a toy please");

while(!haveToy){
    haveToy = confirm("Please")
}
if(haveToy){
    alert("Thank you!!!")
}
var waitingForToy = confirm("Are we still waiting for his toy");

while(waitingForToy){
    waitingForToy = confirm("How about now")
}
if(!waitingForToy){
    alert("Thank you!!!")
}
var x = 0;
while (x < 10){
    x++;
    console.log(x)
}
var y = 10;
while (y > 0) {
    y--;
    console.log(y)
}
var z = 10;
while (z > 0) {
    //z--;
    console.log(z--)
}

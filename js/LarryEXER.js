// When a user hits the "g" key, the background of the page should turn purple.
// var counter = 0;
// var arr = [];
// var solution = [49,50,51];
var arr = [];
        $(document).keyup(function(event){
             console.log(event.keyCode);
            arr.push(event.keyCode)
            if (event.keyCode === 71){
                $("body").css("background-color" , "purple");

            }
        //     if (event.keyCode === 13){
        //         counter += 1;
        //         console.log(counter);
        //     }
        //
        //         if(arr.join(",") === solution.join(",")){
        //             alert("You get a 50% discount");
        //         }
        // })

//     Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.
            var counter = 0;
if (event.keyCode === 13){
    counter += 1;
    console.log(counter);
}


//     When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".
            var solution = [49,50,51];
            if(arr.join(",") === solution.join(",")){
    alert("You get a 50% discount");
}
})





// $(document).ready(function () {
//     console.log("fully loaded and ready to go!")
// });
//
// console.log("hello jQuery!");
//     $(document).ready(function() {
//         $('.important').css('background-color', 'skyblue');
//         $('.important').html('Salim Rocks');
//
//
//     });
$('h1').click(function(e){
    $('h1').css({'background-color': 'red'})
    $('h1').html('I just clicked it')
    console.log(e);
})
$('p').dblclick(function(e){
    $('p').css({'font-weight': '18px'})
    $('p').html('Too much clicking')
    console.log(e);
})
$('li').hover(function(e){
    console.log('enter');
    $(e.target).css('background', 'red')
},function(e){
    console.log('leave')
    $(e.target).css('background', 'black')
})
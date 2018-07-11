$(document).ready(function() {
 

/*
// removes class makeRed....adds class makeBorder when mouse over button
$("button").mouseenter(function(){
 $(this).removeClass("makeRed").addClass("makeBorder");
});

//removes class makeBorder and adds class makeRed when mouse leaves button
$("button").mouseleave(function(){
 $("button").removeClass("makeBorder").addClass("makeRed");
});

*/

/*
// slideToggles the paragraph when button pressed
$("button").click(function(){
 $("p").slideToggle(3000);
});
*/

/*
//hide/show paragraphs when either button is pressed
$("button").click(function(){
 $("p").hide(3000).show(3000);
});
*/

// fade in/out of paragraphs with either button pressed

$("button").click(function(){
 $("p").fadeOut(1000).fadeIn(1000);
});
}); 





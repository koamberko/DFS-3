var circle = $(".circle");

$( document ).on( "mousemove", function( event ) {
   var screenWidth = $( document ).width();
   var cursorX = event.pageX;
   var cursorY = event.pageY;
   $(".circle").css({
     "left": cursorX,
     "top": cursorY
  });
});

var word = $(".word");

$( document ).on( "mousemove", function( event ) {
   var screenWidth = $( document ).width();
   var cursorX = event.pageX;
   var cursorY = event.pageY;
   $(".word").css({
     "right": cursorX,
     "bottom": cursorY
  });
});

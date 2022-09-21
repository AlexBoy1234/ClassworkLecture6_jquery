$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#0000FF",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
});

$(document).ready(function(){
    $("p").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});

$(document).ready(function(){
    $(".up").click(function(){
        $("p").slideUp();
        $("ul").slideUp();
    });
    $(".down").click(function(){
        $("p").slideDown();
        $("ul").slideDown();
    });
});


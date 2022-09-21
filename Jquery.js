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

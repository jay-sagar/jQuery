// $(document).ready(function () {
//     $("h1").css("color", "red");
// });

// Above code means if the jQuery script is loaded in title section then it will wait
// till the jQuery is not fully loaded

// $("h1").css("color", "red"); // it there is one value it will select and if there is two then it will update

$("button"); // it will select one and all

$("h1").addClass("big-title margine-50");

$("h1").hasClass("margine-50"); // it will check if it there or not

$("h1").text("Bye");
$("button").html("<em>Hey</em>"); 

$("img").attr("src"); // attr -> attribute
$("a").attr("href", "https://www.yahoo.com");

// Event Listener

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "red");
});

$(document).keydown(function(event) {
    $("h1").text(event.key);
});

// best way for eventListener -> on
$("h1").on("click", function() {
    $("h1").css("color", "purple");
});

$("h1").before("<button> New </button>"); // it will add the html before h1
$("h1").after("<button> New </button>"); // it will add the html after h1

$("h1").prepend("<button> prepend </button>"); // it will add just before the h1 in the same line
$("h1").append("<button> append </button>");    // it will add just after the h1 in the same line

$(".animation").on("click", function() {
    $("h1").animate({opacity: 0.5});
});

// chaining in animation
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
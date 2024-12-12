$(document).ready(function() {
    $("nav ul li a").hover(
        function() {
            $(this).css("color", "#FFFF99");
        },
        function() {
            $(this).css("color", "white");
        }
    );

    console.log("Website loaded successfully!");
});

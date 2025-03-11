// animation khi nhấn chọn section

// console.log("asdf");
function loadSection(idSection, time) {
    $("html, body").animate({
        scrollTop: ($(idSection).offset().top + 10)
    }, time); // 600 ms
}
    


$(document).ready(function() {
    var $listA = $("#menu").find("a");

    loadSection("#home", 400);

    $listA.on("click", function () {
        // console.log("clicked");
        var idSubmenu = $(this).attr("href");
        loadSection(idSubmenu, 600);
    });
});
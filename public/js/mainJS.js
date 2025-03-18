// animation khi nhấn chọn section

// console.log("asdf");
function loadSection(idSection, time) {
    $("html, body").animate({
        scrollTop: ($(idSection).offset().top + 10)
    }, time); // 600 ms
}
    
$(document).ready(function() {
    var $listA = $("#menu").find("a");

    // loadSection("#home", 400);
    // setTimeout(() => {
    //     $("#skills").find(".nonslider-skill-detail").addClass("start-nonslider");
    //     console.log("add");
    // }, 400);

    $listA.on("click", function () {
        // console.log("clicked");
        var idSubmenu = $(this).attr("href");
        loadSection(idSubmenu, 600);
    });
});

// --------------------- menu bar (dark light - bar)
$(document).ready(function(){
    var $darklightbar = $("#dark-light-bar");
    var $header = $("#header");

    $darklightbar.on("click", function() {
        // console.log("click menu bar");
        
        $darklightbar.toggleClass("switch-light");
        $darklightbar.toggleClass("switch-dark");

        $darklightbar.find("#switch-bar").toggleClass("switch-light");
        $darklightbar.find("#switch-bar").toggleClass("switch-dark");

        changeTheme();
    });

    

    

    
});

var arr_theme = [
    "body"
];

function changeTheme() {
    arr_theme.forEach(obj => {
        console.log(obj);

        // transition: top 0.5s, background-color 0.5s;

        $(obj).css("transition", "color 0.5s, background-color 0.5s");

        $(obj).toggleClass("light");
        $(obj).toggleClass("dark");
    });
}
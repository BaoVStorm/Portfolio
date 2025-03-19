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
    "body",
    "#name",
    ".dot-pattern",
    ".hi",
    ".text-main",
    ".background-main",
    ".avatar-container",
    "#introduce-avatar",
    ".about-achie-box-content",
    ".percent-nonslider-skill",
    ".nonslider-skill-detail",
    ".title-section",
    ".elementor-spacer-inner",
    ".detail-box-project",
    ".box-contact",
    "#footer",
    "#header"
];

$(document).ready(function(){
    arr_theme.forEach(obj => {
        $(obj).css("transition", "color 0.5s, background-color 0.5s, border-color 0.5s");
        $(obj).addClass("light");
    });
});

function changeTheme() {

    var theme = 0;
    
    // Change Class (dark - light)
    arr_theme.forEach(obj => {
        // console.log(obj);

        $(obj).toggleClass("light");
        $(obj).toggleClass("dark");

        if($(obj).hasClass("dark"))
            theme = 1; // dark
        else    
            theme = 0; // light
    });

    // change image (dark - light)
    for(var query in change_img_theme) {
        $(query).attr("src", change_img_theme[query][theme]);
    }
    
}

var change_img_theme = {
    "#logo-header img": [
        "assets/logo/VStorm.png",
        "assets/logo/VStorm_dark.png"
    ],
    "#contact .logo-contact img": [
        "assets/logo/logo.png",
        "assets/logo/logo_dark.png"
    ]
    //,
    // "avatar": [
    //     "assets/",
    //     "assets/"
    // ]
};


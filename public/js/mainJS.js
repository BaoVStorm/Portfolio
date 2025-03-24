// animation khi nhấn chọn section

// console.log("asdf");
function loadSection(idSection, time) {
    $("html, body").animate({
        scrollTop: ($(idSection).offset().top + 10)
    }, time); // 600 ms
}
    
$(document).ready(function() {
    var $listA = $("#menu").find("a");

    // loadSection("#home", 500);
    // setTimeout(() => {
    //     $("#skills").find(".nonslider-skill-detail").addClass("start-nonslider");
    //     console.log("add");
    // }, 500);

    $listA.on("click", function () {
        // console.log("clicked");
        var idSubmenu = $(this).attr("href");
        loadSection(idSubmenu, 500);
    });
});

// --------------------- menu bar (dark light - bar)
function darkLightBarEvent() {
    var $darklightbar = $("#dark-light-bar");

    $darklightbar.toggleClass("switch-light");
    $darklightbar.toggleClass("switch-dark");

    $darklightbar.find("#switch-bar").toggleClass("switch-light");
    $darklightbar.find("#switch-bar").toggleClass("switch-dark");

    changeTheme();
}

$(document).ready(function(){
    var $darklightbar = $("#dark-light-bar");
    // var $header = $("#header");

    $darklightbar.on("click", function() {
        // console.log("click menu bar");
        
        darkLightBarEvent();
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
    "#header",
    "#menu-bar",
    "#job",
    "#animation-job",
    "#count"
];

$(document).ready(function(){
    arr_theme.forEach(obj => {
        if(obj == "#header")
            $(obj).css("transition", "color 0.5s, background-color 0.5s, border-color 0.5s, left 0.6s");
        else
            $(obj).css("transition", "color 0.5s, background-color 0.5s, border-color 0.5s");
        $(obj).addClass("light");
    });
});

var change_img_theme = {
    "#logo-header img": [
        "assets/logo/VS_logo.png",
        "assets/logo/VS_logo_dark.png"
    ],
    "#contact .logo-contact img": [
        "assets/logo/logo.png",
        "assets/logo/logo_dark.png"
    ],
    "#introduce-avatar img": [
        "assets/images/avatar.jpeg",
        "assets/images/avatar_dark.JPG"
    ]
};

function changeTheme() {

    var theme = 0;
    
    // Change Class (dark - light)
    arr_theme.forEach(obj => {
        // console.log(obj);

        $(obj).toggleClass("light");
        $(obj).toggleClass("dark");

        if($(obj).hasClass("dark")) {
            theme = 1; // dark
            saveLocalStorageTheme("dark");
        }  
        else { 
            theme = 0; // light
            saveLocalStorageTheme("light");
        }
    });

    // change image (dark - light)
    for(var query in change_img_theme) {
        $(query).attr("src", change_img_theme[query][theme]);
        
        // $(query).addClass("disable_img");
        // $(query).eq(theme).removeClass("disable_img");

        // console.log()
    }
    
}

// ------------------------- Save LocalStorage theme (dark-light)
function loadLocalStorageTheme() {

    // kiểm tra tồn tại, mặc định là light
    if(localStorage.getItem("theme") !== null)
        return "light";

    return localStorage.getItem("theme");
}

function saveLocalStorageTheme(theme) {
    localStorage.setItem("theme", theme);
}

$(document).ready(function() {
    

    // đảm bảo chạy sau cùng tất cả các document
    setTimeout(function() {
        if(localStorage.getItem("theme") !== null)
            console.log("Load Theme: " + localStorage.getItem("theme"));

        if(localStorage.getItem("theme") == "dark")
            darkLightBarEvent();
        else {
            var avatar_img = "#introduce-avatar img"

            $(avatar_img).attr("src", change_img_theme[avatar_img][0]);
        }
    }, 0);
    
});
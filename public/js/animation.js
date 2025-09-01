// Function
function checkClose($object, value) {
    // Lấy vị trí của phần tử so với đầu trang
    let position = $object.offset().top;

    // Lấy chiều cao của màn hình (viewport height)
    let screenHeight = $(window).height();

    // Lấy vị trí cuộn hiện tại của trang (scroll position)
    let scrollTop = $(window).scrollTop();

    return position < scrollTop + screenHeight - value;
}


// Home Section
function loadHome() {

}

// About Section
let isLoadAbout = false;
function loadAbout($about) {
    if(isLoadAbout)
        return

    let arr_obj = [
        ".about-info",
        ".about-achie-head",
        ".about-chie-des-title",
        ".about-chie-des-content",
        ".box-download"
    ];

    if(checkClose($about, 450)) {
        isLoadAbout = true;

        arr_obj.forEach(obj => {
            $about.find(obj).addClass("load");
        });
    }
}

// Skill Section
function loadSkill($skill) {
    var $nonslider = $skill.find(".nonslider-skill-detail");

    if(!$nonslider.hasClass("start-nonslider"))
        return

    if(checkClose($skill, 250)) {
        $nonslider.removeClass("start-nonslider");
    }
}

$(document).ready(function () {
    var $skill = $("#skills");
    loadSkill($skill);

    // about
    var $about = $("#about");    
    loadAbout($about)
    
    $(window).on("scroll", function () {
        loadSkill($skill);
        loadAbout($about);
    });
});
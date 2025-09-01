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
        ".box-download",
    ];

    if(checkClose($about, 450)) {
        isLoadAbout = true;

        arr_obj.forEach(obj => {
            $about.find(obj).addClass("load");
        });
    }
}

// Skill Section
let isLoadSkill = false;
function loadSkill($skill) {
    if(isLoadSkill)
        return

    let arr_obj = [
        ".skillbox1",
        ".skillbox2",
        ".skillbox3",
    ];

    if(checkClose($skill, 250)) {
        isLoadSkill = true;

        arr_obj.forEach(obj => {
            $skill.find(obj).addClass("load");
        });

        setTimeout(() => {
            $skill.find(".nonslider-skill-detail").removeClass("start-nonslider");
        }, 200);
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
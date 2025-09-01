// Function
function checkClose($object) {
    // Lấy vị trí của phần tử so với đầu trang
    let position = $object.offset().top;

    // Lấy chiều cao của màn hình (viewport height)
    let screenHeight = $(window).height();

    // Lấy vị trí cuộn hiện tại của trang (scroll position)
    let scrollTop = $(window).scrollTop();

    return position < scrollTop + screenHeight - 250;
}


// Home Section



// Skill Section
function loadSkill($skill) {
    var $nonslider = $skill.find(".nonslider-skill-detail");

    if(!$nonslider.hasClass("start-nonslider"))
        return

    if(checkClose($skill)) {
        $nonslider.removeClass("start-nonslider");
    }
}

$(document).ready(function () {
    var $skill = $("#skills");
    loadSkill($skill);

    $(window).on("scroll", function () {
        loadSkill($skill);
    });
});
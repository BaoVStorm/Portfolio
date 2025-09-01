function loadAnimation($skill) {
    var $nonslider = $skill.find(".nonslider-skill-detail");

    if(!$nonslider.hasClass("start-nonslider"))
        return

    // Lấy vị trí của phần tử so với đầu trang
    let position = $skill.offset().top;

    // Lấy chiều cao của màn hình (viewport height)
    let screenHeight = $(window).height();

    // Lấy vị trí cuộn hiện tại của trang (scroll position)
    let scrollTop = $(window).scrollTop();

    if(position < scrollTop + screenHeight - 250) {
        $nonslider.removeClass("start-nonslider");
    }
}

$(document).ready(function () {
    var $skill = $("#skills");
    loadAnimation($skill);

    $(window).on("scroll", function () {
        loadAnimation($skill);
    });
});
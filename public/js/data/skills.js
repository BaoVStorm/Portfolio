let high_percent = 88;

let list_skills = {
    "#programming-language": {
        "c, c++": 92,
        "html, css": 88,
        "php": 76,
        "python": 82,
        "java": 75,
        "sql": 86,
        "javascript": 83,
        "C# With Unity - Game Dev": 85
    },
    "#soft-skill": {
        "creativity": 87,
        "flexibility": 87,
        "communication": 69
    }, 
    "#hard-skill": {
        "Data Structures & Algorithms": 92,
        "Math & Physics": 97,
        "Design & UI/UX": 90
    }
};


function loadSkillSection () {
    for(skill in list_skills) {
        // add skill into skills section
        var $skill = $(skill);
    
        for(var detail_skill in list_skills[skill]) {
            var percent = list_skills[skill][detail_skill];

            var $con_skill = $(`
                <div class="detail-box-skill">
                    <span class="percent-nonslider-skill">${percent}</span>
                    <div class="content-box-skill">
                        <span class="name-detail-box-skill">${detail_skill}</span>
                        <div class="nonslider-skill">
                            <div class="nonslider-skill-detail start-nonslider"></div>
                        </div>
                    </div>
                </div>
            `);

            $skill.append($con_skill);

            // edit color slider
            var $nonslider = $con_skill.find(".nonslider-skill-detail")

            // $nonslider.css("transition", "width 0.6s");
            $nonslider.css("width", `${percent}%`);
                
            if(percent >= high_percent) {
                var percent_color = 50 + (percent - high_percent) * 50 / (100 - high_percent);

                let bgColor = $nonslider.css("background-color");
                
                $con_skill.find(".nonslider-skill-detail").css("background-color", `
                    color-mix(in srgb, ${bgColor} ${100 - percent_color}%,rgb(255, 34, 34) ${percent_color}%)
                    `
                );
            }
        }
    }
}
let check_animation_skill = true

$(document).ready(function() {
    loadSkillSection();
});

function loadAnimation() {
    var $skill = $("#skills");

    // Lấy vị trí của phần tử so với đầu trang
    let position = $skill.offset().top;

    // Lấy chiều cao của màn hình (viewport height)
    let screenHeight = $(window).height();

    // Lấy vị trí cuộn hiện tại của trang (scroll position)
    let scrollTop = $(window).scrollTop();

    if(position < scrollTop + screenHeight - 250) {
        check_animation_skill = false
        $skill.find(".nonslider-skill-detail").removeClass("start-nonslider");
    }
}

$(document).ready(function () {
    loadAnimation();

    $(window).on("scroll", function () {
        if(check_animation_skill) {
            loadAnimation();
        }
    });
});
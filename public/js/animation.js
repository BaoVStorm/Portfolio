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

    if(checkClose($skill, 400)) {
        isLoadSkill = true;

        arr_obj.forEach(obj => {
            $skill.find(obj).addClass("load");
        });

        setTimeout(() => {
            $skill.find(".nonslider-skill-detail").removeClass("start-nonslider");
        }, 200);
    }
}

// Projects
let isLoadProject = false;
function loadProject($project) {
    if(isLoadProject)
        return;

    let arr_obj = [
        ".box-project",
    ];

    if(checkClose($project, 400)) {
        isLoadProject = true;

        arr_obj.forEach(obj => {
            $project.find(obj).addClass("load");
        });
    }
}

// Experiences
let isLoadExperience = false;
function loadExperience($experience) {
    if(isLoadExperience)
        return;

    let arr_obj = [
        ".box-exp",
    ];

    if(checkClose($experience, 400)) {
        isLoadExperience = true;

        arr_obj.forEach(obj => {
            $experience.find(obj).addClass("load");
        });
    }
}

// Contact
let isLoadContact = false;
function loadContact($contact) {
    if(isLoadContact)
        return;

    let arr_obj = [
        "form.detail-box-contact",
        ".detail-box-contact",
        ".box2-contact"
    ];

    if(checkClose($contact, 400)) {
        isLoadContact = true;

        arr_obj.forEach(obj => {
            $contact.find(obj).addClass("load");
        });
    }
}

$(document).ready(function () {
    // about
    var $about = $("#about");    

    // skill
    var $skill = $("#skills");
    
    // project
    var $project = $("#projects");

    // experience
    var $experience = $("#experience");

    // contact
    var $contact = $("#contact");

    $(window).on("scroll", function () {
        loadAbout($about);
        loadSkill($skill);
        loadProject($project);
        loadExperience($experience);
        loadContact($contact);
    });
});
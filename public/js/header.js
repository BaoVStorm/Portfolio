let nameClassHL = "highlight-submenu";

let $hightlightHeader = null;

let list_submenu = {};
let last_submenu = null;

function loadSubmenu() {
    $("#menu").find(".subnemu").each(function() {
        var idSubmenu = $(this).find("a").attr("href").substring(1);
        list_submenu[idSubmenu] = $(this);

        // console.log(idSubmenu);
    });

    hightLight_Header();
}

function hightLight_Header() {
    var window_pos = $(window).scrollTop();

    $("section").each(function() {
        var section_pos_top = $(this).offset().top;
        var section_height = $(this).outerHeight();
        var section_pos_bottom = section_pos_top + section_height;

        // console.log("â");

        if(section_pos_bottom - section_height / 2 > window_pos && window_pos >= section_pos_top) {
            if(last_submenu != null) {
                last_submenu.removeClass(nameClassHL);
            }
            
            idSubmenu = $(this).attr("id");

            if(list_submenu[idSubmenu] != null) {
                list_submenu[idSubmenu].addClass(nameClassHL);

                // if(idSubmenu == "home")
                //     console.log("add");

                last_submenu = list_submenu[idSubmenu];
            }
            

            // console.log(idSubmenu);
            // console.log(list_submenu[idSubmenu]);
        }
    });
}

$(document).ready(function() {
    loadSubmenu();
});

$(window).on("scroll", function(){
    hightLight_Header();
}); 


// --------------------- menu button

$(document).ready(function(){
    var $menubar = $("#menu-bar");
    var $header = $("#header");

    $menubar.on("click", function() {
        // console.log("click menu bar");
        
        $header.toggleClass("close-header");
        // if($header.hasClass("close-header")) {
        //     $header.removeClass("close-header");

        //     $header.css("display", "flex");
        // }
        // else {
        //     $header.addClass("close-header");
            
        //     $header.css("display", "none");
        // }

        // if($header.is("#close-header")) {
        //     console.log("1");
        //     $header.attr("id", "close-header");
        // }
        // else {
        //     console.log("2");
        //     $header.attr("id", "close-header");

        // }
    });
});
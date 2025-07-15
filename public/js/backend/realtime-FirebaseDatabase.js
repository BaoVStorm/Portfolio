let connect_database = "https://myportfolio-website-cb461-default-rtdb.firebaseio.com/.json";

$(document).ready(function() {
    
    let lastVisit = localStorage.getItem("lastVisit");
    let now = new Date().getTime();
    let oneDay = 12 * 60 * 60 * 1000; // nữa ngày hay 12 tiếng sẽ reset

    if (!lastVisit || now - lastVisit > oneDay) {
        GET("count_access", "#total-visit", 1);
        localStorage.setItem("lastVisit", now);
    } else {
        GET("count_access", "#total-visit", 0);
    }

    GET('total_engagement', '#total-engagement', 0);

    // PATCH(35);
});

// -- Lấy dữ liệu (GET)
function GET(name, id, increment) {
    // console.log(`--- GET<${name}> Database (RealTime) - by VStorm so Proo ---`);

    // key <name>_lastDate

    fetch(connect_database)
        .then(response => response.json())
        .then(data => {
            var value = data[name] + increment;

            // reformat value
            var reformat_value = value.toLocaleString("de-DE");

            $(id).text(reformat_value);

            if(increment != 0)
                PATCH(name, value)
        })
        .catch(error => {
            console.error("Lỗi:", error)
        });
}


// -- Cập nhật một phần (PATCH)
function PATCH(name, value) {
    // console.log(`--- PATCH<${name}> Database (RealTime) - by VStorm so Proo ---`);

    var now = new Date();
    now.setHours(now.getHours() + 7); 
    var vnTime = now.toISOString();

    // key <name>_lastDate
    var date_name = name + "_lastDate";

    fetch(connect_database, {
        method: "PATCH",
        body: JSON.stringify({
            [name]: value,
            [date_name]: vnTime
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    // .then(data => console.log(data))
    .catch(error => console.error(error));
}


// window.GET = GET;

// export {GET}


// Add Engagements_event_listener

$(document).ready(function() {
    // $("a").each(function() {
    //     // console.log($(this));

    //     var last_value_attr = $(this).attr("onclick");
    //     if(last_value_attr == null)
    //          last_value_attr = "";

    //     last_value_attr += " GET('total_engagement', '#total-engagement', 1);";

    //     $(this).attr("onclick", last_value_attr);

    //     // console.log("attr: " + last_value_attr);  
    // });

    // $("a").on("mousedown", function(event) {
    
    //     if (event.which === 1 || event.which === 2) {
    //         console.log("Nhấn chuột trái vào:", this);
    //     } 
    // });

    $("a").on("mousedown", function(event) {
        if ($(this).hasClass('preventEvent')) {
            event.preventDefault();
            return; 
        }

        GET('total_engagement', '#total-engagement', 1);
    });
});
let connect_database = "https://myportfolio-website-cb461-default-rtdb.firebaseio.com/.json";

$(document).ready(function() {
    
    let lastVisit = localStorage.getItem("lastVisit");
    let now = new Date().getTime();
    // nữa ngày hay 12 tiếng sẽ reset
    let oneDay = 12 * 60 * 60 * 1000; 

    if (!lastVisit || now - lastVisit > oneDay) {
        GET("count_access", "#total-visit", 1);
        localStorage.setItem("lastVisit", now);
    } else {
        GET("count_access", "#total-visit", 0);
    }

    GET('total_engagement', '#total-engagement', 0);
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
    .catch(error => console.error(error));
}



// Add Engagements_event_listener

$(document).ready(function() {
    $("a").on("mousedown", function(event) {
        if ($(this).hasClass('preventEvent')) {
            event.preventDefault();
            return; 
        }

        GET('total_engagement', '#total-engagement', 1);
    });
});
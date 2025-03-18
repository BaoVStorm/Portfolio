list_exp = [
    {
        "from": "March 1, 2028",
        "to": "September 1, 2030",
        "name_company": "Viettel",
        "full_name": "Viettel Military Industry and Telecoms Group",
        "location": "HCM - VietNam",
        "job": "Software Engineer",
        "des_job": "<strong>Just My Dream...</strong>"
    }, 
    {
        "from": "october 1, 2030",
        "to": "March 1, 2035",
        "name_company": "VNG Corporation",
        "full_name": "VinaGame",
        "location": "HCM - VietNam",
        "job": "Game Developer",
        "des_job": "<strong>Just My Dream...</strong>"
    }
];

$(document).ready(function() {
    var $exp_box = $("#experience").find(".box-exp");

    for(var i in list_exp) {
        var exp = list_exp[i];

        var html = `
            <div class="detail-box-exp text-main light">
                <div class="time-detail-box-exp">
                    <div class="spe-box-exp">
                        <div class="spe1-exp spe-exp"></div> <h1 class="from-time-detail-box-exp">
                            ${exp["from"]}
                        </h1> <div class="spe2-exp spe-exp"></div>
                    </div>
                    <div class="spe-box-exp">
                        <div class="spe2-exp spe-exp"></div> <h1 class="to-time-detail-box-exp">
                            ${exp["to"]}
                        </h1> <div class="spe1-exp spe-exp"></div>
                    </div>
                </div>

                <div class="content-box-exp">
                    <div class="block-content-box-exp">
                        <p class="name-company-box-exp">${exp["name_company"]}
                            <span class="fullname-company-box-exp">${exp["full_name"]}</span>
                        </p>
                        <p class="location-company-box-exp">${exp["location"]}</p>
                    </div>
                    <div class="block-content-box-exp">
                        <p class="job-box-exp">${exp["job"]}</p>
                        <p class="description">
                            ${exp["des_job"]}
                        </p>
                    </div>
                </div>
            </div>
        `;

        $exp_box.append(html);
    }
});
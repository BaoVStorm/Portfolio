list_exp = [
    {
        "from": "September 1, 2022",
        "to": "June 1, 2026",
        "name_company": "UIT",
        "full_name": "University of Information Technology",
        "location": "HCM - VietNam",
        "job": "Student",
        "des_job": "Studied core IT subjects such as Programming, Data Structures, and Web Development; actively joined team projects, and coding contests; built small websites and apps to practice skills; collaborated with classmates and improved teamwork, problem-solving, and self-learning abilities."
    }, 
    {
        "from": "From Date",
        "to": "To Date",
        "name_company": "Company Name",
        "full_name": "Full Company Name",
        "location": "Company Location",
        "job": "Job Role",
        "des_job": "<strong>Job Description...</strong>"
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
                        <div class="spe1-exp spe-exp"></div> <h4 class="from-time-detail-box-exp">
                            ${exp["from"]}
                        </h4> <div class="spe2-exp spe-exp"></div>
                    </div>
                    <div class="spe-box-exp">
                        <div class="spe2-exp spe-exp"></div> <h4 class="to-time-detail-box-exp">
                            ${exp["to"]}
                        </h4> <div class="spe1-exp spe-exp"></div>
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
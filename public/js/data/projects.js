var url_img = "assets/images/";

list_projects = [
    {
        "img": "https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg",
        "title": "Game King The Lost",
        "des": "...",
        "href": "https://github.com/BaoVStorm/King_The_Lost"
    },
    {
        "img": "https://github.com/user-attachments/assets/dfcbef73-53d5-44e7-bf85-f8978d1c09d6",
        "title": "My Portfolio Website",
        "des": "This is my personal project — a website to introduce myself. Additionally, it serves as a platform to showcase my skills and continuously improve them through practice.",
        "href": "https://github.com/BaoVStorm/Web_IntroduceMySelf"
    },
    {
        "img": "https://static.vecteezy.com/system/resources/previews/055/600/847/non_2x/an-eye-catching-isometric-icon-of-a-plant-in-a-decorative-square-planter-vector.jpg",
        "title": "Plant eCommerce Website",
        "des": "This is a team project with my homies at <i>COCONERD</i> — an eCommerce website designed to manage and sell plants, featuring a streamlined process and a user-friendly interface for a smooth shopping experience.",
        "href": "https://github.com/coconerd/plant-ecommerce"
    },
    {
        "img": "https://raw.githubusercontent.com/coconerd/uiteco-swing/refs/heads/main/src/main/resources/UITeco-funlogo.png",
        "title": "UITeco Application",
        "des": "A team project with COCONERD—my best team in university. This project is about an app that serves not only as a forum but also as a bridge connecting teachers, alumni, and students.",
        "href": "https://github.com/coconerd/uiteco-swing"
    },
    {
        "img": "https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg",
        "title": "Olap",
        "des": "...",
        "href": "https://github.com/BaoVStorm/Olap"
    },
    {
        "img": "https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg",
        "title": "DataMining",
        "des": "...",
        "href": "https://github.com/BaoVStorm/Project_DataMining"
    },
    {
        "img": "https://img.freepik.com/free-vector/virtual-currency-flat-style-banners-set_1284-15605.jpg",
        "title": "Inversion Attack",
        "des": "Inversion Attack is an attack technique in the field of security and machine learning, aimed at reconstructing the original data from the output or weights of an AI model.",
        "href": "https://github.com/BaoVStorm/InversionAttack"
    }
];

$(document).ready(function() {
    var $project = $("#projects .box-project");

    for(var i in list_projects) {
        var project = list_projects[i];

        var con_skill = `
            <div class="detail-box-project">
                <a href="${project["href"]}" class="image-box-project">
                    <img src="${project["img"]}" alt="image">
                </a>
                <div class="content-box-project">
                    <h1 class="title-content-box-project">
                        ${project["title"]}
                    </h1>   
                    <p class="des-content-box-project">
                        ${project["des"]}
                    </p>
                    <div>
                        <a href="${project["href"]}" class="viewmore-content-box-project ani-hover">view more</a>
                    </div>
                </div>
            </div>`;

        $project.append(con_skill);
    }

    
});
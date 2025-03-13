var url_img = "assets/images/";

list_projects = [
    {
        "img": "https://img.freepik.com/free-vector/virtual-currency-flat-style-banners-set_1284-15605.jpg",
        "title": "Inversion Attack",
        "des": "Inversion Attack is an attack technique in the field of security and machine learning, aimed at reconstructing the original data from the output or weights of an AI model.",
        "href": "https://github.com/BaoVStorm/InversionAttack"
    },
    {
        "img": "https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg",
        "title": "Web_IntroduceMySelf",
        "des": "...",
        "href": "https://github.com/BaoVStorm/Web_IntroduceMySelf"
    },
    {
        "img": "https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg",
        "title": "Web Coconerd",
        "des": "...",
        "href": "https://github.com/coconerd/plant-ecommerce"
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
        "img": "https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg",
        "title": "Game King The Lost",
        "des": "...",
        "href": "https://github.com/BaoVStorm/King_The_Lost"
    },
    {
        "img": "https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg",
        "title": "Uiteco swing",
        "des": "...",
        "href": "https://github.com/coconerd/uiteco-swing"
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
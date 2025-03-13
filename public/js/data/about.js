let list_achie = [
    {
        name: "awards",
        value: 19
    },
    {
        name: "xp years",
        value: "0+"
    },
    {
        name: "projects",
        value: 10   
    },
    {
        name: "gpa",
        value: "3.6x"
    }
];

let title_about = {
    title: "Passionate Developer & Innovator",
    content: "I am always looking for ways to optimize and develop software to deliver the best user experience. With over a year of hands-on experience in personal projects and coding competitions, I constantly strive to learn and improve my skills."
};


let url_cv = "https://drive.google.com/file/d/1r6y_HA7CEfGvXZrtEGg5j2vPDdVZyWIo/view?usp=sharing";

$(document).ready(function() {
    var $box = $("#about .about-achie .about-achie-head");

    // achie
    for(var achie in list_achie) {
        var name = list_achie[achie]['name'],
            value = list_achie[achie]['value'];

        var html = `
            <div class="about-achie-box">
                <h3 class="about-achie-box-title">${name}</h3>
                <h1 class="about-achie-box-content">${value}</h1>
            </div>
        `;

        if(name == "gpa")
            $("#gpa").text(value)

        $box.append(html);
    }

    // description
    $("#about-des-title").text(title_about["title"]);
    $("#about-des-content").text(title_about["content"])

    // url cv
    $("#button-downloadcv").attr("href", url_cv);
});
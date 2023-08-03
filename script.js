//$.getJSON("https://api.github.com/users/SQDexe/repos", null, (data, textStatus, jqXHR) => {console.log(data)}).fail((jqxhr,settings,ex)=> {console.log("fail")});
const vars = {};

const loadButtons = () => {
    /* Iters over list of languages, and prepares buttons */
    for (let l of lang) 
        $(".lang-menu")
            .append($("<button></button>")
                .text(l.code.toUpperCase())
                .addClass("button")
                .addClass("lang-select")
                .attr("data-value-lang", l.code));
    }
const setLang = lang => {
    console.log(lang);
    }
const load = () => {
    /* Exxecutes preparatory functions */       
    loadButtons();
    setLang(lang[3].code);
    
    /* Binds events */
    $(".lang-menu").click(e => {
        e.target.parent().children().removeAttr("disabled");
        e.target.attr("disabled", '');
        setLang(e.target.attr("data-value-lang"));
        });
    }
$(document).ready(load);
//$.getJSON("https://api.github.com/users/SQDexe/repos", null, (data, textStatus, jqXHR) => {console.log(data)}).fail((jqxhr,settings,ex)=> {console.log("fail")});
lang = [
    "en",
    "pl"
    ]

const load = () => {
    for (let ln of lang) {
        $(".lang-menu")
            .append($("<button></button>")
                .text(ln.toUpperCase())
                .addClass("button")
                .addClass("lang-select")
                .attr("data-lang-value", ln));
        }
    }
$(document).ready(load);
//$.getJSON("https://api.github.com/users/SQDexe/repos", null, (data, textStatus, jqXHR) => {console.log(data)}).fail((jqxhr,settings,ex)=> {console.log("fail")});
const vars = {
    display: $(".dots"),
    counter: 0
    }
setInterval(() => {
    if (3 < vars.counter) vars.counter = 0;
    let dots = '';
    for (let i = 0; i < vars.counter; i++) dots += '.';
    vars.display.html( dots.length == 0 ? "<br>" : dots);
    vars.counter++;
    }, 1500)
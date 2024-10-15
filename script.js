'use strict';
//$.getJSON('https://api.github.com/users/SQDexe/repos', null, (data, textStatus, jqXHR) => {console.log(data)}).fail((jqxhr,settings,ex)=> {console.log('fail')});
const vars = {};

const loadButtons = () => {
    /* Iters over list of languages, and prepares buttons */
    for (let l of lang) 
        $('.lang-menu')
            .append($('<button>')
                .text(l.code.toUpperCase())
                .addClass('button')
                .addClass('lang-select')
                .attr('data-lang-value', l.code));
    }
const setLang = l => {
    let selected = lang.find(e => e.code.toLowerCase() == l.toLowerCase());
    $('[data-lang-translate]').each((_, e) => e.text(selected[$(e).attr('data-lang-translate')]));
    }
const load = () => {
    /* Executes preparatory functions */       
    loadButtons();
    setLang(lang[2].code);
    
    /* Binds events */
    $('.lang-menu').click(e => {
        e.target.parent().children().removeAttr('disabled');
        e.target.attr('disabled', '');
        setLang(e.target.attr('data-lang-value'));
        });
    }
$(document).ready(load);

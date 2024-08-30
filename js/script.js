// console.log('teste de javascript');

//seleção de elementos HTML

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

//Função (rotina) que vai manipular o menu

function menuSite(){
    // console.log('Função acionada');

    //toggle -> alterar entre add e remover uma classe
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

//Evento
//ap clicar no btnMenu será acionada a FUNÇÃO menuSite
btnMenu.addEventListener('click', menuSite);




const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu-lateral");

btnMenu.addEventListener("click", mostraMenu)

function mostraMenu(){
    menu.classList.toggle("menu-lateral--ativo");
}
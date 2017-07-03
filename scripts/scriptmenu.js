let MenuVisual = document.querySelector("#visual"),
    MenuMusica = document.querySelector("#musica"),
    SubMenu = document.querySelectorAll(".menu-musica-visual");

MenuVisual.addEventListener('click', function(){
    let i = 0;
    for(i = 0; i < SubMenu.length; i++){
      SubMenu[i].classList.toggle("menu-musica-visual");
      SubMenu[i].style.transition = "all 250ms";
    }
});
MenuMusica.addEventListener('click', function(){
  let i = 0;
  for(i = 0; i < SubMenu.length; i++){
    SubMenu[i].classList.toggle("menu-musica-visual");
    SubMenu[i].style.transition = "all 250ms";
  }
});

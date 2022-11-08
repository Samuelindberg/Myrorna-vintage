let hamburgermenu={
    hamburgerIcon: document.getElementById("hamburger-icon"),
    menu: document.getElementById("hamburger-links"),
    hamburgerBars: [document.getElementById("bar1"),document.getElementById("bar2"),document.getElementById("bar3")],
    menuOpen:false,
    hamburgerLinks: document.getElementById("hamburger-links")
}
function menu(){
    if(hamburgermenu.menuOpen){
        hamburgermenu.menu.style.transform="translateX(0)";
        hamburgermenu.hamburgerBars[0].style.transform="rotate(45deg) translateY(9.5px)";
        hamburgermenu.hamburgerBars[1].style.opacity="0";
        hamburgermenu.hamburgerBars[2].style.transform="rotate(-45deg) translate(2px, -11px)";
        hamburgermenu.hamburgerBars[0].style.backgroundColor="#347BAD";
        hamburgermenu.hamburgerBars[2].style.backgroundColor="#347BAD";
        hamburgermenu.menuOpen=false;
    }
    else{
        hamburgermenu.menu.style.transform="translateX(-100vw)";
        hamburgermenu.hamburgerBars[0].style.transform="rotate(0)";
        hamburgermenu.hamburgerBars[0].style.backgroundColor="white";
        hamburgermenu.hamburgerBars[1].style.opacity="1";
        hamburgermenu.hamburgerBars[1].style.backgroundColor="white";
        hamburgermenu.hamburgerBars[2].style.transform="rotate(0)";
        hamburgermenu.hamburgerBars[2].style.backgroundColor="white";
        hamburgermenu.menuOpen=true;
    }
}
hamburgermenu.hamburgerLinks.addEventListener("click", function(){

})
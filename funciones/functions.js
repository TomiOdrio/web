var btnAbrirPopup = document.getElementById("boton");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");

btnAbrirPopup.addEventListener("submit",function(){
    overlay.classList.add("overlay_show")
    setTimeout(function(){
        overlay.classList.remove("overlay_show")
    },3000);
})
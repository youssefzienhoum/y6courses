var dark_mode_icon = document.getElementById("dark_mode_icon");
dark_mode_icon.onclick = function(){
     document.body.classList.toggle("dark-theme");
     if(document.body.classList.contains("dark-theme")){
         dark_mode_icon.src = "../images/sun.png";
     }
     else{
         dark_mode_icon.src = "../images/moon.png";
     }
}
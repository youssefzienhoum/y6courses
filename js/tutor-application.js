var dark_mode_icon = document.getElementById("dark_mode_icon");
var ad_levels = document.getElementById("levels");
dark_mode_icon.onclick = function(){
     document.body.classList.toggle("dark-theme");
     if(document.body.classList.contains("dark-theme")){
         dark_mode_icon.src = "../images/sun.png";
         ad_levels.src = "../images/Levels-Dark.png";

     }
     else{
         dark_mode_icon.src = "../images/moon.png";
         ad_levels.src = "../images/Levels.png";
         
     }
}
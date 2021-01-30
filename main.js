
let navbar = document.querySelector(".disc");
let logo = document.querySelector(".logo");
let logos = document.querySelector(".logmo");

let navbari = document.querySelector(".navs");
let fi = document.querySelector(".firs");
let se = document.querySelector(".sec");
let about = document.querySelector(".about");
let nes = document.querySelector(".nes");
let mob = document.querySelector(".mob");

let startusbar = "false";
let barsd = document.getElementById("sd");
let barst = document.getElementById("st");
let barse = document.getElementById("se");
let navbarm =  document.querySelector(".mobs");
let navmn =  document.querySelector(".mnavs");
let navmns =  document.querySelector(".mnav");
let nos = document.getElementById("nos");
function myFunction(x) {
  var mouse = document.querySelector("mouse");
  if (startusbar === "false"){
    
    nos.style.display ="none";
    mob.style.height="600px";
    x.classList.toggle("change");
 
    
    

    startusbar ="true";
  }
  else if(startusbar === "true"){
    mob.style.height="29px";
    x.classList.toggle("change");
    nos.style.display ="block";
  



    
    startusbar ="false";

  }


  


}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  let seee = document.getElementById("sess");
  let seeee = document.getElementById("susss");


  if (startusbar == "false" && document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navmn.style.color ="black";
    navmns.style.color ="black";
    logo.style.fontSize = "30px";
    navbar.style.boxShadow = "1px 1px 1px grey";
    navbar.style.height = "29px";
    navbari.style.color = "#262d3d";
    fi.style.color = "#262d3d";
    se.style.color = "#262d3d";
    logo.style.color = "#262d3d";
    seee.style.color="black";
    seeee.style.color="black";
    se.style.color = "#262d3d";
    about.style.color = "#262d3d";
    nes.style.color = "white";
    logo.style.fontSize ="30px";
    navbar.style.backgroundColor = "white";
    mob.style.backgroundColor ="white";
    barsd.style.backgroundColor ="black";
    barse.style.backgroundColor ="black";
    barst.style.backgroundColor ="black";
    logos.style.color ="black";
    mob.style.boxShadow = "1px 1px 1px grey";
    x.classList.toggle("changes");

    
  
  




    
  } else {
    mob.style.boxShadow = "none";
    seee.style.color="white";
    seeee.style.color="white";
    navmn.style.color ="white";
    navmns.style.color ="white";
    navbar.style.height = "29px";
    logo.style.fontSize = "25px";
    navbar.style.backgroundColor = "#0f256e";
    navbar.style.boxShadow = "none";
    navbari.style.color = "white";
    fi.style.color = "white"
    nes.style.color = "white"
    about.style.color = "white";;
    se.style.color = "white";
    logo.style.color = "white";
    logos.style.color ="white";
    barsd.style.backgroundColor ="white";
    barse.style.backgroundColor ="white";
    barst.style.backgroundColor ="white";
    mob.style.backgroundColor ="#0f256e";
    x.classList.toggle("change");
 
    


  }
}


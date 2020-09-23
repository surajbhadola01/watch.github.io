document.getElementById("bars").onclick = function () {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "280px";
    sidebar.style.transition = "0.5s ease";
    document.getElementById("bars").style.display="none";

}

document.getElementById("close-btn").onclick = function () {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0%";
    sidebar.style.transition = "0.5s ease";
    document.getElementById("bars").style.display="block";
}


var menu_list = document.getElementsByClassName("menu-a");
for (let i = 0; i < menu_list.length; i++) {
   menu_list[i].onclick = function(){
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0%";
    sidebar.style.transition = "0.5s ease";
    document.getElementById("bars").style.display="block";
   }
    
}


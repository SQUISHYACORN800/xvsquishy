setInterval(AlwaysActive, 100);


function TogleNavBox(){
    
    if (document.getElementById("NavBox").style.display == "block"){
        document.getElementById("NavBox").style.display = "none";
    }else{
        document.getElementById("NavBox").style.display = "block";
    }
    
}
function AlwaysActive(){
    
}
function ClkHme(){
    document.getElementById("Home").style.display = "block";
    document.getElementById("Downloads").style.display = "none";
    document.getElementById("Tutorials").style.display = "none";
}
function ClkDwn(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Downloads").style.display = "block";
    document.getElementById("Tutorials").style.display = "none";
}
function ClkTut(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Downloads").style.display = "none";
    document.getElementById("Tutorials").style.display = "block";
}
window.addEventListener("wheel", e => {
    const scrollDirection = e.deltaY < 0 ? 1 : 0
    scrollDirection === 1 ? "1" : "0";
    if (scrollDirection == 1){
        document.getElementById("Headr").style.position = "sticky";
    }else{
        document.getElementById("Headr").style.position = "initial";
    }
})
function btn_clk_1(){
    if (document.documentElement.style.filter == "invert(1)"){
        document.documentElement.style.filter = "invert(0)";
    }else{
        document.documentElement.style.filter = "invert(1)";
    }
}
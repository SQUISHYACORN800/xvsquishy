setInterval(AlwaysActive, 10);
var activatetime = setInterval(opengate ,null);
var activatetimeH = setInterval(opengateH ,null);
var activatetimeD = setInterval(opengateD ,null);
var activatetimeT = setInterval(opengateT ,null);
var activatetimeM = setInterval(opengateM ,null);
//  VARIABLES

//const iframes = document.querySelectorAll("iframe");

//  VARIABLES

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
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
    closegate();
    activatetimeH = setInterval(opengateH ,2000);
}
function ClkHmeB(){
    document.getElementById("Home").style.display = "block";
    document.getElementById("Downloads").style.display = "none";
    document.getElementById("Tutorials").style.display = "none";
    document.getElementById("Music").style.display = "none";
}
function ClkDwn(){
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
    closegate();
    activatetimeD = setInterval(opengateD ,2000);
}
function ClkDwnB(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Downloads").style.display = "block";
    document.getElementById("Tutorials").style.display = "none";
    document.getElementById("Music").style.display = "none";
}
function ClkTut(){
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
    closegate();
    activatetimeT = setInterval(opengateT ,2000);
}
function ClkTutB(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Downloads").style.display = "none";
    document.getElementById("Tutorials").style.display = "block";
    document.getElementById("Music").style.display = "none";
}
function ClkMus(){
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
    closegate();
    activatetimeM = setInterval(opengateM ,2000);
}
function ClkMusB(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("Downloads").style.display = "none";
    document.getElementById("Tutorials").style.display = "none";
    document.getElementById("Music").style.display = "block";
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
        document.getElementById("keep").style.filter = "invert(0)";
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(iframe => {
            iframe.style.filter = "invert(0)";
        });
    }else{
        document.documentElement.style.filter = "invert(1)";
        document.getElementById("keep").style.filter = "invert(1)";
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(iframe => {
            iframe.style.filter = "invert(1)";
        });
    }
}
function onloaded(){
    opengate();
}
function opengate(){
    document.getElementById("lo").style.width = "0";
    document.getElementById("ro").style.width = "0";
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateH(){
    document.getElementById("lo").style.width = "0";
    document.getElementById("ro").style.width = "0";
    ClkHmeB();
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateD(){
    document.getElementById("lo").style.width = "0";
    document.getElementById("ro").style.width = "0";
    ClkDwnB();
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateT(){
    document.getElementById("lo").style.width = "0";
    document.getElementById("ro").style.width = "0";
    ClkTutB();
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateM(){
    document.getElementById("lo").style.width = "0";
    document.getElementById("ro").style.width = "0";
    ClkMusB();
    clearInterval(activatetime);
}
function closegate(){
    document.getElementById("lo").style.width = "50%";
    document.getElementById("ro").style.width = "50%";
}


var hue=0;
setInterval(()=>{
  document.getElementById('Headr').style.filter = 'hue-rotate('+hue+++'deg)'
},50)

function smoothScrollBy(distance, duration) {
  const startY = window.scrollY;
  const startTime = performance.now();
  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + (distance * easedProgress));
    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }
  requestAnimationFrame(scrollStep);
}
function scrolltobio(){
  smoothScrollBy(1000, 2000); // 100px distance, 2000ms duration
};
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
    activatetimeH = setInterval(opengateH ,1500);
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
    activatetimeD = setInterval(opengateD ,1500);
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
    activatetimeT = setInterval(opengateT ,1500);
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
    activatetimeM = setInterval(opengateM ,1500);
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
        document.getElementById("lo").style.filter = "invert(0)";
        document.getElementById("ro").style.filter = "invert(0)";
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(iframe => {
            iframe.style.filter = "invert(0)";
        });
    }else{
        document.documentElement.style.filter = "invert(1)";
        document.getElementById("keep").style.filter = "invert(1)";
        document.getElementById("lo").style.filter = "invert(1)";
        document.getElementById("ro").style.filter = "invert(1)";
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
    const lo = document.getElementById("lo");
    const ro = document.getElementById("ro");
    const dlo = document.getElementById("dlo");
    const dro = document.getElementById("dro");
    dlo.style.width = "0";
    dro.style.width = "0";
    lo.style.overflow = "hidden";
    ro.style.overflow = "hidden";
    lo.style.width = "0";
    ro.style.width = "0";
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateH(){
    const lo = document.getElementById("lo");
    const ro = document.getElementById("ro");
    const dlo = document.getElementById("dlo");
    const dro = document.getElementById("dro");
    dlo.style.width = "0";
    dro.style.width = "0";
    lo.style.overflow = "hidden";
    ro.style.overflow = "hidden";
    lo.style.width = "0";
    ro.style.width = "0";
    ClkHmeB();
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateD(){
    const lo = document.getElementById("lo");
    const ro = document.getElementById("ro");
    const dlo = document.getElementById("dlo");
    const dro = document.getElementById("dro");
    dlo.style.width = "0";
    dro.style.width = "0";
    lo.style.overflow = "hidden";
    ro.style.overflow = "hidden";
    lo.style.width = "0";
    ro.style.width = "0";
    ClkDwnB();
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateT(){
    const lo = document.getElementById("lo");
    const ro = document.getElementById("ro");
    const dlo = document.getElementById("dlo");
    const dro = document.getElementById("dro");
    dlo.style.width = "0";
    dro.style.width = "0";
    lo.style.overflow = "hidden";
    ro.style.overflow = "hidden";
    lo.style.width = "0";
    ro.style.width = "0";
    ClkTutB();
    clearInterval(activatetime);
    clearInterval(activatetimeH);
    clearInterval(activatetimeD);
    clearInterval(activatetimeT);
    clearInterval(activatetimeM);
}
function opengateM(){
    const lo = document.getElementById("lo");
    const ro = document.getElementById("ro");
    const dlo = document.getElementById("dlo");
    const dro = document.getElementById("dro");
    dlo.style.width = "0";
    dro.style.width = "0";
    lo.style.overflow = "hidden";
    ro.style.overflow = "hidden";
    lo.style.width = "0";
    ro.style.width = "0";
    ClkMusB();
    clearInterval(activatetime);
}
function closegate(){
    const lo = document.getElementById("lo");
    const ro = document.getElementById("ro");
    const dlo = document.getElementById("dlo");
    const dro = document.getElementById("dro");
    dlo.style.width = "50%";
    dro.style.width = "50%";
    lo.style.overflow = "hidden";
    ro.style.overflow = "hidden";
    lo.style.width = "50%";
    ro.style.width = "50%";
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

function toggleMatrix(){
  var lo = document.getElementById("dlo");
  var ro = document.getElementById("dro");
  lo.style.background = "transparent";
  ro.style.background = "transparent";
}
const a = ["adu48","bgi72","cch59","dof86","eci89","fdt66","ge6y8","hm9m8","ixf3e","jx6f8","kf3e4","lcy9o","ms5c7","n9o63","oa5t6","pgy8i","q6yfs","re4r9","si6fw","tc58y","uns6y","vmnb4","w14dc","xnfy7","yiu5f","zxfw5","0vb64","1a4er","24r6r","336yg","4iu7y","54rfc","63rfg","76f8s","83pol","912es","*c6g4"];

function createRainCanvas(parentId, canvasId) {
    const parent = document.getElementById(parentId);
    if (!parent) return null;

    const canvas = document.createElement('canvas');
    canvas.setAttribute("id", canvasId);
    parent.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');

    function resize() {
        // Match internal pixels to screen pixels exactly to stop blurring
        // We use window.innerWidth/2 because your panels are 50% width
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    return { canvas, ctx };
}

// Setup both sides
const leftSide = createRainCanvas('lo', 'leftCanvas');
const rightSide = createRainCanvas('ro', 'rightCanvas');

// Particle settings
const particles = Array.from({ length: 350 }, () => ({
    x: Math.random(),
    y: Math.random(),
    text: a[Math.floor(Math.random() * a.length)],
    speed: Math.random() * 0.003 + 0.001,
    fontSize: Math.random() * 15 + 12
}));

function draw() {
    [leftSide, rightSide].forEach(side => {
        if (!side) return;
        const { canvas, ctx } = side;

        // Clear with trail
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Apply Gradient
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0.33)');
        grad.addColorStop(1, 'rgba(0, 255, 0, 0.33)');
        ctx.fillStyle = grad;
        ctx.textAlign = 'center';

        particles.forEach(p => {
            ctx.font = `bold ${p.fontSize}px monospace`;
            const xPos = p.x * canvas.width;
            const yPos = p.y * canvas.height;
            
            // Vertical Stack (Upright)
            for (let i = 0; i < p.text.length; i++) {
                ctx.fillText(p.text[i], xPos, yPos + (i * p.fontSize));
            }
        });
    });

    // Update positions
    particles.forEach(p => {
        p.y += p.speed;
        if (p.y > 1.1) p.y = -0.1;
        if (Math.random() > 0.98) p.text = a[Math.floor(Math.random() * a.length)];
    });

    requestAnimationFrame(draw);
}

draw();
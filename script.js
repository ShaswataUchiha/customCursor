const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const effect = document.querySelector(".effect");

main.addEventListener("mousemove",function(e){
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
});

effect.addEventListener("mouseenter", function () {
    cursor.style.transform = "scale(6)";
    cursor.style.boxShadow = "0 0 10px #fff";
});

effect.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";  
        cursor.style.boxShadow = "0";      
});

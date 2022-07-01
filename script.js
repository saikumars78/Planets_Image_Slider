var boxImg = document.getElementById("boxImg");
var fullImg = document.getElementById("fullImg");

function openImg(pic) {
    boxImg.style.display = "flex";
    fullImg.src =pic; 
}

function closefullImg(){
    boxImg.style.display = "none";
}
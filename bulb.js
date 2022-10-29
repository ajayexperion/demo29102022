var buton = document.getElementById('butt');
var image=document.getElementById('image')
buton.addEventListener('click',()=>{
    turnoff()
})
function turnoff(){
    if (image.src.match("bulbon")) {
        image.src = "offbulb.jpg";
      } else {
        image.src = "bulbon.jpg";
      }
}
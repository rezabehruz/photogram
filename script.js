const imgArr = ["alaska-810433_1280.jpg", "anime-8788959_1280.jpg", 
 "atmosphere-8752835_1280.png",
"blue-tit-8521052_1280.jpg",
"hurricane-92968_1280.jpg",
"lake-2896379_1280.jpg",
"moorente-8783210_1280.jpg",
"sea-2563389_1280.jpg",
"snow-bunting-6781122_1280.jpg",
"snow-leopard-cubs-8039138_1280.jpg",
"travel-8785493_1280.jpg",
"winter-1675197_1280.jpg"];

const imgAlt = [
"alaska-810433_1280",
"anime-8788959_1280", 
"atmosphere-8752835_1280",
"blue-tit-8521052_1280",
"hurricane-92968_1280",
"lake-2896379_1280",
"moorente-8783210_1280",
"sea-2563389_1280",
"snow-bunting-6781122_1280",
"snow-leopard-cubs-8039138_1280",
"travel-8785493_1280",
"winter-1675197_1280"];

const album = document.getElementById("album1");
const dialogRef = document.getElementById("dialog1");
const h2Ref = document.getElementById("dialog1-h2");
const imgRef = document.getElementById("dialog1-img");
const amountImgRef = document.getElementById("amount-img");
let currentImg = 0;


/** renders the album */
function render(){
    for (let i = 0; i < imgArr.length; i++) { 
      album.innerHTML += createPhoto(i);
    }
}


/** renders Html */
function createPhoto(i){
  return `<a href="#" onclick=showDialog(event,${i}) id=img${i}><img src=img/${ imgArr[i] } alt= ${imgAlt[i]}> </a> `;
}

/** opens Dialog in Details */
function showDialog(event,i){
  stopProp(event);

  dialogRef.show();
  dialogRef.classList.add("dialog-flex");

  h2Ref.innerHTML = imgAlt[i];
  imgRef.setAttribute("src", "img/"+imgArr[i]);
  imgRef.setAttribute("alt", imgAlt[i]);
  amountImgRef.innerHTML =  i+1 + "/" + imgArr.length;
  currentImg = i;
  
}

/** cleses the Dialog */
function closeDialog(){
  dialogRef.close();
  document.getElementById(`img${currentImg}`).focus();
  dialogRef.classList.remove("dialog-flex");
}

/** prevents event Babbling */
function stopProp(event){
  event.stopPropagation();
}

/** handels one Photo back */
function backward(event){
  if(currentImg == 0)
    currentImg = 11;
  else
    currentImg = currentImg - 1;

 showDialog(event,currentImg); 
}

/** handels next Photo */
function forward(event){
  if(currentImg == 11)
    currentImg = 0;
  else
    currentImg = currentImg + 1;

  showDialog(event, currentImg);
}

/**
 * Keyboard Keys handeln in Dialog
 */
dialogRef.onkeydown = function (event) {
  if(event.key == "Escape") 
    closeDialog();
  else if (event.key == "ArrowRight") 
    backward(event);
  else if (event.key == "ArrowLeft") 
    forward(event);
}




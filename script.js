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
const dialog = document.getElementById("dialog1");


function render(){
    
    for (let i = 0; i < imgArr.length; i++) { 
      album.innerHTML += `<img onclick=renderDialog(event,${i}) src= img/${ imgArr[i] } alt= ${imgAlt[i]} >`;
    }
    
}

function renderDialog(event, i){
  event.stopPropagation();
  dialog.setAttribute("class", "dialog");
  
  dialog.innerHTML = ` 
            <div class="dialog-head">
              <span>${imgAlt[i]}</span>
              <img src="img/close-icon/close.svg" alt="close-icon" onclick= closeDialog() />
            </div>
            <img src=img/${imgArr[i]} alt=${imgAlt[i]} />
            <div class="dialog-footer">
              <img src="img/close-icon/right-arrow.svg" alt="left-arrow" onclick=backward(${i}) class="rotate-180"/>
              <span>${i + 1}/12</span>
              <img src="img/close-icon/right-arrow.svg" alt="right-arrow" onclick=forward(${i}) />
            </div>`;
}

function closeDialog(){
  dialog.setAttribute("class", "dialog-hidden");
}

function backward(i){
  if(i == 0)
    i = 11;
  else
    i = i - 1;

 renderDialog(i); 
}

function forward(i){
  if(i == 11)
    i = 0;
  else
    i = i + 1;

  renderDialog(i)
}




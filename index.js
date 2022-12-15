
let offset = 0;
let timer;
const sliderline = document.querySelector(".slieder_container");

let next_btn = document.getElementById('btn-nex');
let prev_btn = document.getElementById('btn-prev');

function move_next() {

  offset += -381;
  if (offset <= -762) {
    offset = 0;
  }
  sliderline.style.left = offset + "px";

}
function move_prev() {
  offset += -381;
  if (offset <= -762) {
    offset = 0;
  }
  sliderline.style.left = offset + "px";
}

setInterval(function move_next() {
  offset += -381;
  if (offset <= -762) {
    offset = 0;
  }
  sliderline.style.left = offset + "px";
}, 3000)





const text = ['Designer', 'Freelancer', 'Developer', 'Photographer'];
function selfTypetext() {
  let line = 0;
  let count = 0;
  let outText = '';
  let myH2 = document.getElementById('text-to-change');
  function typeLine() {
    let interval = setTimeout(function name() {
    outText += text[line][count];
    myH2.innerHTML = outText;
    count++;
      if (count > text[line].length) {
        while (count != 0) {
          outText -= text[line][count];
          myH2.innerHTML = outText;
          count--;
        }
        count = 0;
        myH2.innerHTML = '';
        outText = '';
 line++;

      }
      typeLine();
    }, 500)
  }
  typeLine();
}
selfTypetext();
let works = document.getElementById('works-450');
let years = document.getElementById('years-25');
let clients = document.getElementById('clients-550');
let awards = document.getElementById('awards-48');
setInterval(Frame1, 50);
setInterval(Frame23, 50);
setInterval(Frame4, 50);
works.innerHTML = 0;
years.innerHTML = 0;
clients.innerHTML = 0;
awards.innerHTML = 0;
let achievements = 0;
let quantity = 0;
function Frame1() {
  if (works.innerHTML >= 450 ) {
    clearInterval();
  }
  else{
    works.innerHTML++;
  }

}
function Frame23() {

  
  if(years.innerHTML < 25){
    years.innerHTML++
  }
  if(clients.innerHTML < 550){
    clients.innerHTML++
  }
  if(years.innerHTML >= 25 && (clients.innerHTML >= 550)){
    clearInterval();
  }
}
function Frame4(){
  if (awards.innerHTML >= 48 ) {
    clearInterval();
  }
  else{
    awards.innerHTML++;
  }
}

 function Burger(){
  let menu = document.getElementById('burger-menu');
  let burger = document.getElementById('non-show');
  let non_show_class = 'non-show'
  let new_str = 'show'
  let str2 = ' non-show1'
  if(burger.className !== non_show_class + new_str){
    burger.className = non_show_class + new_str;
  }
  else{
    burger.className = non_show_class + str2;
  }
}






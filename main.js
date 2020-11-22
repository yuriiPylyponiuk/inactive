const TIMER = 10000;
const INTERVALTIME= 5000;
var timeoutId, intervalId; 

//Start timer and clean body if img created first
function startTimer() { 
  let a = document.querySelector('.inactiveImg');
  if(a){
    a.remove()
  }
  timeoutId = window.setTimeout(doInactive, TIMER)
}

//Create img and change imgs
function doInactive() {
  let body = document.querySelector('body');
  let img = document.createElement('img');
  let div = document.createElement('div');
  let positionLeft = window.innerWidth;
  let positionTop = window.innerHeight;
  const MINLEFT = 0;
  const MINTOP = 0;

  positionLeft = positionLeft-500;
  positionTop = positionTop-500;

  div.classList.add('inactiveImg');
  div.style.backgroundImage=`url(img/${randomNumber(1,7)}.jpeg)`;
  div.appendChild(img);
  div.style.left = `${randomNumber(MINLEFT,positionLeft)}px`;
  div.style.top = `${randomNumber(MINTOP,positionTop)}px`;
  body.appendChild(div);


  intervalId = setInterval(() => {
    div.style.left = `${randomNumber(MINLEFT,positionLeft)}px`;
    div.style.top = `${randomNumber(MINTOP,positionTop)}px`;;
    div.style.backgroundImage=`url(img/${randomNumber(1,7)}.jpeg)`;
  }, INTERVALTIME);
}

//Return random nuber for random photo
function randomNumber(min, max){
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// function wich clear inactive timer
function resetTimer() { 
  window.clearTimeout(timeoutId)
  window.clearTimeout(intervalId)
  startTimer();
}


//add main ivents
function setupTimers () {
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("mousedown", resetTimer);
  document.addEventListener("keypress", resetTimer);
  document.addEventListener("touchmove", resetTimer);
  
  startTimer();
}

setupTimers();

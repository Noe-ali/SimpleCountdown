const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const weekdays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    
];

const birthday = document.querySelector('.birthday');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

//let tempDate = new Date();
//let tempYear = tempDate.getFullYear();
//let tempMonth = tempDate.getMonth();
//let tempDay = tempDate.getDate();
// months are ZERO index based;
//const futureDate = new Date(tempYear, tempMonth, tempDay + 23, 00, 00, 0);
let futureDate = new Date(2022,2,26,03,30,00);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

birthday.textContent = ` El cumpleaños del chango es el: \n ${weekday} ${date} 
de ${month} de ${year} ${hours}:${minutes}am `;

//future time in ms
const futureTime = futureDate.getTime();
function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    //1s=1000ms
    //1m= 60s
    //1hr = 60m
    //1d  = 24hr

    //values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin= 60*1000;
    const OneSec = 1000;
    //calculate all values
    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor(( t % oneDay ) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMin);
    let seconds = Math.floor((t % oneMin) /1000);

    //set values array;
    const values = [days,hours,minutes,seconds];
    
    function format(item){
        if(item<10){
            return item = `0${item}`;
        }
        return item;
    }


    items.forEach(function(item, index){
        item.innerHTML = values[index];
    });
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, el cumpleaños ya ha sucedido... o está sucediendo </4>`
    }




}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();





//change image
window.onload = function (){
    var imagen = document.getElementById('foto');
    imagen.addEventListener('mouseover', peligro, false);
    imagen.addEventListener('mouseout', restaurar, false);
  }
  
  function restaurar(){
    var imagen = document.getElementById('foto').src = "./src/eggteban.jpg";    
  }
  
  function peligro() {
    var imagen = document.getElementById('foto').src = "./src/eggteban2.jpg";

  }


  //buttons modal
  const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.getElementById('video').play();
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    document.getElementById('video').pause();
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    document.getElementById('video').pause();
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    document.getElementById('video').pause();
  }
});
    



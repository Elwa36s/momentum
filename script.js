// DOM Elements
const time = document.querySelector('.time'),
      greeting = document.querySelector('.greeting'),
      name = document.querySelector('.name'),
      focus = document.querySelector('.focus'),
      day = document.querySelector('.day'),
      blockquote = document.querySelector('blockquote'),
      figcaption = document.querySelector('figcaption'),
      btnQot = document.querySelector('.btn2');
// Опции
const showAmPm = false,
      formatTime12 = false;

// Время
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    dayWeek = today.getDay(),
    month = today.getMonth(),
    dayNumb = today.getDate();
    if (min == 0 && sec == 0){
      getImage();
    }
  // Вывод AM или PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12-тичасовой формат
  if (formatTime12) {
  hour = hour % 12 || 12;
  }
  // День 
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября',
       'октября', 'ноября', 'декабря'],
      currentMonth = months[month],
      weekDay = days[dayWeek];
      





  // Вывод времени и дня
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;
  day.innerHTML = `${weekDay}<span>,</span> ${dayNumb} ${currentMonth}`;
  setTimeout(showTime, 1000);
}

// Добавление нулей
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

let i = 0;
    currentTimeOfDay = 0;


    const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

// Рандом порядок
function random(array) {
  array.sort(() => Math.random() - 0.5);
}
random(images);
// Установка фона и приветсвие
   let folder = '';
   let allTimes = ['morning', 'day', 'evening', 'night'];
   let j;
function setBgGreet() {
  let today = new Date(),
    //randomImg = Math.round(Math.random() * 19),
        hour = today.getHours(),
    h = hour % 6;
    img = images[h],
    i = h;
    if (h === 0) {
      h = 1;
    }
  if (hour < 12 && hour >= 6) {
    // Утро
    j = 0;
    folder = allTimes[j];
    const base = `https://raw.githubusercontent.com/Elwa36s/momentum/gh-pages/assets/images/${folder}/`;
    document.body.style.backgroundImage = `url('${base}${img}')`;
  
    greeting.textContent = 'Доброе утро, ';
  } else if (hour < 18) {
    // День
    j = 1;
   
    folder = allTimes[j];
    const base = `https://raw.githubusercontent.com/Elwa36s/momentum/gh-pages/assets/images/${folder}/`;
    document.body.style.backgroundImage = `url('${base}${img}')`;
    
      greeting.textContent = 'Добрый день, ';
  } else if (hour < 24){
    // Вечер
    
    j = 2;
    folder = allTimes[j];
    const base = `https://raw.githubusercontent.com/Elwa36s/momentum/gh-pages/assets/images/${folder}/`;
    document.body.style.backgroundImage = `url('${base}${img}')`;
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '3px 2px 6px #000000';
    // Ночь
    } else if (hour < 6){ 
      j = 3;
      folder = allTimes[j];
      const base = `https://raw.githubusercontent.com/Elwa36s/momentum/gh-pages/assets/images/${folder}/`;
      document.body.style.backgroundImage = `url('${base}${img}')`;
    greeting.textContent = 'Доброй ночи, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '3px 2px 6px #000000';
  }
  currentTimeOfDay = j;
}
// Память имени
function saveName(){
  name.addEventListener('click', function() {if (name.textContent !== '') {
   localStorage.setItem('lastName', name.textContent);
  }});
}
saveName();
// Ввод имени
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
      getName();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
     getName();
  }
 
}


// Поле имени
function getName() {
 name.addEventListener('click', function() {name.textContent = ''});
 let currentName = localStorage.getItem('name');
  if (currentName === '') { 
    localStorage.removeItem('name');
  }
 if (localStorage.getItem('name') === null) {
   if (localStorage.getItem('lastName') === null) {
    name.textContent = '[Введите имя]';
   } else {
    name.textContent = localStorage.getItem('lastName');
  }
  } else { 
    name.textContent = localStorage.getItem('name');
  }
}

// Память цели
function saveFocus(){
  focus.addEventListener('click', function() {if (focus.textContent !== '') {
   localStorage.setItem('lastFocus', focus.textContent);
  }});
}
saveFocus();

// Поле цели
function getFocus() {
  focus.addEventListener('click', function() {focus.textContent = ''});
 let currentFocus = localStorage.getItem('focus');
  if (currentFocus === '') { 
    localStorage.removeItem('focus');
  }
  if (localStorage.getItem('focus') === null) {
    if (localStorage.getItem('lastFocus') === null) {
      focus.textContent = '[Введите цель]';
     } else {
      focus.textContent = localStorage.getItem('lastFocus');
    }
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Ввод цели
function setFocus(e) {
  if (e.type === 'keypress') {
    // Нажат ли enter?
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
      getFocus()
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
    getFocus()
  }
}
// Запуск
showTime();
setBgGreet();
getName();
getFocus();
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



//Погода
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherHumidity = document.querySelector('.weather-Humidity');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');

//Вывод погоды

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=4ecbcc47cf223a32117b4ef59cbe227c&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherHumidity.textContent = `Относительная влажность ${data.main.humidity}%`;
  wind.textContent = `Скорость ветра ${data.wind.speed} м/с`
}
let previousCity;
//Выбор города
function setCity(event) {
  console.log('event.type = ' + event.type);
  if (event.type === 'keypress') {
    // Нажат ли enter?
    if (event.code === 'Enter') {
      localStorage.setItem('city', event.target.innerText);
      getCity();
     getWeather();
     city.blur();
    }
  }
}

// Город стор
function getCity() {
  city.addEventListener('click', function() {city.textContent = ''});
  let currentCity = localStorage.getItem('city');
  if (currentCity === '') { 
    localStorage.removeItem('city');
  }
  if (localStorage.getItem('city') === null) {
     city.textContent = 'Солигорск';
   } else{
    city.textContent = localStorage.getItem('city');
   }
 }

city.addEventListener('keypress', setCity);
getCity();


document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);





//Смена фона
 function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}
function getImage() {
  let currentfolder = allTimes[currentTimeOfDay];
  const basement = `https://raw.githubusercontent.com/Elwa36s/momentum/gh-pages/assets/images/${currentfolder}/`;
  const index = i % 6;
  const imageSrc = basement + images[index];
  viewBgImage(imageSrc);
  if (index == 5) {
    if (currentTimeOfDay == 3) {
      currentTimeOfDay = 0;
    } else {
    currentTimeOfDay += 1;
  }
  }
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);




//Смена цитаты
async function getQuote() {  
  const url = `https://api.chucknorris.io/jokes/random`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.value;
  figcaption.textContent = ['True story'];
}
document.addEventListener('DOMContentLoaded', getQuote);
btnQot.addEventListener('click', getQuote);
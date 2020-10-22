// DOM Elements
const time = document.querySelector('.time'),
      greeting = document.querySelector('.greeting'),
      name = document.querySelector('.name'),
      focus = document.querySelector('.focus'),
      day = document.querySelector('.day');

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

// Установка фона и приветсвие
let folder = '';
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    // Утро
    document.body.style.backgroundImage =
    "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    folder = 'morning';
    greeting.textContent = 'Доброе утро, ';
  } else if (hour < 18) {
    // День
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
      folder = 'day';
    greeting.textContent = 'Добрый день, ';
  } else if (hour < 24){
    // Вечер
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/evening.jpg')";
      folder = 'evening';
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
    // Ночь
    } else {  document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
      folder = 'night';
    greeting.textContent = 'Доброй ночи, ';
    document.body.style.color = 'white';
  }
}

// Поле имени
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Введите имя]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Ввод имени
function setName(e) {
  if (e.type === 'keypress') {
    // Нажат ли enter?
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Поле цели
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Введите цель]';
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
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Запуск
showTime();
setBgGreet();
getName();
getFocus();

//Погода
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

//Вывод погоды
async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=4ecbcc47cf223a32117b4ef59cbe227c&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}


//Выбор города
function setCity(event) {
  if (e.type === 'keypress') {
    // Нажат ли enter?
    if (event.code === 'Enter') {
     getWeather();
     city.blur();
    }
  }
}
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

//Смена фона
const base = `https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/${folder}/`;
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

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
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);
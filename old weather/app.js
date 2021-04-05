// key: 4849d7f721f94e5df05aaa9bf8b3df5b

const api = {
    key: "4849d7f721f94e5df05aaa9bf8b3df5b",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
      searchbox.value="";
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }

  function getdate (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  
  function displayResults (weather) {
    let city = document.querySelector('#city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('#date');
    date.innerText = getdate(now);
  
    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}°c`;
  
    let weather1 = document.querySelector('#weather');
    weather1.innerText = weather.weather[0].main;
  
    let minmax = document.querySelector('#min-max');
    minmax.innerText = `${Math.round(weather.main.temp_min)}°c (min) / ${Math.round(weather.main.temp_max)}°c (max)`;
 
    let humidity = document.querySelector('#humidity');
    humidity.innerHTML= `${Math.round(weather.main.humidity)}%`;

    let pressure = document.querySelector('#pressure');
    pressure.innerHTML= `${weather.main.pressure}.00 hPa`;

    let speed = document.querySelector('#speed');
    speed.innerHTML= `${Math.round(weather.wind.speed)} km/h`;

    let deg = document.querySelector('#deg');
    deg.innerHTML= `${Math.round(weather.wind.deg)}`;


}
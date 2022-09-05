function showDateTime(timetemp) {
  let now = new Date(timetemp);
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function CurrentWeather(response) {
  celciousTemp = response.data.main.temp;

  let temperatureElement = document.querySelector("#currentweather");
  temperatureElement.innerHTML = Math.round(celciousTemp);

  let descriptionElement = document.querySelector(".weather-Condition");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let dateTimeElement = document.querySelector("#date-Time");
  dateTimeElement.innerHTML = showDateTime(response.data.dt * 1000);

  let iconElement = document.querySelector(".weather-img");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function searchEngine(city) {
  let apiKey = "3bad7bd4137a5ff9f5c84125992a313a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(CurrentWeather);
}

function returnCityName(event) {
  event.preventDefault();
  let searchedCityNAme = document.querySelector("#search-text");
  searchEngine(searchedCityNAme.value);

  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchedCityNAme.value;
}

function displayFarenheitTemp(event) {
  event.preventDefault();
  farenheit.classList.add("active");
  celcious.classList.remove("active");
  farenheitTemp = (celciousTemp * 9) / 5 + 32;
  showFarenheitTemp = document.querySelector("#currentweather");
  showFarenheitTemp.innerHTML = Math.round(farenheitTemp);
}

function displayCelciousTemp(event) {
  event.preventDefault();
  farenheit.classList.remove("active");
  celcious.classList.add("active");
  showCelciousTemp = document.querySelector("#currentweather");
  showCelciousTemp.innerHTML = Math.round(celciousTemp);
}

function showPredictionPart() {
  let predictionElement = document.querySelector("#prediction");

  let predicttionHtml = `<div class="row">`;

  let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];
  days.forEach(function (day) {
    predicttionHtml =
      predicttionHtml +
      `<div class="col-2">
          <p class="day-prediction">${day}</p>
          <img class="weather-img-predict" src="img/few clouds.png" alt="" />
          <p class="weather-predict"><strong>22°C</strong> 11°C</p>
        </div>`;
  });

  predicttionHtml = predicttionHtml + `</div>`;
  predictionElement.innerHTML = predicttionHtml;
}

searchEngine("New York");

showPredictionPart();

let celciousTemp = null;

let form = document.querySelector("#search-city");
form.addEventListener("submit", returnCityName);

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", displayFarenheitTemp);

let celcious = document.querySelector("#celcious");
celcious.addEventListener("click", displayCelciousTemp);

function CurrentWeather(response) {

    let temperatureElement = document.querySelector("#currentweather");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    let descriptionElement = document.querySelector(".weather-Condition");
    descriptionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);

}



let apiKey = "3bad7bd4137a5ff9f5c84125992a313a";
let city= "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(CurrentWeather);
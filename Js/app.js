function showDateTime (timetemp){
    let now = new Date(timetemp);
    let hours = now.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[now.getDay()];
    return `${day} ${hours}:${minutes}`
}




function CurrentWeather(response) {

    console.log(response);

    let temperatureElement = document.querySelector("#currentweather");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    let descriptionElement = document.querySelector(".weather-Condition");
    descriptionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);

    let dateTimeElement = document.querySelector("#date-Time");
    dateTimeElement.innerHTML = showDateTime(response.data.dt);
    

}



let apiKey = "3bad7bd4137a5ff9f5c84125992a313a";
let city= "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(CurrentWeather);
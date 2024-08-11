const apiKey = "b5c3099d9758f4bcfd67df95f6dd48c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°c';
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == 'Clouds'){
        weather_icon.src = "images/clouds.png";
    }

    else if(data.weather[0].main == 'Clear'){
        weather_icon.src = "images/clear.png";
    }

    else if(data.weather[0].main == 'Rain'){
        weather_icon.src = "images/rain.png";
    }

    else if(data.weather[0].main == 'Drizzle'){
        weather_icon.src = "images/drizzle.png";
    }

    else if(data.weather[0].main == 'Mist'){
        weather_icon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click" , () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});


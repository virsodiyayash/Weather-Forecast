// const apiKey = "b5c3099d9758f4bcfd67df95f6dd48c3";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// const cityElem = document.querySelector(".city");
// const tempElem = document.querySelector(".temp");
// const humidityElem = document.querySelector(".humidity");
// const windElem = document.querySelector(".wind");

// async function checkWeather(city) {
//     // Trim the city name to remove leading/trailing spaces
//     city = city.trim();

//     if (!city) {
//         alert("Please enter a city name.");
//         return;
//     }

//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//         const data = await response.json();

//         if (response.ok) {
//             console.log(data);

//             cityElem.innerHTML = data.name;
//             tempElem.innerHTML = Math.round(data.main.temp) + '°C';
//             humidityElem.innerHTML = data.main.humidity + '%';
//             windElem.innerHTML = data.wind.speed + " km/h";
//         } else {
//             throw new Error(data.message || "Weather data not found.");
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         cityElem.innerHTML = 'Error';
//         tempElem.innerHTML = '';
//         humidityElem.innerHTML = '';
//         windElem.innerHTML = '';
//         alert(error.message);
//     }
// }

// searchBtn.addEventListener("click", () => {
//     const cityName = searchBox.value;
//     checkWeather(cityName);
// });

// // Optional: Add an event listener to search when pressing Enter
// searchBox.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         searchBtn.click();
//     }
// });

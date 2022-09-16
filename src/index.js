function searchCityInput(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}
let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", searchCityInput);

let currentDate = document.querySelector("#current-date");
let now = new Date();
console.log(now);

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
  "Saturday"
];
let day = days[now.getDay()];
currentDate.innerHTML = `${day}, ${hours}:${minutes}`;

function displayTemp(response) {
  //document.querySelector("#city-input").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

//function searchCity(city) {}

//let city = document.querySelector("#city-input").value;
//searchCity(city);

function showPosition(position) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let lat = Math.round(position.coords.latitude);
  let lon = Math.round(position.coords.longitude);

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios.get(url).then(displayTemp);
}
navigator.geolocation.getCurrentPosition(showPosition);

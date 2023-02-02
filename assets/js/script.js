var searchOptions = document.querySelector('#city-search');
//var searchButtonsEl = document.querySelector('#search-buttons');
var cityInputName = document.querySelector('#cityname');
var forecastEl = document.querySelector('#forecast');
var fiveDayEl = document.querySelector('#fiveday');
var temperatureEl = document.querySelector("#temperature")
var windSpeedEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");
var selectCityEl =document.getElementById("select-city")


//click search button
var formSubmitHandler = function (event) {
    event.preventDefault();
    var city = cityInputName.value.trim();
    if (city) {
        // (cityInputName);
        // forecastEl.textContent ='';
        getApi(city)
        cityInputName.value='';

    }
};


//Seach button click event
var buttonClickHandler = function (event) {
    event.preventDefault();
    var city = event.target.getAttribute('data-city');
    
    if(city){
        console.log(city);
        //(cityInputName);
        //forecastEl.textContent ='';
        
    }
    
};

//Call API
var APIKey="89bf41583e30d5bf31930db45b5bf434";




function getApi(city) {
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+APIKey;
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      var city={
        name:data.name,
        lat:data.coord.lat,
        lon:data.coord.lon,
      }
      callForecast(city)
      displayWeather(data)
      creatButton (city)
    });
}
function creatButton (c) {
var historyButtonEl = document.getElementById('card history')
}
function callForecast (city){
var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${APIKey}`
fetch(url)
    .then((resp) => {
    if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      console.log(data)
    })
    .catch(console.err);
}




function displayWeather(data){
    console.log(data);
    selectCityEl.textContent =data.name
    temperatureEl.textContent = `${data.main.temp} F`
    
    windSpeedEl.textContent =data.wind.speed+" MPH"
    humidityEl.textContent=data.main.humidity+" %"
}




//Event listeners
searchOptions.addEventListener('submit', formSubmitHandler);
//searchButtonsEl.addEventListener('click', buttonClickHandler);
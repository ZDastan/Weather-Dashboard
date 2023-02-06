var searchOptions = document.querySelector('#city-search');
var searchButtonsEl = document.querySelector('#search-buttons');
var cityInputName = document.querySelector('#cityname');
var forecastEl = document.querySelector('#forecast');
var fiveDayEl = document.querySelector('#fiveday');
var temperatureEl = document.querySelector("#temperature")
var windSpeedEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");
var selectCityEl =document.getElementById("select-city");
var cardHistoryEl =document.getElementById("card history");
var weatherEl=document.getElementById("weather")
const historyEl = document.getElementById("history");
let searchHistory = JSON.parse(localStorage.getItem("cityname")) || [];


//click search button
var formSubmitHandler = function (event) {
    event.preventDefault();
    var city = cityInputName.value.trim();
    if (city) {
       
        getApi(city)
        //cityInputName.value='';

    }
};


//Seach button click event
var buttonClickHandler = function (event) {
    event.preventDefault();
    var city = event.target.getAttribute('cityname');
    city = JSON.parse(city);
    console.log(city);
   
    
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

}
function fiveDayForecast(data){
    weatherEl.innerText=``
    for (var i=0;i <data.list.length;i=i+8){
        console.log(data.list[i])
        var forecastCard=document.createElement("div")
        var forecastTemp=document.createElement("p")
        var displayDate=document.createElement("h3")
        var humidity=document.createElement("p")
        var wind=document.createElement("p")
       var date=new Date(data.list[i].dt*1000)
        var dateFormat=date.toLocaleDateString()
        displayDate.textContent=dateFormat
        forecastCard.setAttribute("class","card col-2")
        forecastTemp.textContent=`temp: ${data.list[i].main.temp}`
        humidity.textContent=`humidity:${data.list[i].main.humidity}`
        wind.textContent=`wind:${data.list[i].wind.speed}`
        weatherEl.appendChild(forecastCard)
        forecastCard.appendChild(displayDate)
        displayDate.append(forecastTemp)
        forecastTemp.append(humidity)
        humidity.appendChild(wind)


    }
}

function callForecast (city){
var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${APIKey}`
fetch(url)
    .then((resp) => {
    if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      
      fiveDayForecast(data)
    })
    .catch(console.err);
}




function displayWeather(data){
    console.log(data.name);
    const searchTerm = data.name;
    //displayWeather(searchTerm);
    searchHistory.push(searchTerm);
    
    localStorage.setItem("cityname", JSON.stringify(searchHistory));
    selectCityEl.textContent =data.name
    temperatureEl.textContent = `${data.main.temp} F`
    
    windSpeedEl.textContent =data.wind.speed+" MPH"
    humidityEl.textContent=data.main.humidity+" %"
}




//Event listeners
searchOptions.addEventListener('submit', formSubmitHandler);
//searchButtonsEl.addEventListener('click', buttonClickHandler);
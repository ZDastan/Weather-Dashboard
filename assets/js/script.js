var searchOptions = document.querySelector('#city-search');
var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputName = document.querySelector('#cityname');
var forecastEl = document.querySelector('#forecast');
var fiveDayEl = document.querySelector('#fiveday');

//If city name not type and click search button
var formSubmitHandler = function (event) {
    event.preventDefault();
    if (cityname) {
        getCityName(cityname);
        forecastEl.textContent ='';
        cityInputName.value='';

    }else{
        alert('Please enter city name');
    }
};


//Seach button click event
var buttonClickHandler = function (event) {
    var city = event.target.getAttribute('data-city');
    if(city){
        getFeatureForecast(city);
        forecastEl.textContent ='';

    }
};

//Call API
var APIKey="89bf41583e30d5bf31930db45b5bf434";
var city = ["Atlanta", "Denver", "Seattle", "San Francisco", "Orlando", "New York", "Chicago", "Austin"];

function getApi() {
    var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q ='city'+ &appid= +'APIKey'";
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}



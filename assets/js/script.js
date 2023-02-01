var searchOptions = document.querySelector('#city-search');
//var searchButtonsEl = document.querySelector('#search-buttons');
var cityInputName = document.querySelector('#cityname');
var forecastEl = document.querySelector('#forecast');
var fiveDayEl = document.querySelector('#fiveday');

//If city name not type and click search button
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
      console.log(data);
    });
}



//curent weather
// var nameValue = data['name'];
// var temperature = data['main']['temp'];
// var wind =data['wind'];
// var humiditiy = data['main']['humidity'];
// var descValue = data






//Event listeners
searchOptions.addEventListener('submit', formSubmitHandler);
//searchButtonsEl.addEventListener('click', buttonClickHandler);
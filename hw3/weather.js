let updateWidget1 = function(data) {
  // console.log("Got weather data: ", data)
  // YOUR CODE GOES HERE
  let a = Math.round(data.main.temp)
  // console.log(a)
  $(".card-text").html("It is " + a + " degrees outside.")
  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.
  let b = data.weather[0].icon
  let iconURL = "http://openweathermap.org/img/w/" + b + ".png"
  $("img").attr("src", iconURL)
}

let updateWidget2 = function(data) {
  // console.log(data)
  let a = data.results[3].address_components[1].long_name
  // console.log(a)
  $(".card-title").html(a)
}

let getWeather = function(info) {
  // let latitude = '48.8566';
  // let longitude = '2.3522';
  let latitude = info.coords.latitude.toFixed(4)
  let longitude = info.coords.longitude.toFixed(4)
  // console.log(info)
  let city = getCity(latitude, longitude)
  // console.log(latitude)
  // console.log(longitude)
  let apiKey = '9db500e598e24ccfe3b005d62e7788c1'; // REPLACE THIS VALUE with your own key.
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
  // console.log(weatherServiceURL)
  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget1).catch(displayError);
}

let getCity = function(lat, lng) {
  // console.log("Start getCity")
  // console.log(lat)
  // console.log(lng)
  // let api = 'AIzaSyBmRI-eAtLsPmdJRmDmSrqNKHqQZtL4eJk'
  // console.log(api)
  let googleURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
  googleURL = googleURL + lat + "," + lng
  googleURL = googleURL + "&key=AIzaSyBmRI-eAtLsPmdJRmDmSrqNKHqQZtL4eJk"
  // console.log(googleURL)
  fetch(googleURL).then(convertToJSON).then(updateWidget2).catch(displayError);
}


let currentPosition = function(event) {
  // console.log("Starting")
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
  // console.log("Ending")
}

$("#get_forecast").on("click", currentPosition)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

// Your code goes here:

let runJava = function(event){
  var url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=70cbf18c1a2f4ec98a9cc24eafd7385b';
  var req = new Request(url);
  fetch(req).then(convertToJSON).then(updatePage).catch(displayError)
}

let updatePage = function(data){
  let value = Math.floor(Math.random() * 20) + 1;
  jQuery("#headline1").html(data.articles[value].source.name)
  jQuery("#subhead1").html(data.articles[value].title)
  jQuery(".description1").html(data.articles[value].description)
  jQuery("#media1").attr("src", data.articles[value].urlToImage)
  jQuery(".link1").attr("href", data.articles[value].url)
  value = value + 1;
  jQuery("#headline2").html(data.articles[value].source.name)
  jQuery("#subhead2").html(data.articles[value].title)
  jQuery(".description2").html(data.articles[value].description)
  jQuery("#media2").attr("src", data.articles[value].urlToImage)
  jQuery(".link2").attr("href", data.articles[value].url)
  value = value + 1;
  jQuery("#headline3").html(data.articles[value].source.name)
  jQuery("#subhead3").html(data.articles[value].title)
  jQuery(".description3").html(data.articles[value].description)
  jQuery("#media3").attr("src", data.articles[value].urlToImage)
  jQuery(".link3").attr("href", data.articles[value].url)
  value = value + 1;
  jQuery("#headline4").html(data.articles[value].source.name)
  jQuery("#subhead4").html(data.articles[value].title)
  jQuery(".description4").html(data.articles[value].description)
  jQuery("#media4").attr("src", data.articles[value].urlToImage)
  jQuery(".link4").attr("href", data.articles[value].url)
  value = value + 1;
  jQuery("#headline5").html(data.articles[value].source.name)
  jQuery("#subhead5").html(data.articles[value].title)
  jQuery(".description5").html(data.articles[value].description)
  jQuery("#media5").attr("src", data.articles[value].urlToImage)
  jQuery(".link5").attr("href", data.articles[value].url)
}

let getTemp = function(info){
  let latitude = info.coords.latitude.toFixed(4)
  let longitude = info.coords.longitude.toFixed(4)
  let apiKey = '9db500e598e24ccfe3b005d62e7788c1'; // REPLACE THIS VALUE with your own key.
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'
  fetch(weatherServiceURL).then(convertToJSON).then(updateHeader).catch(displayError);
}

let updateHeader = function(info){
  let allText = "The temperature in " + info.name + " is " + info.main.temp + " degrees F"
  jQuery("#weather1").html(allText)
}

let currentPosition = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getTemp);
}

let retrieveJoke = function() {
  let url = 'https://api.chucknorris.io/jokes/random'
  fetch(url).then(convertToJSON).then(updateJoke).catch(displayError);
}

let updateJoke = function(info) {
  jQuery("#norris1").html(info.value)
}

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
jQuery("#buttonJava").click(runJava)
jQuery("#temp").click(currentPosition)
jQuery("#norris").click(retrieveJoke)

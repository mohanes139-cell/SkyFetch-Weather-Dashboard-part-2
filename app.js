const apiKey = "8700b9af8a32a4b2b24d5969ebe5ae49";

const button = document.getElementById("searchBtn");

button.addEventListener("click", getWeather);

async function getWeather(){

const city = document.getElementById("cityInput").value.trim();

const loading = document.getElementById("loading");
const error = document.getElementById("error");

error.innerText="";

if(city===""){
error.innerText="Please enter a city name";
return;
}

loading.innerText="Loading weather...";

try{

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response=await axios.get(url);

const data=response.data;

document.getElementById("cityName").innerText=data.name;
document.getElementById("temperature").innerText="Temperature: "+data.main.temp+" °C";
document.getElementById("description").innerText=data.weather[0].description;

const icon=data.weather[0].icon;

document.getElementById("icon").src=`https://openweathermap.org/img/wn/${icon}@2x.png`;

loading.innerText="";

}

catch(err){

loading.innerText="";
error.innerText="City not found. Please enter a valid city.";

}

}
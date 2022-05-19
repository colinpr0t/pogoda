const apiKey = "72a54cd0537eafe3b2b91002b47b31c7";

const showWeather = (weatherInfo) => {

    console.log(weatherInfo);
    const city = document.getElementById("CityName")
    city.textContent = weatherInfo.name
    //Miasto

    const country = document.getElementById("Country")
    let pogoda = weatherInfo.sys.country
    let myImage = new Image(35, 20)
    myImage.src = `png/${pogoda.toLowerCase()}.png`;
    country.appendChild(myImage);
    //Flagi

    const temp = document.getElementById("Temperature")
    temp.textContent = `Temperatura wynosi ${(weatherInfo.main.temp - 273.15).toFixed(1)}°C`;
    //Temperatura

    const clouds = document.getElementById("Clouds")
    let myImageCloud = new Image(60, 60)
    myImageCloud.src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`;
    clouds.appendChild(myImageCloud);
    //chmury
}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}

const getWeatherByLocation = (info) => {
    const lon = info.coords.longitude;
    const lat = info.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(url)
    .then((res) => res.json())
    .then((res) => showWeather(res))
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos)=>getWeatherByLocation(pos))
}
getMyLocation();

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("Clock").innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


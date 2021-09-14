const APIKEY = '5463c2b34dff3fc78bbd42b43c44f0d2';
const SearchInput = document.querySelector('#search-input');
const Default = '--';
WeatherDefault();
//weather
const NameCity = document.getElementById('name-city');
const Status = document.getElementById('status');
const ImgWeather = document.getElementById('img-weather');
const Temperature = document.getElementById('temperature');
//status
const Sunrise = document.getElementById('sunrise');
const Sunset = document.getElementById('sunset');
const Humidity = document.getElementById('humidity');
const WindSpeed = document.getElementById('wind-speed');

function WeatherDefault (){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=bien hoa&appid=${APIKEY}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json();
        console.log('data', data);

        NameCity.innerHTML = data.name || Default ;
        Status.innerHTML = data.weather[0].description || Default ;
        ImgWeather.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        Temperature.innerHTML = Math.round(data.main.temp)  || Default ;

        Sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:m') || Default ;
        Sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || Default ;
        Humidity.innerHTML = data.main.humidity || Default ;
        WindSpeed.innerHTML = data.wind.speed || Default ;
    })
}

SearchInput.addEventListener('change',(e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APIKEY}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json();
        console.log('data', data);

        NameCity.innerHTML = data.name || Default ;
        Status.innerHTML = data.weather[0].description || Default ;
        ImgWeather.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        Temperature.innerHTML = Math.round(data.main.temp)  || Default ;

        Sunrise.innerHTML = moment.unix(data.sys.sunrise).format('LT') || Default ;
        Sunset.innerHTML = moment.unix(data.sys.sunset).format('LT') || Default ;
        Humidity.innerHTML = data.main.humidity || Default ;
        WindSpeed.innerHTML = data.wind.speed || Default ;
    })
})

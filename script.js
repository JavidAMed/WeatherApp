const APIkey="66b5db0a90e8c29c7054f160d85972a2";
const APIurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srchBox= document.querySelector('.search-box input');
const srchBtn= document.querySelector('.search-box button');
const weatherIcon= document.querySelector('.weather-icon');


async function checkWeather(City){
    const response= await fetch(APIurl + City +`&appid=${APIkey}`);
    let data= await response.json();

    if(response.status === 404){
        document.querySelector('.error').style.display= 'block';
    }

    else{

    document.querySelector('.City').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= `${Math.round(data.main.temp)}°C`;
    document.querySelector('.humidity-number').innerHTML= `${Math.round(data.main.humidity)}%`;
    document.querySelector('.windspeed-number').innerHTML= `${Math.round(data.wind.speed)} km/hr`;
    

    if (data.weather[0].main == 'Clouds'){
        weatherIcon.src = './clouds.png';
    }

    else if (data.weather[0].main == 'Clear'){
        weatherIcon.src = './clear.png';
    }

    else if (data.weather[0].main == 'Rain'){
        weatherIcon.src = './rain.png';
    }

    else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src = './drizzle.png';
    }

    else if (data.weather[0].main == 'Snow'){
        weatherIcon.src = './snow.png';
    }

    else if (data.weather[0].main == 'Wind'){
        weatherIcon.src = './wind.png';
    }

    else if (data.weather[0].main == 'Mist'){
        weatherIcon.src = './mist.png';
    }

    document.querySelector('.content').style.display= 'block';
    document.querySelector('.error').style.display= 'none';

    console.log(data);
}

}
srchBtn.addEventListener("click",()=>{checkWeather(srchBox.value)});

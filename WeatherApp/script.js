let btn = document.getElementById('btn')
let input = document.getElementById('input')
const apiKey = "&appid=c583570827efcac4799d992b796bedf7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

async function apiCall(city) {
    let response = await fetch(apiUrl + city + apiKey + `&units=metric`)
    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = "none"
    }
    else {
        let data = await response.json()
        console.log(data)

        document.getElementById('city').innerHTML = data.name
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°C"
        document.getElementById('Humidity-value').innerHTML = data.main.humidity + "%"
        document.getElementById('wind-value').innerHTML = data.wind.speed + " km/h"
        document.getElementById('climate').src = "images/" + data.weather[0].main + ".png"
        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = 'none'       
        console.log(data.weather[0].main) 

        if(data.weather[0].main==='Drizzle'||data.weather[0].main==='Rain'||data.weather[0].main==='Thunderstorm'){
            document.querySelector('.bg').src="images/rainySky.jpg"
        }
        else if(data.weather[0].main==='Haze'||data.weather[0].main==='Clouds'){
            document.querySelector('.bg').src="images/cloudySky.jpg"
        }
        else{
            document.querySelector('.bg').src="images/Scene-7.jpg"
        }
    }
}

btn.addEventListener("click", () => {
    let city = input.value
    apiCall(city)
})

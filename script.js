
const loco = document.querySelector(".location");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const description = document.querySelector(".description");

const input = document.querySelector(".input")

console.log(loco)

async function getWeather(place) {
    try {
        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&APPID=89262fb5d98ce5832a2c7c8f193bf08c"

        const response = await fetch(url)
        if (!response.ok) return

        const jsonResponse = await response.json()

        loco.textContent = jsonResponse.name
        temp.textContent = jsonResponse.main.temp
        wind.textContent = jsonResponse.wind.speed
        description.textContent = jsonResponse.weather[0].main

        console.log(loco)
        console.log(jsonResponse)
    }
    catch (err){
        console.log(err)
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key != "Enter") return
    if (input.value === "") return 

    getWeather(input.value)
});

getWeather("Japan")
var Cities = JSON.parse(localStorage.getItem("Cities"))

var daySearch = document.querySelector (".daySearch")
var citySearch = document.querySelector (".citySearch")
var dayTemp = document.querySelector (".dayTemp")
var dayWind = document.querySelector (".dayWind")
var dayHumid = document.querySelector (".dayHumid")

daySearch.addEventListener("click", Search )

function Search (event) {
    event.preventDefault()
    console.log("Hello World");

    var API_key = "b6305e4b1ffbac61d89ad3be46a62ef4"
    var cityName = citySearch.value 

    Cities.push(cityName)
    generateHistory(cityName)
    localStorage.setItem("Cities",JSON.stringify(Cities))

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
    .then(res => res.json())
    .then(data => {

        console.log(data)

        var temp = data.main.temp;

        var convertedTemp = Math.round((temp - 273.15) * 9/5 + 32)

        var windSpeed = data.wind.speed;
        var humidity = data.main.humidity;
    
        // dayTemp.textContent = "Temp: " + temp + " °F"
        dayTemp.textContent = `Temp: ${convertedTemp} °F`
        dayWind.textContent = `windspeed: ${windSpeed} MPH`
        dayHumid.textContent = `Humidity: ${humidity} %`

        // second fetch API
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_key}`)
        .then(res => res.json())
        .then(data2 => {
            console.log(data2)

            // display 5 day data

        })

    })

};



function generateHistory (cityName){
    var historyButton = document.createElement('button')
    historyButton.textContent = cityName
    historyButton.classList.add("cityHistory")
    var historyDiv = document.querySelector (".history")
    historyDiv.append(historyButton)
}
for (let i = 0; i < Cities.length; i++) {
    generateHistory(Cities[i])
    
}
var Cities = JSON.parse(localStorage.getItem("Cities"))

var daySearch = document.querySelector(".daySearch")
var citySearch = document.querySelector(".citySearch")
var dayTemp = document.querySelector(".dayTemp")
var dayWind = document.querySelector(".dayWind")
var dayHumid = document.querySelector(".dayHumid")
var dayCity = document.querySelector(".dayCity")
var dayIcon = document.querySelector(".dayIcon")
var dayUvi = document.querySelector(".dayUvi")
var dayTemp2 = document.querySelector(".dayTemp2")
var dayWind2 = document.querySelector(".dayWind2")
var dayHumid2 = document.querySelector(".dayHumid2")
var dayIcon2 = document.querySelector(".dayIcon2")
var dayUvi2 = document.querySelector(".dayUvi2")
var dayDate2 = document.querySelector(".dayCity2")


daySearch.addEventListener("click", Search)

function Search(event) {
    event.preventDefault()
    console.log("Hello World");

    var API_key = "b6305e4b1ffbac61d89ad3be46a62ef4"
    var cityName = citySearch.value

    Cities.push(cityName)
    generateHistory(cityName)
    localStorage.setItem("Cities", JSON.stringify(Cities))

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
        .then(res => res.json())
        .then(data => {

            console.log(data)

            var temp = data.main.temp;

            var convertedTemp = Math.round((temp - 273.15) * 9 / 5 + 32)

            var windSpeed = data.wind.speed;
            var humidity = data.main.humidity;
            var date = moment(data.dt * 1000).format("M/D/YYYY");


            // dayTemp.textContent = "Temp: " + temp + " °F"
            dayTemp.textContent = `Temp: ${convertedTemp} °F`;
            dayWind.textContent = `windspeed: ${windSpeed} MPH`;
            dayHumid.textContent = `Humidity: ${humidity} %`;
            dayCity.textContent = `${data.name} (${date})`;
            dayIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)



            // second fetch API
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_key}`)
                .then(res => res.json())
                .then(data2 => {
                    console.log(data2)

                    dayUvi.textContent = `UV Index: ${data2.daily[0].uvi}`

                    var temp2 = data2.daily[1].temp.day


                    var convertedTemp2 = Math.round(temp2 - 273.15) * 9 / 5 + 32


                    var windSpeed2 = data2.daily[1].wind_speed;

                    var humidity2 = data2.daily[1].humidity;

                    var date2 = moment(data2.daily[1].dt * 1000).format("M/D/YYYY");

                    dayTemp2.textContent = `Temp: ${convertedTemp2} °F`;

                    dayWind2.textContent = `windspeed: ${windSpeed2} MPH`;

                    dayHumid2.textContent = `Humidity: ${humidity2} %`;

                    dayDate2.textContent = `${data2.name} (${date2})`;

                    dayIcon2.setAttribute("src", `https://openweathermap.org/img/wn/${data2.daily[1].weather[0].icon}.png`);





                    dayUvi2.textContent = `UV Index: ${data2.daily[1].uvi}`
                    // display 5 day data

                })

        })

};



function generateHistory(cityName) {
    var historyButton = document.createElement('button')
    historyButton.textContent = cityName
    historyButton.classList.add("cityHistory")
    var historyDiv = document.querySelector(".history")
    historyDiv.append(historyButton)
}
for (let i = 0; i < Cities.length; i++) {
    generateHistory(Cities[i])

}
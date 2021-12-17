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
var dayDate2 = document.querySelector(".dayDate2")
var dayUvi3 = document.querySelector(".dayUvi3")
var dayTemp3 = document.querySelector(".dayTemp3")
var dayWind3 = document.querySelector(".dayWind3")
var dayHumid3 = document.querySelector(".dayHumid3")
var dayDate3 = document.querySelector(".dayDate3")
var dayIcon3 = document.querySelector(".dayIcon3")
var dayUvi4 = document.querySelector(".dayUvi4")
var dayTemp4 = document.querySelector(".dayTemp4")
var dayWind4 = document.querySelector(".dayWind4")
var dayHumid4 = document.querySelector(".dayHumid4")
var dayDate4 = document.querySelector(".dayDate4")
var dayIcon4 = document.querySelector(".dayIcon4")
var dayUvi5 = document.querySelector(".dayUvi5")
var dayTemp5 = document.querySelector(".dayTemp5")
var dayWind5 = document.querySelector(".dayWind5")
var dayHumid5 = document.querySelector(".dayHumid5")
var dayDate5 = document.querySelector(".dayDate5")
var dayIcon5 = document.querySelector(".dayIcon5")
var dayUvi6 = document.querySelector(".dayUvi6")
var dayTemp6 = document.querySelector(".dayTemp6")
var dayWind6 = document.querySelector(".dayWind6")
var dayHumid6 = document.querySelector(".dayHumid6")
var dayDate6 = document.querySelector(".dayDate6")
var dayIcon6 = document.querySelector(".dayIcon6")



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
                    dayUvi2.textContent = `UV Index: ${data2.daily[1].uvi}`
                    dayUvi3.textContent = `UV Index: ${data2.daily[2].uvi}`
                    dayUvi4.textContent = `UV Index: ${data2.daily[3].uvi}`
                    dayUvi5.textContent = `UV Index: ${data2.daily[4].uvi}`
                    dayUvi6.textContent = `UV Index: ${data2.daily[5].uvi}`

                    var temp2 = data2.daily[1].temp.day
                    var temp3 = data2.daily[2].temp.day
                    var temp4 = data2.daily[3].temp.day
                    var temp5 = data2.daily[4].temp.day
                    var temp6 = data2.daily[5].temp.day


                    var convertedTemp2 = Math.round(temp2 - 273.15) * 9 / 5 + 32
                    var convertedTemp3 = Math.round(temp3 - 273.15) * 9 / 5 + 32
                    var convertedTemp4 = Math.round(temp4 - 273.15) * 9 / 5 + 32
                    var convertedTemp5 = Math.round(temp5 - 273.15) * 9 / 5 + 32
                    var convertedTemp6 = Math.round(temp6 - 273.15) * 9 / 5 + 32



                    var windSpeed2 = data2.daily[1].wind_speed;
                    var windSpeed3 = data2.daily[2].wind_speed;
                    var windSpeed4 = data2.daily[3].wind_speed;
                    var windSpeed5 = data2.daily[4].wind_speed;
                    var windSpeed6 = data2.daily[5].wind_speed;

                    var humidity2 = data2.daily[1].humidity;
                    var humidity3 = data2.daily[2].humidity;
                    var humidity4 = data2.daily[3].humidity;
                    var humidity5 = data2.daily[4].humidity;
                    var humidity6 = data2.daily[5].humidity;

                    var date2 = moment(data2.daily[1].dt * 1000).format("M/D/YYYY");
                    var date3 = moment(data2.daily[2].dt * 1000).format("M/D/YYYY");
                    var date4 = moment(data2.daily[3].dt * 1000).format("M/D/YYYY");
                    var date5 = moment(data2.daily[4].dt * 1000).format("M/D/YYYY");
                    var date6 = moment(data2.daily[5].dt * 1000).format("M/D/YYYY");

                    dayTemp2.textContent = `Temp: ${convertedTemp2} °F`;
                    dayTemp3.textContent = `Temp: ${convertedTemp3} °F`;
                    dayTemp4.textContent = `Temp: ${convertedTemp4} °F`;
                    dayTemp5.textContent = `Temp: ${convertedTemp5} °F`;
                    dayTemp6.textContent = `Temp: ${convertedTemp6} °F`;

                    dayWind2.textContent = `windspeed: ${windSpeed2} MPH`;
                    dayWind3.textContent = `windspeed: ${windSpeed3} MPH`;
                    dayWind4.textContent = `windspeed: ${windSpeed4} MPH`;
                    dayWind5.textContent = `windspeed: ${windSpeed5} MPH`;
                    dayWind6.textContent = `windspeed: ${windSpeed6} MPH`;

                    dayHumid2.textContent = `Humidity: ${humidity2} %`;
                    dayHumid3.textContent = `Humidity: ${humidity3} %`;
                    dayHumid4.textContent = `Humidity: ${humidity4} %`;
                    dayHumid5.textContent = `Humidity: ${humidity5} %`;
                    dayHumid6.textContent = `Humidity: ${humidity6} %`;

                    dayDate2.textContent = `(${date2})`;
                    dayDate3.textContent = `(${date3})`;
                    dayDate4.textContent = `(${date4})`;
                    dayDate5.textContent = `(${date5})`;
                    dayDate6.textContent = `(${date6})`;

                    dayIcon2.setAttribute("src", `https://openweathermap.org/img/wn/${data2.daily[1].weather[0].icon}.png`);
                    dayIcon3.setAttribute("src", `https://openweathermap.org/img/wn/${data2.daily[2].weather[0].icon}.png`);
                    dayIcon4.setAttribute("src", `https://openweathermap.org/img/wn/${data2.daily[3].weather[0].icon}.png`);
                    dayIcon5.setAttribute("src", `https://openweathermap.org/img/wn/${data2.daily[4].weather[0].icon}.png`);
                    dayIcon6.setAttribute("src", `https://openweathermap.org/img/wn/${data2.daily[5].weather[0].icon}.png`);







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
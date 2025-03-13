const input = document.getElementById("input");
const submit = document.getElementById("submit");
const results = document.createElement("div");
const tempDiv = document.createElement("div");
results.classList.add("data-container");
tempDiv.classList.add("temp-details-container");

submit.addEventListener("click", (e) => {
  results.innerHTML = "";
  e.preventDefault();
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=FZ9FCM8RL2W3X3KAPPELN6L3Q`;
  const weatherData = async () => {
    const res = await fetch(URL, { mode: "cors" });
    const data = await res.json();

    function handlePrecip() {
      if (data.currentConditions.precip === null) {
        return 0;
      }
      return data.currentConditions.precip;
    }

    function handleDegree(temp) {
      let fahrenheit = temp;
      let toCelsius = ((fahrenheit - 32) * 5) / 9;
      return toCelsius.toFixed(0);
    }

    tempDiv.innerHTML = `<h1 class="temp">${handleDegree(
      data.currentConditions.temp
    )}<span class="degree">°</span><sup>c</sup></h1>
        <p>${data.resolvedAddress}, ${data.days[0].datetime}</p>
        <p class="condition">${data.currentConditions.conditions}</p>
        `;

    results.innerHTML = `
    <h4>Basic Status</h4>
    <p>Visibility: ${data.currentConditions.visibility}</p>
    <p>Humidity: ${data.currentConditions.humidity}</p>
    <p>Precip: ${handlePrecip()}</p>
    <hr>

    <h4>Wind status</h4>
    <p>Windgust: ${data.currentConditions.windgust}</p>
    <p>Windspeed: ${data.currentConditions.windspeed}</p>
    <p>Winddir: ${data.currentConditions.winddir}</p>
    <hr>

    <h4>Celestial Events</h4>
    <p>Moonphase: ${data.currentConditions.moonphase}</p>
    <p>Sunrise: ${data.currentConditions.sunrise} AM</p>
    <p>Sunset: ${data.currentConditions.sunset} PM</p>
    <hr>

    <h4>Daily Forecast</h4>
    <div class="forecast">
      <div>
      <p>${data.days[0].datetime}</p>
      <p>Max: ${handleDegree(data.days[0].tempmax)}°</p>
      <p>Min: ${handleDegree(data.days[0].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[1].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[1].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[2].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[2].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[3].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[3].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[4].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[4].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[5].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[5].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[6].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[6].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[7].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[7].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[8].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[8].tempmin)}°</p>
      </div>
      <hr>
      <div>
        <p>${data.days[0].datetime}</p>
        <p>Max: ${handleDegree(data.days[9].tempmax)}°</p>
        <p>Min: ${handleDegree(data.days[9].tempmin)}°</p>
      </div>
    </div>
    `;

    const forecast = document.createElement("div");
    forecast.innerHTML = ``;

    document.body.appendChild(tempDiv);
    document.body.appendChild(results);

    console.log(data);
    input.value = "";
  };
  weatherData();
});

// <h4>Temperature Status</h4>
// <p>Feels like: ${handleDegree(data.currentConditions.feelslike)}°</p>
// <p>Max Temperature: ${handleDegree(data.days[0].tempmax)}°</p>
// <p>Min Temperature: ${handleDegree(data.days[0].tempmin)}°</p>
// <hr>

const input = document.getElementById("input");
const submit = document.getElementById("submit");
const results = document.createElement("div");

submit.addEventListener("click", (e) => {
  results.innerHTML = "";
  e.preventDefault();
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=FZ9FCM8RL2W3X3KAPPELN6L3Q`;
  const weatherData = async () => {
    const res = await fetch(URL, { mode: "cors" });
    const data = await res.json();

    let fahrenheit = data.currentConditions.feelslike;
    let toCelsius = ((fahrenheit - 32) * 5) / 9;
    results.innerHTML = `
    <p class="feels-like">${toCelsius.toFixed(
      0
    )}<span class="degree">°</span><sup>c</sup></p>
    <p>Current Condition: ${data.currentConditions.conditions}</p>
    <p>Humidity: ${data.currentConditions.humidity}</p>
    <p>Precip: ${data.currentConditions.precip}</p>
    `;
    console.log(data);
    document.body.appendChild(results);
  };
  weatherData();
});

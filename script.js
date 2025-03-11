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
    results.innerHTML = `
    <p>Current Condition: ${data.currentConditions.conditions}</p>
    <p>feels like: ${data.currentConditions.feelslike}</p>
    <p>Humidity: ${data.currentConditions.humidity}</p>
    <p>Precip: ${data.currentConditions.precip}</p>
    `;
    console.log(data);
    document.body.appendChild(results);
  };
  weatherData();
});

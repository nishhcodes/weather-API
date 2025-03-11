const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?key=FZ9FCM8RL2W3X3KAPPELN6L3Q";

const weatherData = async () => {
  const res = await fetch(URL, { mode: "cors" });
  const data = await res.json();
  console.log(data);
  console.log(data.address);
  console.log(data.currentConditions.conditions);
  console.log(data.currentConditions.feelslike);
  console.log(data.currentConditions.humidity);
};
weatherData();

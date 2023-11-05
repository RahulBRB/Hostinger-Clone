
let x=document.getElementById("out_weather");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherData);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getWeatherData(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=21d9279875a92557db21d88b348cde32`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const temperatureInCelsius = data.main.temp - 273.15; 

      x.innerText = `City: ${cityName}, Temperature: ${temperatureInCelsius.toFixed(2)}°C`;
    })
    .catch((error) => {
      x.innerText = "Failed to fetch weather data.";
    });
}

window.onload = () => {
    onLoadPage();
}
window.onload = () => {
    geolocation();
}
window.onload = () => {
    geolocation();
}
const onLoadPage = () =>{
    const couponBody = getDocumentsByClassName('coupon')[0];
    couponBody.style.visibility = 'visible'
}

const closeCoupon = () => {
    const couponElement = document.getElementsByClassName('coupon')[0];
    couponElement.style.visibility = 'hidden';
}


const mode = () => {
    let newbody = document.body;
    newbody.classList.toggle('dark');
}







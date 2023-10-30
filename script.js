let x=document.getElementById("out_weather");
let y=document.getElementById("weather");


function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)

    }else{
        x.innerText="Geolocation Not Supported"
    }
}

function showPosition(){
    console.log(data)
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;


    fetch(url,{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let cityName = data.city.name;
        let temp=data.list[0].temp.day+"°C";
        y.innerText="Weather in ${cityName} is ${temp}"
    })
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







let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    let city = document.getElementById("city").value
    let api_key = "340677cb6d7066e64bdaa44b46a6f727"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    let result = document.getElementById("result")

    fetch(api)
    .then((x)=>x.json())
    .then((y)=>{
        if(y.cod === "404"){
            alert("City not found")
        }else{
            result.innerHTML =`
            <h2> ${y.name}, ${y.sys.country} 📍</h2>
            <h3>Temperature 🌡️: ${y.main.temp}</h3>
            <h3>Weather ⛅: ${y.weather[0].description} </h3>
            <h4>Wind 🌬️: ${y.wind.speed}</h4>`
        }
    })
    
})
const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const input = document.querySelector(".search-box .input")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const error404 = document.querySelector(".not-found")
const image = document.querySelector('.weather-box img')
const temperature = document.querySelector('.weather-box .temperature')
const description = document.querySelector('.weather-box .description')
const humidity = document.querySelector('.weather-details .humidity span')
const wind = document.querySelector('.weather-details .wind span')
const weatherBoxID = document.getElementById("weather-box")
const weatherDetailsID = document.getElementById("weather-details")

  input.addEventListener("keydown",(e) => {
    if(e.keyCode === 13){
        e.preventDefault()
        Search()
    }
  })
  search.addEventListener("click",() => {
    Search()
  })

  const animationController = () => {
    const isFadeIn = weatherBox.classList.contains("fadeIn") && weatherDetails.classList.contains("fadeIn");

    const removeClass = isFadeIn ? "fadeIn" : "fadeIn1";
    const addClass = isFadeIn ? "fadeIn1" : "fadeIn";

    weatherBox.classList.remove(removeClass);
    weatherDetails.classList.remove(removeClass);
    weatherBox.classList.add(addClass);
    weatherDetails.classList.add(addClass);
  }
  
  const Search = () => {
    const APIKey = "174b5e11502df399af2407add8e93c33"
    const city = document.querySelector(".search-box input").value
    if(city === ""){
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(res => res.json())
    .then(
        data => {
            if(data.cod === "404"){
                container.style.height = "400px"
                container.style.backgroundColor = "red"
                weatherBox.style.display = "none"
                weatherDetails.style.display = "none"
                error404.style.display = "block"
                error404.classList.add("fadeIn")
            }
            else{
                error404.style.display = "none"
                error404.classList.remove("fadeIn")
                switch(data.weather[0].main){
                    case "Clouds":
                        image.src = "images/cloud.png"
                        container.style.backgroundColor = "#FEAA23"
                        animationController()
                        break;
                    case 'Clear':
                        image.src = "images/clear.png";
                        container.style.backgroundColor = "#01B9DF"
                        animationController()
                        break;
                    case 'Rain':
                        image.src = "images/rain.png";
                        container.style.backgroundColor = "#004B85"
                        animationController()
                        break;
                    case 'Snow':
                        image.src = "images/snow.png";
                        container.style.backgroundColor = "#7BC1E2"
                        animationController()
                        break;
                    case 'Smoke':
                        image.src = "images/smoke.png"
                        container.style.backgroundColor = "#0EAB8E"
                        animationController()
                        break;
                    default:
                        image.src = '';
                }
                temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`
                description.innerHTML = `${data.weather[0].description}`
                humidity.innerHTML = `${data.main.humidity}<span>%</span>`
                wind.innerHTML = `${parseInt(data.wind.speed)}<span>Km/h</span>`
    
                weatherBox.style.display = '';
                weatherDetails.style.display = '';
                container.style.height = '600px';
                console.log(data.weather[0].main)
                console.log(weatherBoxID.className)
                console.log(weatherDetailsID.className)
            }
        });
  }


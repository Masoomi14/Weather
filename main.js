


function chooseCity() {
  
  cityNew = document.getElementById('inputCity').value;

  city = cityNew;

  alert(city);

  strat ();

}



    function setData(info) {

    console.log(info.data);

      let country = info.data.request[0].query;
      let placeInfo = country.split(",");
      let city = placeInfo[0];
      document.querySelector("#city").textContent = city;


      let mainIcon = info.data.current_condition[0].weatherCode;


      let codeicon = {};

      codeWeather.some( function(weather) {
        
        if (mainIcon == weather.code) {

          codeicon = weather;


          return true;
        }

      });


      document.querySelector(".icon img").src = "./img/" + codeicon.day;
       


      let temperature = info.data.current_condition[0].temp_C;
      document.querySelector("#temperature").textContent = temperature;


      let time            =  info.data.current_condition[0].observation_time;
      document.querySelector("#time").textContent = time;


      let typeWeather     = info.data.current_condition[0].weatherDesc[0].value;
      document.querySelector("#typeWeather").textContent = typeWeather;


      let date            =  info.data.weather[0].date;
      document.querySelector("#date").textContent = date;


      let windSpeed   =    info.data.current_condition[0].windspeedKmph; 

      document.querySelector("#windSpeed").textContent = "Wind speed: " + windSpeed + " Km/s";
 
      const AQITable = [
        [1, "Good"],
        [2, "Moderate"],
        [3, "Unhealthy for sensitive group"],
        [4, "Unhealthy"],
        [5, "Very Unhealthy"],
        [6, "Hazardous"],
      ];

      let AQI   =    info.data.current_condition[0].air_quality["us-epa-index"];

      for (let i = 0; i < AQITable.length; i++) {
 
        if (AQITable[i][0] == AQI) {

          document.querySelector("#aqi").textContent =  "AQI " + AQITable[i][1];

        }
        
      }



      let forecast = [
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2],
        [1, 2]
      ];


      for (let i = 0; i < forecast.length; i++) {
        
        forecast[i][0]     = info.data.weather[i].maxtempC;
        forecast[i][1]     = info.data.weather[i].mintempC;

        
      }


      let futures = document.querySelectorAll("#weatherForecast");

      for (let i = 0; i < futures.length; i++) {
        
  
        futures[i].textContent =  "+ " + forecast[i][0] + " / " + "- " + forecast[i][1];
        
      }


      
      let foreastOneIcon = info.data.weather[0].hourly[4].weatherCode;
      let codeiconOne = {};

      codeWeather.some( function(weather) {
        
        if (foreastOneIcon == weather.code) {

          codeiconOne = weather;

          return true;
        }

      });
      document.querySelector("#weatherForecastOne").src = "./img/" + codeiconOne.day;


      let foreastTwoIcon = info.data.weather[1].hourly[4].weatherCode;
      let codeiconTwo = {};

      codeWeather.some( function(weather) {
        
        if (foreastTwoIcon == weather.code) {

          codeiconTwo = weather;

          return true;
        }

      });
      document.querySelector("#weatherForecastTwo").src =  "./img/" + codeiconTwo.day;




      let foreastThreeIcon = info.data.weather[2].hourly[4].weatherCode;
      let codeiconThree = {};

      codeWeather.some( function(weather) {
        
        if (foreastThreeIcon == weather.code) {

          codeiconThree = weather;

          return true;
        }

      });
      document.querySelector("#weatherForecastThree").src = "./img/" + codeiconThree.day;



      let foreastFourIcon = info.data.weather[3].hourly[4].weatherCode;
      let codeiconFour = {};

      codeWeather.some( function(weather) {
        
        if (foreastFourIcon == weather.code) {

          codeiconFour = weather;

          return true;
        }

      });
      document.querySelector("#weatherForecastFour").src = "./img/" + codeiconFour.day;


      






      let temperatureOne = info.data.weather[0].avgtempC;
      document.querySelector("#weatherOne").textContent = temperatureOne + " C";
      console.log(temperature, "fdsfsdfsdffffffffffffff");

      let temperatureTwo = info.data.weather[1].avgtempC;
      document.querySelector("#weatherTwo").textContent = temperatureTwo + " C";

      let temperatureThree = info.data.weather[2].avgtempC;
      document.querySelector("#weatherThree").textContent = temperatureThree + " C";

      let temperatureFour = info.data.weather[3].avgtempC;
      document.querySelector("#weatherFour").textContent = temperatureFour + " C";














      // info.data.weather[0].date;
      let ForecastOne = info.data.weather[0].date;
      document.querySelector("#dateForecastOne").textContent = ForecastOne;

      let ForecastTwo = info.data.weather[1].date;
      document.querySelector("#dateForecastTwo").textContent = ForecastTwo;


      let ForecastThree = info.data.weather[2].date;
      document.querySelector("#dateForecastThree").textContent = ForecastTwo;

      let ForecastFour = info.data.weather[3].date;
      document.querySelector("#dateForecastFour").textContent = ForecastTwo;


            const weekday = [
              "Sunday", 
              "Monday", 
              "Tuesday", 
              "Wednesday",
              "Thursday", 
              "Friday", 
              "Saturday"
            ];




  
    }

    
      let lon = "139.7744";
      let lat = "35.6839";
      let city = "";
      let key = "4e713d8245ba4ccdb9a141254231801";
      let lang = 'en';
      let units = 'metric';
      let current = 'current';
  
  


  
    
    function strat () {
    



  fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=bc210dd7f3114b8e891233207230604&q=${city}&fx=yes&cc=yes&mca=yes&fx24=yes&num_of_days=6&tp=3&showmap=yes&aqi=yes&format=json`)
      .then((response) => {
    
        return response.json();
      
      })
      .then((data) => {
  
          setData(data);
  
      })
      .catch(function(error) {
        console.log(error);
      });
  
  

  
    }
 
 
  
  
  let codeWeather = [

    { code: 113,  condition: "Clear/Sunny",  day: "clear-day.svg", night: "clear-night.svg" },

    { code: 116,  condition: "Partly Cloudy",  day: "partly-cloudy-day.svg", night: "partly-cloudy-night.svg" },

    { code: 119,  condition: "Cloudy",  day: "cloudy.svg", night: "cloudy.svg" },

    { code: 122,  condition: "Overcast",  day: "overcast-day.svg", night: "overcast-night.svg" },

    { code: 143,  condition: "Mist",  day: "mist.svg", night: "mist.svg" },




    { code: 176,  condition: "Patchy rain",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 179,  condition: "Patchy snow",  day: "partly-cloudy-day-snow.svg", night: "partly-cloudy-night-snow.svg" },

    { code: 182,  condition: "Patchy sleet",  day: "partly-cloudy-day-sleet.svg", night: "partly-cloudy-night-sleet.svg" },

    { code: 185,  condition: "Patchy freezing drizzle",  day: "partly-cloudy-day-drizzle.svg", night: "partly-cloudy-night-drizzle.svg" },

    { code: 200,  condition: "Thundery outbreaks",  day: "thunderstorms.svg", night: "thunderstorms.svg" },

    { code: 227,  condition: "Blowing snow",  day: "wind-snow.svg", night: "wind-snow.svg" },

    { code: 230,  condition: "Blizzard",  day: "wind-snow.svg", night: "wind-snow.svg" },



    { code: 248,  condition: "Fog",  day: "fog.svg", night: "fog-night.svg" },

    { code: 260,  condition: "Freezing fog",  day: "fog.svg", night: "fog-night.svg" },

    { code: 263,  condition: "Patchy light drizzle",  day: "drizzle.svg", night: "drizzle.svg" },

    { code: 266,  condition: "Light drizzle",  day: "partly-cloudy-day-drizzle.svg", night: "partly-cloudy-night-drizzle.svg" },

    { code: 281,  condition: "Freezing drizzle",  day: "partly-cloudy-day-drizzle.svg", night: "partly-cloudy-night-drizzle.svg" },

    { code: 284,  condition: "Heavy freezing drizzle",  day: "extreme-drizzle.svg", night: "extreme-drizzle.svg" },

    { code: 293,  condition: "Patchy light rain",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 296,  condition: "Light rain",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 299,  condition: "Moderate rain at times",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },






    { code: 302,  condition: "Moderate rain",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 305,  condition: "Heavy rain at times",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 308,  condition: "Heavy rain",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 311,  condition: "Light freezing rain",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 314,  condition: "Moderate or Heavy freezing rain",  day: "partly-cloudy-day-rain.svg", night: "partly-cloudy-night-rain.svg" },

    { code: 317,  condition: "Light sleet",  day: "partly-cloudy-day-sleet.svg", night: "partly-cloudy-night-sleet.svg" },

    { code: 320,  condition: "Moderate or heavy sleet",  day: "partly-cloudy-day-sleet.svg", night: "partly-cloudy-night-sleet.svg" },

    { code: 323,  condition: "Patchy light snow",  day: "snow.svg", night: "snow.svg" },

    { code: 326,  condition: "Light snow",  day: "snow.svg", night: "snow.svg" },

    { code: 329,  condition: "Patchy moderate snow",  day: "snow.svg", night: "snow.svg" },

    { code: 332,  condition: "Moderate snow",  day: "thunderstorms-snow.svg", night: "thunderstorms-snow.svg" },

    { code: 335,  condition: "Patchy heavy snow",  day: "overcast-snow.svg", night: "overcast-snow.svg" },

    { code: 338,  condition: "Heavy snow",  day: "overcast-snow.svg", night: "overcast-snow.svg" },

    { code: 350,  condition: "Ice pellets",  day: "overcast-hail.svg", night: "overcast-hail.svg" },




    { code: 353,  condition: "Light rain shower",  day: "drizzle.svg", night: "drizzle.svg" },

    { code: 356,  condition: "Moderate or heavy rain shower",  day: "thunderstorms-day-rain.svg", night: "thunderstorms-day-rain.svg" },

    { code: 359,  condition: "Torrential rain shower",  day: "thunderstorms-overcast-rain.svg", night: "thunderstorms-overcast-rain.svg" },

    { code: 362,  condition: "Light sleet showers",  day: "partly-cloudy-day-sleet.svg", night: "partly-cloudy-day-sleet.svg" },    

    { code: 365,  condition: "Moderate or heavy sleet showers",  day: "overcast-sleet.svg", night: "overcast-sleet.svg" },    

    { code: 368,  condition: "Light snow showers",  day: "snow.svg", night: "snow.svg" },

    { code: 371,  condition: "Moderate or heavy snow showers",  day: "thunderstorms-overcast-snow.svg", night: "thunderstorms-overcast-snow.svg" },

    { code: 374,  condition: "Light showers of ice pellets",  day: "thunderstorms-overcast-snow.svg", night: "thunderstorms-overcast-snow.svg" },

    { code: 377,  condition: "Moderate or heavy showers of ice pellets",  day: "thunderstorms-overcast-snow.svg", night: "thunderstorms-overcast-snow.svg" },

    { code: 386,  condition: "Patchy light rain in area with thunder",  day: "thunderstorms-overcast-rain.svg", night: "thunderstorms-overcast-rain.svg" },

    { code: 389,  condition: "Moderate or heavy rain in area with thunder",  day: "thunderstorms-extreme-rain.svg", night: "thunderstorms-extreme-rain.svg" },

    { code: 392,  condition: "Patchy light snow in area with thunder",  day: "thunderstorms-overcast-snow.svg", night: "thunderstorms-overcast-snow.svg" },

    { code: 395,  condition: "Moderate or heavy snow in area with thunder",  day: "thunderstorms-extreme-snow.svg", night: "thunderstorms-extreme-snow.svg" }

  ];









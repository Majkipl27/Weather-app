import Header from "./Components/Header";
import { Fragment, useState } from "react"
import WeatherDetail from "./Components/WeatherDetail";

let apiKey = "here type your api key";

function App() {
  const [weatherLocationDetail, setWeatherLocationDetail] = useState({
    city: void 0,
    temperature: void 0,
    pressure: void 0,
    icon: void 0,
    weatherStatus: void 0,
  });

  const fetchWeather = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      location
    }&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherLocationDetail({
          city: location.toUpperCase(),
          temperature: data.main.temp.toFixed(0) + "°C",
          pressure: data.main.pressure + " hPa",
          icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`,
          weatherStatus: data.weather[0].description.toUpperCase(),
        });
      })
      .catch(() => {
        setWeatherLocationDetail({
          weatherStatus: "Please enter correct city.",
        });
      });
  };

  return (
    <Fragment>
      <Header onAddLocation={fetchWeather} />
      <WeatherDetail
        city={weatherLocationDetail.city}
        temperature={weatherLocationDetail.temperature}
        pressure={weatherLocationDetail.pressure}
        icon={weatherLocationDetail.icon}
        weatherStatus={weatherLocationDetail.weatherStatus}
      />
    </Fragment>
  );
}

export default App;

import "./weatherapp.css";
import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("Ho Chi Minh City");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [windspeed, setWineSpeed] = useState("");
  const [wicon, setWicon] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = () => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e203317f0df5474c05874e35b030eda3`,
    })
      .then((response) => {
        setTemperature(Math.round(response.data.main.temp - 273.15));
        setDesc(response.data.weather[0].description);
        setName(response.data.name);
        setHumidity(response.data.main.humidity);
        setVisibility(response.data.visibility / 1000);
        setWineSpeed(response.data.wind.speed);
        setWicon(response.data.weather[0].icon);
        console.log(response);
      })
      .catch((error) => {});
  };
  const getWeatherDay = () => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e203317f0df5474c05874e35b030eda3`,
    })
      .then((response) => {
        setWeatherData(response.data.list.slice(0, 7));
      })
      .catch((error) => {});
  };
  return (
    <>
      <div
        onLoad={() => {
          getWeatherData(city);
          getWeatherDay(city);
        }}
        className="background"
      >
        <div className="container1">
          <form id="content" autoComplete="off">
            <input
              type="text"
              name="input"
              className="Search-box"
              onChange={(e) => setCity(e.target.value)}
            />
            <span></span>
          </form>
          <button
            className="searchbtn"
            onClick={() => {
              getWeatherData(city);
              getWeatherDay(city);
            }}
          >
            Search
          </button>
          <div id="card" className="weather">
            <div className="details">
              <div className="temp">
                {temperature} 
                <span>&deg;</span>C
              </div>
              <div className="right">
                <div id="summary">{desc}</div>
                <div style={{ fontWeight: "bold", marginTop: "4px" }}>
                  {name}
                </div>
              </div>
            </div>
            <img className="weatherimg" alt="image1" src={`${wicon}.svg`} />
            <div className="infos">
              <img
                alt="humidity1"
                className="humidityimg"
                style={{ width: "5", height: "5" }}
                src="humidity.svg"
              ></img>
              <div className="humidity">Độ ẩm {humidity}%</div>
              <img
                alt="visibility1"
                className="visibilityimg"
                style={{ width: "5", height: "5" }}
                src="visibility.svg"
              ></img>
              <div className="visibility">Tầm nhìn {visibility} km</div>
              <img
                alt="windspeed1"
                className="windimg"
                style={{ width: "5", height: "5" }}
                src="wind.svg"
              ></img>
              <div className="windspeed">Tốc độ gió {windspeed} km</div>
            </div>
          </div>
        </div>
      </div>
      <div
        onLoad={() => {
          getWeatherDay(city);
        }}
        className="bgh"
      >
        <h1 className="title">Daily</h1>
        <div className="daily-item">
          {weatherData.map((item) => (
            <div key={item.dt} className="horizontal-list-item">
              <article class="box weather">
                <h1 className="day">{item.dt_txt}</h1>
                <img
                  className="weatherimg2"
                  alt="image1"
                  src={`${wicon}.svg`}
                />
                <h3 lassName="high">{item.weather[0].description}</h3>
                <h3 lassName="temp">{`${Math.floor(
                  item.main.temp - 273
                )}°C`}</h3>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeatherApp;

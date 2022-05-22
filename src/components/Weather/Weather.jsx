import React, { useEffect, useState } from "react";
import "./weather.css";

const Weather = () => {
  const [search, setSearch] = useState("Gujarat");
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const weatherApi = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe62a5a7ab625d3395e7af85e6585513&units=metric`
        );
        if (response.status === 404) {
          alert(" Please, Enter Valid City, State or Country name. ");
          setInput("");
        } else {
          const res = await response.json();
          setData({
            city: res.name,
            country: res.sys.country,
            temp_Min: res.main.temp_min,
            temp_Max: res.main.temp_min,
            weather: res.weather[0].main,
            description: res.weather[0].description,
            temperature: res.main.temp,
            speed: res.wind.speed,
            humidity: res.main.humidity,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    weatherApi();
  }, [search]);
  const {
    city,
    country,
    temp_Min,
    temp_Max,
    weather,
    description,
    temperature,
    speed,
    humidity,
  } = data;

  const showWeather = (e) => {
    e.preventDefault();

    setSearch(input);
  };
  const d = new Date();
  const date = d.getDate();
  const year = d.getFullYear();
  const month = d.toLocaleString("default", { month: "long" });
  const day = d.toLocaleString("default", { weekday: "long" });

  return (
    <div className="flex items-center justify-center">
      <div className="col-md-9 mt-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card fw-bold text-center">
              <div className="box_style">
                <form onSubmit={showWeather}>
                  <div className="input-group input_div mb-4 w-75 mx-auto mt-4">
                    <input
                      type="Search"
                      className="form-control p-4"
                      placeholder="Search"
                      value={input}
                      onChange={(eve) => setInput(eve.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="input-group-text weather_btn"
                    >
                      <i className="fas fa-search"> </i>
                    </button>
                  </div>
                </form>
                <div className="bg-opacity-100 py-3">
                  <h2 className="card-title">
                    {city}, {country}
                  </h2>
                  <p className="card-text pb-3">
                    {day}, {month} {date}, {year}
                  </p>
                  <hr />
                  <i className="fa fa-street-view fa-3x pb-3 mt-3"></i>
                  <h2 className="fw-bolder mb-2 temp_text">
                    {temperature}&deg;C
                  </h2>
                </div>

                <p className="fw-bolder mb-0">{weather}</p>
                <p className="mb-2">
                  Min : {temp_Min}&deg;C | Max : {temp_Max}
                  &deg;C
                </p>
                <hr />
                <div className="container row-4 pt-1 desc_style text-black-800 mt-2 pb-5">
                  <div className="row">
                    <p className="col-6">
                      <i className="fas fa-sun fa-2x col text-warning"></i>
                      {description}
                    </p>
                    <p className="col-6">
                      <i className="fas fa-cloud-sun fa-2x col text-primary"></i>
                      {humidity} | Humidity
                    </p>
                  </div>
                  <div className="row">
                    <p className="col-12 text-black-900">
                      <i className="fas fa-wind fa-2x col "></i>
                      {speed} km/h | Wind
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

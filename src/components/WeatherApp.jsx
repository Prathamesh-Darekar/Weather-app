import React from "react";
import { SearchBox } from "./SearchBox";
import { InfoBox } from "./InfoBox";
import { useState } from "react";

export const WeatherApp = () => {
  let [weatherData, setWeatherData] = useState({
    city: "Pune",
    feelsLike: 30.97,
    humidity: 68,
    temp: 28.3,
    tempMax: 28.3,
    tempMin: 28.3,
    weatherDesc: "overcast clouds",
  });
  let setData = (data) => {
    setWeatherData(data);
  };
  return (
    <div>
      <SearchBox data={setData} />
      <InfoBox data={weatherData} />
    </div>
  );
};

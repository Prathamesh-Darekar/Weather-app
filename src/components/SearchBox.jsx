import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import "./SearchBox.css";

export const SearchBox = ({ data }) => {
  const API_KEY = "a120a093f3bf959b12c27985314023de";
  const [city, setCity] = useState("");
  async function getWeather() {
    const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    const response = await axios.get(GEOCODING_API_URL);
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weather = await axios.get(WEATHER_API_URL);
    let result = {
      city: city,
      temp: weather.data.main.temp,
      tempMin: weather.data.main.temp_min,
      tempMax: weather.data.main.temp_max,
      humidity: weather.data.main.humidity,
      feelsLike: weather.data.main.feels_like,
      weatherDesc: weather.data.weather[0].description,
    };
    data(result);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
    setCity("");
  }
  function handleInputChange(event) {
    setCity(event.target.value);
  }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          size="small"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" size="normal">
          Submit
        </Button>
      </form>
    </div>
  );
};

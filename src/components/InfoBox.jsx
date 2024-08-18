import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import sunnyImage from "../../assets/sunny.jpg";
import rainyImage from "../../assets/rain.jpg";
import coldImage from "../../assets/cold.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export const InfoBox = ({ data }) => {
  let weatherImage =
    data.temp < 20 ? coldImage : data.humidity < 80 ? sunnyImage : rainyImage;
  console.log(weatherImage);
  return (
    <div className="info-weather">
      <div className="info-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={weatherImage}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="city-name"
            >
              {data.city}
              <span style={{ margin: "10px" }}>
                {data.temp < 20 ? (
                  <AcUnitIcon />
                ) : data.humidity < 80 ? (
                  <WbSunnyIcon />
                ) : (
                  <WaterDropIcon />
                )}
              </span>
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temparature : {data.temp}&deg;C</p>
              <p>Humidity : {data.humidity}&deg;C</p>
              <p>Max Temperature : {data.tempMax}&deg;C</p>
              <p>Min Temperature : {data.tempMin}&deg;C</p>
              <p>
                The weather can be described as <b>{data.weatherDesc} </b>
                and feels like <b>{data.feelsLike}</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

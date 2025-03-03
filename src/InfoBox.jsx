import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import ColdIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/WbSunny";
import UmbrellaIcon from "@mui/icons-material/Umbrella";

export default function InfoBox({ weatherInfo }) {
  const init_image =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  const cold_image =
    "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ";
  const hot_image =
    "https://images.unsplash.com/photo-1566773333308-d2989f01cbc3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rainy_image =
    "https://images.unsplash.com/photo-1718917911083-7c830776e337?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const sunny_image =
    "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="cold image"
            height="140"
            image={
              weatherInfo.humidity > 60
                ? rainy_image
                : weatherInfo.temp < 5
                ? cold_image
                : sunny_image
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.name}
              {weatherInfo.humidity > 60 ? (
                <UmbrellaIcon />
              ) : weatherInfo.temp < 5 ? (
                <ColdIcon />
              ) : (
                <SunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature:{weatherInfo.temp}&deg;C </p>
              <p>Humidity:{weatherInfo.humidity}</p>
              <p>Min Temp:{weatherInfo.tempMin}&deg;C</p>
              <p>Max Temp: {weatherInfo.tempMax}&deg;C</p>
              <p> {weatherInfo.weather}</p>
              <p>Feels like {weatherInfo.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

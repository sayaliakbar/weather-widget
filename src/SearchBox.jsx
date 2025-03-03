import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [label, setLabel] = useState("City");
  let [error, setError] = useState(false);

  let API_URL = import.meta.env.VITE_API_URL;
  let API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    console.log(jsonResponse);

    let result = {
      name: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  const handleSubmit = async (e) => {
    try {
      setError(false);
      e.preventDefault();
      if (city) {
        setLabel("City");
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      } else {
        setLabel("Please enter city!");
      }
    } catch (error) {
      setError(true);
    }
  };
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <form action="/" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exist!</p>}
      </form>
    </div>
  );
}

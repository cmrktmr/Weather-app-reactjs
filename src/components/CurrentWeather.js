import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";
import Dropdown from "./DropdownWeather";

function Current() {
  
  const { cityName, results } = useContext(ForecastContext);
  return (
    <div className="weather-widget">
      <Dropdown />
      <div className="weather-icon row">
        <i className="wi wi-day-sunny"></i>
      </div>
      <h3 className="location-name row">{cityName}</h3>
      <h1 className="temp-c row">{results[0].temp} ºC</h1>
      <h5 className="condition row">{results[0].dayLong}</h5>
      <h5 className="condition row">{results[0].description}</h5>
     
      <h5 className="location-country row">
        En Yüksek Sıcaklık: {results[0].maxTemp}{" "}
      </h5>
      <h5 className="location-country row">
        En Düşük Sıcaklık: {results[0].minTemp}{" "}
      </h5>
    </div>
  );
}

export default Current;

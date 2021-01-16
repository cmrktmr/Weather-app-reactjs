import { useContext, useEffect } from "react";
import { search } from "../search/search";
import { ForecastContext } from "../contexts/ForecastContext";
import Current from "./CurrentWeather";
import Weekly from "./WeeklyWeather";

function WeatherBody() {
  const { cityName, setResults } = useContext(ForecastContext);
  useEffect(() => {
    search(cityName).then((dailyForecastList) => {
      setResults(dailyForecastList);
    });
  }, [cityName, setResults]);
  return (
    <div className="weather_contanier">
      <Current/>

      <Weekly/>

    </div>
  );
}

export default WeatherBody;

import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Day() {
  const { results } = useContext(ForecastContext);

  return results.slice(1).map((result, i) => {
    return (
      <div className="forecast-item">
        <div className="day">
          <h4>{result.dayShort}</h4>
          <h6>{result.month} {result.date} </h6>
        </div>
     
        <div className="forecast">
          <b><i> {result.temp} ºC</i></b>
          <h6> En Yüksek Sıcaklık: {result.maxTemp} ºC</h6>
          <h6> En Düşük Sıcaklık: {result.minTemp} ºC</h6>
        </div>
      </div>
    );
  });
}

export default Day;

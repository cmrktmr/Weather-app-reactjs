import { useState, createContext } from "react";

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [cityName, setCityName] = useState("istanbul");
  const [results, setResults] = useState([
    {
      temp: null,
      maxTemp: null,
      minTemp: null,
      dayShort: null,
      dayLong: null,
      date: null,
      month: null,
      year: null,
      iconCode: null,
      description: null,
    },
  ]);

  const values = {
    cityName,
    setCityName,
    results,
    setResults,
  };

  return (
    <ForecastContext.Provider value={values}>
      {children}
    </ForecastContext.Provider>
  );
};

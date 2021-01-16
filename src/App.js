import React from "react";
import WeatherBody from "./components/WeatherBody";

import { ForecastProvider } from "./contexts/ForecastContext";

function App() {
  return (
    <>
      <ForecastProvider>
        <WeatherBody />
      </ForecastProvider>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

import Forecast from "./components/Forecast";
import Header from "./components/Header";

import { myContext } from "./context";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  return (
    <myContext.Provider
      value={{ isDarkMode, setIsDarkMode, weatherData, setWeatherData }}
    >
      <div className={isDarkMode ? "dark" : ""}>
        <div className="w-full min-h-screen bg-light-theme-gradient dark:bg-dark-theme-gradient flex flex-col items-center">
          <Header />
          <Forecast />
        </div>
      </div>
    </myContext.Provider>
  );
}

export default App;

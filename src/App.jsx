import { useState } from "react";
import "./App.css";

import Forecast from "./components/Forecast";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-full min-h-screen bg-light-theme-gradient dark:bg-dark-theme-gradient flex flex-col items-center">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Forecast isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;

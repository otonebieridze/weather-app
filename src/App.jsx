import "./App.css";

import Forecast from "./components/Forecast";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-300 to-gray-900 flex flex-col items-center">
      <Header />
      <Forecast />
    </div>
  );
}

export default App;

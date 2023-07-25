import "./index.css";
import Timer from "./components/Timer.js";
import SettingsPage from "./components/SettingsPage";
import { useState } from "react";
import SettingContext from "./components/SettingContext";

function App() {
  const [showSettings, setShowSettings] = useState({ initialState: false });

  return (
    <main>
      <SettingContext.Provider value={{ workMinutes: 45, breakMinutes: 15 }}>
        {showSettings ? <SettingsPage /> : <Timer />}
      </SettingContext.Provider>
    </main>
  );
}

export default App;

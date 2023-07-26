import "./index.css";
import Timer from "./components/Timer.js";
import SettingsPage from "./components/settingsPage/SettingsPage";
import { useState } from "react";
import SettingContext from "./components/settingsPage/SettingContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <SettingsPage /> : <Timer />}
      </SettingContext.Provider>
    </main>
  );
}

export default App;

import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingContext from "./SettingContext";
import Back from "../buttons/Back.js";

export default function SettingsPage() {
  const settingInfo = useContext(SettingContext);

  return (
    <div style={{ textAlign: "left" }}>
      <label>Work: {settingInfo.workMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingInfo.workMinutes}
        onChange={(newValue) => settingInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break: {settingInfo.breakMinutes}:00</label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingInfo.breakMinutes}
        onChange={(newValue) => settingInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="buttonBack">
        <Back onClick={() => settingInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

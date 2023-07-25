import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Play from "./buttons/Play.js";
import Pause from "./buttons/Pause.js";
import Settings from "./buttons/Settings.js";

export default function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          rotation: 0.5,
          strokeLinecap: "round",
          textColor: "var( --pink)",
          pathColor: "var(--red)",
          trailColor: "var(--light-pink)",
        })}
      />
      <div>
        <Play />
        <Pause />
        <Settings />
      </div>
    </div>
  );
}

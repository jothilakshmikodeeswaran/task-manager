import { useState } from "react";


function ToggleSwitch()
{
    const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      {isOn && (
        <div style={{ width: "100px", height: "100px", backgroundColor: "lightblue", margin: "20px auto" }}>
          I'm visible when ON!
        </div>
      )}
    </div>
  )
}export default ToggleSwitch;

import { useState } from "react";
import HomeScreen from "./HomeScreen";
import "./Phone.css";
import { App } from "./apps/Apps";

function fixTime(i: any): string {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function Phone() {
  const [currentApp, setCurrentApp] = useState<App | null>(null);

  function navbarClickHandler() {
    setCurrentApp(null);
  }

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="dynamic-island" />
        <div className="header">
          <div className="time">{`${fixTime(new Date().getHours())}:${fixTime(new Date().getMinutes())}`}</div>
          <div className="right">SPEED</div>
        </div>
        <HomeScreen currentApp={currentApp} setCurrentApp={setCurrentApp} />
        <div className="app-space">
          {/* { APPS.filter((a) => !a.hidden).map((a) => <> {a.name} <a.component /> </>) } */}
          {/* {APPS.filter((_, i) => i === currentAppIndex).map((a) => a.component && <a.component />)} */}
          {currentApp?.component && <currentApp.component />}
        </div>
        <div className="navspace" onClick={navbarClickHandler}>
          <div className="navbar" />
        </div>
      </div>
    </div>
  );
}

export default Phone;
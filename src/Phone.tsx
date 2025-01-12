import { useState } from "react";
import HomeScreen from "./HomeScreen";
import "./Phone.css";
import { App, setupAPPS } from "./apps/Apps";
import PhoneApp from "./apps/Phone.tsx";
import PhoneIcon from "./assets/phone.png";
import WassupIcon from "./assets/wassup.png";
import Wassup from "./apps/Wassup.tsx";
import YourApps from "./apps/YourApps.tsx";
import Counter from "./apps/Counter.tsx";

function fixTime(i: any): string {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// Setup apps
setupAPPS([
  {
    name: "Phone",
    icon: PhoneIcon,
    component: <PhoneApp />,
    hidden: false,
  },
  {
    name: "Wassup",
    icon: WassupIcon,
    component: <Wassup />,
    hidden: false,
  },
  {
    name: "Your apps",
    icon: "",
    component: <YourApps />,
    hidden: false
  },
  {
    name: "Counter",
    icon: "",
    component: <Counter />,
    hidden: false
  },
]);

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
        <div className="app-space" style={currentApp === null ? {
          pointerEvents: "none",
        } : {}}>
          {/* { APPS.filter((a) => !a.hidden).map((a) => <> {a.name} <a.component /> </>) } */}
          {/* {APPS.filter((_, i) => i === currentAppIndex).map((a) => a.component && <a.component />)} */}
          {currentApp?.component && currentApp.component}
        </div>
        <div className="navspace" onClick={navbarClickHandler}>
          <div className="navbar" />
        </div>
      </div>
    </div>
  );
}

export default Phone;
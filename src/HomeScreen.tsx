import "./HomeScreen.css";
import wallpaper from "./assets/wallpaper.jpg";
import AppIcon from "./AppIcon";
import { App, APPS, resetAPPS } from "./apps/Apps.ts";
import Phone from "./apps/Phone.tsx";
import PhoneIcon from "./assets/phone.png";
import WassupIcon from "./assets/wassup.png";
import Wassup from "./apps/Wassup.tsx";
import YourApps from "./apps/YourApps.tsx";

interface Props {
  currentApp: App | null,
  setCurrentApp: React.Dispatch<React.SetStateAction<App | null>>,
}

setupApps();

function HomeScreen({currentApp, setCurrentApp}: Props) {

  return (
    <div className="homescreen-wrapper">
      <div className="homescreen-container">
        <img src={wallpaper} draggable="false" />
        <div className="app-grid">
          
          {/* {(() => {
            let result = [];
            for (let i = 0; i < 20; i++)
              result.push(<AppIcon name="Hello" icon={wallpaper} />)
            return result;
          })()} */}
          { APPS.filter((a) => !a.hidden).map((a) => <AppIcon key={a.name} app={a} currentApp={currentApp} setCurrentApp={setCurrentApp} />) }
          {/* <AppIcon currentApp={currentApp} setCurrentApp={setCurrentApp} /> */}
        </div>
      </div>
    </div>
  );
}

function setupApps() {
  resetAPPS();

  APPS.push({
    name: "Phone",
    icon: PhoneIcon,
    component: Phone,
    hidden: false,
  });
    
  APPS.push({
    name: "Wassup",
    icon: WassupIcon,
    component: Wassup,
    hidden: false,
  });

  APPS.push({
    name: "Your apps",
    icon: "",
    component: YourApps,
    hidden: false
  });
}

export default HomeScreen;
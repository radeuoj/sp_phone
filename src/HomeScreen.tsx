import "./HomeScreen.css";
import wallpaper from "./assets/wallpaper.jpg";
import AppIcon from "./AppIcon";
import { App, APPS } from "./apps/Apps";

interface Props {
  currentApp: App | null,
  setCurrentApp: React.Dispatch<React.SetStateAction<App | null>>,
}

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

export default HomeScreen;
import "./HomeScreen.css";
import wallpaper from "./assets/wallpaper.jpg";
import AppIcon from "./AppIcon";
import { APPS } from "./apps/Apps";

function HomeScreen() {

  return (
    <div className="homescreen-container">
      <img src={wallpaper} draggable="false" />
      <div className="app-grid">
        
        {/* {(() => {
          let result = [];
          for (let i = 0; i < 20; i++)
            result.push(<AppIcon name="Hello" icon={wallpaper} />)
          return result;
        })()} */}
        { APPS.filter((a) => !a.hidden).map((a) => <AppIcon key={a.name} name={a.name} icon={a.icon} />) }
        <AppIcon />
        <AppIcon />
        <AppIcon />
      </div>
    </div>
  );
}

export default HomeScreen;
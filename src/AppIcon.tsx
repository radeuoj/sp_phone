import "./AppIcon.css";
import { App } from "./apps/Apps";
import BackgroundIcon from "./assets/wallpaper.jpg";

interface Props {
  key?: string,
  app?: App,
  currentApp: App | null,
  setCurrentApp: React.Dispatch<React.SetStateAction<App | null>>,
}

function AppIcon({currentApp, setCurrentApp, app = {
  name: "Your app",
  icon: BackgroundIcon,
  component: null,
  hidden: false,
}}: Props) {

  function iconClickHandler() {
    setCurrentApp(app)
    console.log(`Ai apasta ${app.name}`)
  }

  return (
    <div className="app-icon-container">
      <img className="app-icon" src={app.icon} draggable="false" onClick={iconClickHandler} />
      <div className="app-name">{app.name}</div>
    </div>
  );
}

export default AppIcon;
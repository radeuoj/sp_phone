import "./AppIcon.css";
import { App } from "./apps/Apps.ts";

interface Props {
  key?: string,
  app: App,
  currentApp: App | null,
  setCurrentApp: React.Dispatch<React.SetStateAction<App | null>>,
}

export default function AppIcon({currentApp, setCurrentApp, app}: Props) {

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

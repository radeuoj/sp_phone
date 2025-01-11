import "./AppIcon.css";
import BackgroundIcon from "./assets/wallpaper.jpg";

interface Props {
  key?: string,
  name?: string,
  icon?: string,
}

function AppIcon({name = "Your Application", icon = BackgroundIcon}: Props) {

  return (
    <div className="app-icon-container">
      <img className="app-icon" src={icon} draggable="false" />
      <div className="app-name">{name}</div>
    </div>
  );
}

export default AppIcon;
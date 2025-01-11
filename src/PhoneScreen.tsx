import HomeScreen from "./HomeScreen";
import "./PhoneScreen.css";

function fixTime(i: any): string {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function PhoneScreen() {

  return (
    <div className="phone-screen">
      <div className="dynamic-island" />
      <div className="header">
        <div className="time">{`${fixTime(new Date().getHours())}:${fixTime(new Date().getMinutes())}`}</div>
        <div className="right">SPEED</div>
      </div>
      <div className="app-space">
        <HomeScreen />
        {/* { APPS.filter((a) => !a.hidden).map((a) => <> {a.name} <a.component /> </>) } */}
      </div>
      <div className="navspace">
        <div className="navbar" />
      </div>
    </div>
  );
}

export default PhoneScreen;
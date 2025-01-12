import { APPS } from "./Apps";

export default function YourApps() {

  return (
    <div style={{
      backgroundColor: "green",
      position: "absolute",
    }}>
      {APPS.map((a) => <p>{a.name}</p>)}
    </div>
  )
}
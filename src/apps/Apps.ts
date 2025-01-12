import { FC } from "react";
// import Phone from "./Phone.tsx";
// import Wassup from "./Wassup.tsx";
// import PhoneIcon from "../assets/phone.png";
// import WassupIcon from "../assets/wassup.png";

export interface App {
  name: string,
  icon: string,
  component: JSX.Element,
  hidden: boolean,
}

export let APPS: App[] = [
  // {
  //   name: "Phone",
  //   icon: PhoneIcon,
  //   component: Phone,
  //   hidden: false,
  // },
  // {
  //   name: "Wassup",
  //   icon: WassupIcon,
  //   component: Wassup,
  //   hidden: false,
  // },
]

// export function RegisterApp(app: App) {
//   console.log(app)
//   APPS.push(app);
// }

export function resetAPPS() {
  console.log("resetat")
  APPS = [];
}

export function setupAPPS(apps: App[]) {
  APPS = apps;
  console.log(APPS);
}
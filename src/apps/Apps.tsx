import { FC } from "react";
import Phone from "./Phone.tsx";
import Wassup from "./Wassup.tsx";
import PhoneIcon from "../assets/phone.png";
import WassupIcon from "../assets/wassup.png";

export interface App {
  name: string,
  icon: string,
  component: FC | null,
  hidden: boolean,
}

export const APPS: App[] = [
  {
    name: "Phone",
    icon: PhoneIcon,
    component: Phone,
    hidden: false,
  },
  {
    name: "Wassup",
    icon: WassupIcon,
    component: Wassup,
    hidden: false,
  },
]
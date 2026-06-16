import { createContext } from "react";
interface IDarkProvide {
  changeTheme: () => void;
  dark: boolean;
}
export const DarkContext = createContext<undefined | IDarkProvide>(undefined);

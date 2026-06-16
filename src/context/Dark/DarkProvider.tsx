import { ThemeProvider } from "styled-components";
import { DarkContext } from "./DarkContext";
import { useState } from "react";

const lightTheme = {
  backgroundHeader: "#ffffff",
  headerLoginName: "#565EEF",
  headerSetMail: "#94a6be",
  headerUserSet: "#000",
  headerCheckbox: "#94a6be",
  backgroundMainPage: "#eaeef6",
  backgroundCard: "#FFFFFF",
  textPrimary: "#000000",
  textSecondary: "#94a6be",
  textTertiary: "#565eef",
  accentColor: "#565eef",
  inputBackground: "#eaeef6",
  modalBackground: "#FFFFFF",
  modalBorder: "#d4dbe5",
  buttonText: "#ffffff",
  authPageBackground: "#ffffff",
  authText: "#626264",
  authLabel: "#182135",
  authInput: "#182135",
  authLink: "#fb6d3a",
  authAccent: "#503e9d",
};

const darkTheme = {
  backgroundHeader: "#20202C",
  headerLoginName: "#FFFFFF",
  headerSetMail: "#FFF",
  headerUserSet: "#FFF",
  headerCheckbox: "#565EEF",
  backgroundMainPage: "#151419",
  backgroundCard: "#20202C",
  textPrimary: "#FFFFFF",
  textSecondary: "#B8C0CC",
  textTertiary: "#8F9DFF",
  accentColor: "#8F9DFF",
  inputBackground: "#2B2B35",
  modalBackground: "#20202C",
  modalBorder: "#4E4E5A",
  buttonText: "#FFFFFF",
  authPageBackground: "#151419",
  authText: "#D9DCE3",
  authLabel: "#F4F5F8",
  authInput: "#F4F5F8",
  authLink: "#FF8A5B",
  authAccent: "#7C6CCF",
};

interface IDarkProviderProps {
  children: React.ReactNode;
}

export const DarkProvider = ({ children }: IDarkProviderProps) => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "Тёмная");
  const theme = dark ? darkTheme : lightTheme;

  function changeTheme() {
    setDark(!dark);
    localStorage.setItem("theme", !dark ? "Тёмная" : "Светлая");
  }
  const value = { changeTheme, dark };
  return (
    <DarkContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkContext.Provider>
  );
};

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundHeader: string;
    headerLoginName: string;
    headerSetMail: string;
    headerUserSet: string;
    headerCheckbox: string;
    backgroundMainPage: string;
    backgroundCard: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    accentColor: string;
    inputBackground: string;
    modalBackground: string;
    modalBorder: string;
    buttonText: string;
    authPageBackground: string;
    authText: string;
    authLabel: string;
    authInput: string;
    authLink: string;
    authAccent: string;
  }
}

import { createContext } from "react";
interface IAuthProvide {
  error: string;
  loading: boolean;
  userData: {
    login: string;
    password: string;
    name: string;
  };
  logout: () => void;
  changeUserData: (event: React.ChangeEvent<HTMLInputElement, Element>) => void;
  submitFormAuth: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isAuth: boolean;
  submitFormRegister: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
export const AuthContext = createContext<undefined | IAuthProvide>(undefined);

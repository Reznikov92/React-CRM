import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, register } from "../../services/api";
interface IAuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider = (props: IAuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const { children } = props;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    login: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  function changeUserData(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setError("");
  }
  async function submitFormAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const { password, login } = userData;
    try {
      if (!login.trim() || !password.trim()) {
        throw new Error("Введите значения в поля");
      }
      setLoading(true);
      const res = await auth({ password, login });
      localStorage.setItem("token", res.user.token);
      localStorage.setItem("login", res.user.login);
      localStorage.setItem("name", res.user.name);
      navigate("/");
      setIsAuth(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  async function submitFormRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    try {
      if (
        !userData.login.trim() ||
        !userData.password.trim() ||
        !userData.name.trim()
      ) {
        throw new Error("Введите значения в поля");
      }
      setLoading(true);
      const res = await register(userData);
      localStorage.setItem("token", res.user.token);
      localStorage.setItem("login", res.user.login);
      localStorage.setItem("name", res.user.name);

      navigate("/");
      setIsAuth(true);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  function logout() {
    setIsAuth(false);
    localStorage.removeItem("token")
    localStorage.removeItem("login")
    localStorage.removeItem("name")
  }
  const value = {
    error,
    loading,
    userData,
    changeUserData,
    submitFormAuth,
    isAuth,
    submitFormRegister,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

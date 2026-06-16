import { Link } from "react-router-dom";
import * as S from "./Registration.styled";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";

export const Registration = () => {
  const { error, submitFormRegister, changeUserData, loading } =
    useContext(AuthContext)!;
  return (
    <S.Page>
      <S.Main>
        <S.Form onSubmit={submitFormRegister}>
          <S.Error>{error}</S.Error>
          <S.Title>Create an account</S.Title>
          <S.Text>
            Please create an account to continue using our service
          </S.Text>

          <S.Wraps>
            <S.WrapLeft>
              <S.Icon>👤</S.Icon>
            </S.WrapLeft>
            <S.WrapRight>
              <S.Label htmlFor="name">Full Name</S.Label>
              <S.Input
                id="name"
                name="name"
                type="text"
                placeholder="Mark Clarke"
                onChange={(event) => {
                  changeUserData(event);
                }}
              />
            </S.WrapRight>
          </S.Wraps>

          <S.Wraps>
            <S.WrapLeft>
              <S.Icon>📧</S.Icon>
            </S.WrapLeft>
            <S.WrapRight>
              <S.Label htmlFor="login">Login</S.Label>
              <S.Input
                id="login"
                name="login"
                type="login"
                placeholder="markclarke@gmail.com"
                onChange={(event) => {
                  changeUserData(event);
                }}
              />
            </S.WrapRight>
          </S.Wraps>

          <S.Wraps>
            <S.WrapLeft>
              <S.Icon>🔒</S.Icon>
            </S.WrapLeft>
            <S.WrapRight>
              <S.Label htmlFor="password">Password</S.Label>
              <S.Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                onChange={(event) => {
                  changeUserData(event);
                }}
              />
            </S.WrapRight>
          </S.Wraps>

          <S.Button
            disabled={loading}
            style={{ opacity: loading ? 0.5 : 1 }}
            type="submit"
          >
            {loading ? "loading..." : "Create an account"}
          </S.Button>
        </S.Form>
        <S.FormLink>
          Already have an account?{" "}
          <Link to="/authorization">
            <S.LinkAnchor>Sign In</S.LinkAnchor>
          </Link>
        </S.FormLink>
      </S.Main>
    </S.Page>
  );
};

import { Link } from "react-router-dom";
import * as S from "./Authorization.styled";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Authorization = () => {
  const { error, submitFormAuth, changeUserData, loading } =
    useContext(AuthContext)!;
  return (
    <S.Page>
      <S.Main>
        <S.Error>{error}</S.Error>
        <S.Form onSubmit={submitFormAuth}>
          <S.Title>Sign In</S.Title>
          <S.Text>Please sign in to continue using our service</S.Text>

          <S.Wraps>
            <S.WrapLeft>
              <S.Icon>📧</S.Icon>
            </S.WrapLeft>
            <S.WrapRight>
              <S.Label htmlFor="login">login</S.Label>
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
            {loading ? "loading..." : "Sign up"}
          </S.Button>
        </S.Form>
        <S.FormLink>
          Don&apos;t have an account?
          <Link to="/registration">
            <S.LinkAnchor>Register</S.LinkAnchor>
          </Link>
        </S.FormLink>
      </S.Main>
    </S.Page>
  );
};

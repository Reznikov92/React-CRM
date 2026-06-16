import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  padding: 40px 16px;
  background: ${(props) => props.theme.authPageBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: min(100%, 576px);
  margin: 120px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 125%;
  font-weight: 700;
  color: ${(props) => props.theme.authLabel};
`;

export const Text = styled.p`
  margin: 12px 0 0;
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme.authText};
`;

export const Wraps = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
`;

export const WrapLeft = styled.div`
  min-width: 64px;
  min-height: 64px;
  border-radius: 16px;
  background: ${(props) => props.theme.inputBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.span`
  font-size: 24px;
`;

export const WrapRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${(props) => props.theme.modalBorder};
`;

export const Label = styled.label`
  margin-top: 2px;
  font-size: 12px;
  line-height: 200%;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.authLabel};
`;

export const Input = styled.input`
  margin-top: 4px;
  margin-bottom: 8px;
  width: 100%;
  border: none;
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme.authInput};
  background: transparent;
  outline: none;
`;

export const Button = styled.button`
  margin-top: 40px;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  background: ${(props) => props.theme.authAccent};
  color: ${(props) => props.theme.buttonText};
  font-size: 20px;
  line-height: 160%;
  font-weight: 700;
  cursor: pointer;
`;

export const FormLink = styled.p`
  margin: 24px 0 0;
  text-align: center;
  color: ${(props) => props.theme.authText};
  font-size: 16px;
  line-height: 150%;
`;

export const LinkAnchor = styled.span`
  color: ${(props) => props.theme.authLink};
  font-weight: 700;
`;
export const Error = styled.span`
  color: red;
`;

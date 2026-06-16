import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundHeader};
`;
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
export const HeaderLogoImg = styled.img`
  width: 85px;
`;
export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.buttonText};
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
`;
export const HeaderBtnMainNewA = styled(Link)`
  color: ${(props) => props.theme.buttonText};
`;
export const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.textTertiary};
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${(props) => props.theme.textTertiary};
    border-bottom: 1.9px solid ${(props) => props.theme.textTertiary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;
export const HeaderPopUserSet = styled.div`
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${(props) => props.theme.backgroundHeader};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  a {
    display: flex;
    justify-content: flex-end;
  }
  button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${(props) => props.theme.textTertiary};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.textTertiary};
    a {
      color: ${(props) => props.theme.textTertiary};
      display: block;
    }
  }
`;
export const HeaderPopUserSetName = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;
export const HeaderPopUserSetMail = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;
export const HeaderPopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  p {
    color: ${(props) => props.theme.textPrimary};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${(props) => props.theme.backgroundMainPage};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.textSecondary};
      transition: 0.5s;
    }
  }
  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

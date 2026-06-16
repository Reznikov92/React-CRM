import {
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderBtnMainNewA,
  HeaderNav,
  HeaderPopUserSet,
  HeaderPopUserSetMail,
  HeaderPopUserSetName,
  HeaderPopUserTheme,
  HeaderStyle,
  HeaderUser,
} from "./header.styled";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkContext } from "../../context/Dark/DarkContext";

export const Header = () => {
  const localLogin = localStorage.getItem("login");
  const localName = localStorage.getItem("name");

  localStorage.getItem("name");

  const { changeTheme, dark } = useContext(DarkContext)!;

  return (
    <HeaderStyle>
      <Container>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              React CRM
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              React CRM
            </a>
          </div>
          <HeaderNav>
            <HeaderBtnMainNew>
              <HeaderBtnMainNewA to="/popnewcard">
                Создать новую задачу
              </HeaderBtnMainNewA>
            </HeaderBtnMainNew>
            <HeaderUser as="a" href="#user-set-target" className="_hover02">
              {localName ? localName : "Гость"}
            </HeaderUser>
            <HeaderPopUserSet
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              <a href="#">x</a>
              <HeaderPopUserSetName>
                {localName ? localName : "Гость"}
              </HeaderPopUserSetName>
              <HeaderPopUserSetMail>
                {localLogin ? localLogin : "Гость"}
              </HeaderPopUserSetMail>
              <HeaderPopUserTheme>
                <p>{`${dark ? "Тёмная" : "Светлая"} тема`}</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  onChange={() => {
                    changeTheme();
                  }}
                  checked={dark}
                />
              </HeaderPopUserTheme>
              <button type="button" className="_hover03">
                <Link to="/popexit">Выйти</Link>
              </button>
            </HeaderPopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderStyle>
  );
};

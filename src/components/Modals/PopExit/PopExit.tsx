import { Link } from "react-router-dom";
import {
  PopExit as PopExitStyled,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitExitYes,
  PopExitExitNo,
  PopExitFormGroup,
} from "./popExit.styled";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth/AuthContext";

export const PopExit = () => {
  const { logout } = useContext(AuthContext)!;
  return (
    <PopExitStyled id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
                className="_hover01"
                id="exitYes"
              >
                Да, выйти
              </PopExitExitYes>
              <PopExitExitNo className="_hover03" id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </PopExitExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyled>
  );
};

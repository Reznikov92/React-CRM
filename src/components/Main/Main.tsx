import { MainStyle, MainBlock, MainContent } from "./main.styled";
import { Container } from "../../globalStyles";
import { Column } from "../Column";
import { Outlet } from "react-router-dom";
import type { ICardInfo } from "../Card/Card";
interface IMainProps {
  cardsInfo: ICardInfo[];
}
export const Main = (props: IMainProps) => {
  const { cardsInfo } = props;
  const columnNames = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "В тестировании",
    "Готово",
  ];
  console.log(cardsInfo);
  return (
    <MainStyle>
      <Container>
        <MainBlock>
          <MainContent>
            {cardsInfo.length ? (
              columnNames.map((element, index) => (
                <Column
                  key={index}
                  columnName={element}
                  cards={cardsInfo.filter((card) => element === card.status)}
                />
              ))
            ) : (
              <h1>Задач нет</h1>
            )}

            <Outlet />
          </MainContent>
        </MainBlock>
      </Container>
    </MainStyle>
  );
};

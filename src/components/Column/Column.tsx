import { Card } from "../Card";
import type { ICardInfo } from "../Card/Card";

import { MainColumn, ColumnTitle, Cards } from "./column.styled";
interface IColumnProps {
  columnName: string;
  cards: ICardInfo[];
}

export const Column = (props: IColumnProps) => {
  const { columnName, cards } = props;

  return (
    <MainColumn className="column">
      <ColumnTitle>
        <p>{columnName}</p>
      </ColumnTitle>
      <Cards>
        {cards.map((el, index) => (
          <Card cardInfo={el} key={index} />
        ))}
      </Cards>
    </MainColumn>
  );
};

import { ru } from "react-day-picker/locale";
import {
  CalendarText,
  CalendarTextDate,
  StyledDayPicker,
} from "./Calendar.styled.ts";
import "react-day-picker/dist/style.css";

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date | undefined) => void;
  isEdited?: boolean;
}

export function Calendar(props: CalendarProps) {
  const { selectedDate, setSelectedDate, isEdited = false } = props;
  const localDate = new Date(selectedDate).toLocaleDateString("ru-RU", {
    year: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });

  let footer = <CalendarText>Выберите срок исполнения</CalendarText>;
  if (selectedDate) {
    footer = (
      <>
        <CalendarText>Срок исполнения: </CalendarText>
        <CalendarTextDate>{localDate}</CalendarTextDate>
      </>
    );
  }
  return (
    <StyledDayPicker
      disabled={isEdited}
      disableNavigation={isEdited}
      onSelect={setSelectedDate}
      selected={selectedDate}
      footer={footer}
      locale={ru}
      mode="single"
    />
  );
}

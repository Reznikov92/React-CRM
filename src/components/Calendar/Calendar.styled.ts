import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const CalendarText = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-style: Regular;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

  vertical-align: middle;
  color: ${(props) => props.theme.textSecondary};
`;
export const CalendarTextDate = styled(CalendarText)`
  color: ${(props) => props.theme.textPrimary};
`;

export const StyledDayPicker = styled(DayPicker)`
  --rdp-day_button-width: 25px;
  --rdp-day_button-height: 25px;
  --rdp-day-height: 25px;
  .rdp-caption_label {
    text-transform: capitalize;
  }
  --rdp-accent-color: ${(props) => props.theme.accentColor};
  .rdp-selected .rdp-day_button {
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.accentColor};
    font-size: 10px;
  }
  .rdp-caption_label {
    font-size: 14px;
    color: ${(props) => props.theme.textPrimary};
  }
  .rdp-nav {
    width: 50px;
  }

  font-family: Roboto;
  font-weight: 400;
  font-style: Regular;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

  vertical-align: middle;
  color: ${(props) => props.theme.textSecondary};
`;

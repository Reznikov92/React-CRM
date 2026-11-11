import { Link } from "react-router-dom";
import {
  PopNewCard,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTtl,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewInput,
  FormNewArea,
  FormNewCreate,
  Subttl,
  Categories,
  CategoriesThemes,
  CategoriesP,
  CategoriesTheme,
} from "./popupNewCard.styled";
import { useContext, useState } from "react";

import { Error as ErrorComponent } from "../../Authorization/Authorization.styled";
import { Calendar } from "../../Calendar";
import { TasksContext } from "../../../context/Tasks/TasksContext";
import type { ITaskInfo, ITypeTopic } from "../../../types";

export const PopapNewCard = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [taskInfo, setTaskInfo] = useState<ITaskInfo>({
    title: "",
    topic: "Web Design",
    description: "",
    date: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const [activeTopic, setActiveTopic] = useState<ITypeTopic>("Web Design");
  const arrayTopic = [
    { name: "Web Design", className: "_orange" },
    { name: "Research", className: "_green" },
    { name: "Copywriting", className: "_purple" },
  ] satisfies { name: ITypeTopic; className: string }[];
  const { submitUserData } = useContext(TasksContext)!;
  function handleActiveTopic(activeTopicName: ITypeTopic) {
    setActiveTopic(activeTopicName);
    setTaskInfo((prev) => ({ ...prev, topic: activeTopicName }));
  }

  function changeTextInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setError("");
    const { name, value } = event.target;
    setTaskInfo((prev) => ({ ...prev, [name]: value }));
  }
  function handleChangeDate(date: Date | undefined) {
    setSelectedDate(date);
    setTaskInfo((prev) => ({ ...prev, date: date ? date.toISOString() : "" }));
  }

  return (
    <PopNewCard id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose>
              <Link to="/">&#10006;</Link>
            </PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm
                onSubmit={(e) => {
                  submitUserData(e, setError, taskInfo, setLoading);
                }}
                id="formNewCard"
                action="#"
              >
                <FormNewBlock>
                  <Subttl as="label" htmlFor="formTitle">
                    Название задачи
                  </Subttl>
                  <FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={changeTextInput}
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl as="label" htmlFor="textArea">
                    Описание задачи
                  </Subttl>
                  <FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={changeTextInput}
                  ></FormNewArea>
                </FormNewBlock>
                <FormNewCreate
                  type="submit"
                  className="_hover01"
                  id="btnCreate"
                  disabled={loading}
                >
                  {loading ? "loading..." : "Создать задачу"}
                </FormNewCreate>
              </PopNewCardForm>
              <Calendar
                setSelectedDate={handleChangeDate}
                selectedDate={selectedDate}
              />
            </PopNewCardWrap>
            <Categories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                {arrayTopic.map((el, index) => (
                  <CategoriesTheme
                    onClick={() => handleActiveTopic(el.name)}
                    className={`${el.className} ${activeTopic === el.name ? "_active-category" : ""}`}
                    key={index}
                  >
                    <p className={el.className}>{el.name}</p>
                  </CategoriesTheme>
                ))}
              </CategoriesThemes>
            </Categories>
            <ErrorComponent>{error}</ErrorComponent>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCard>
  );
};

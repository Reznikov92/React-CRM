import {
  PopBrowse as PopBrowseStyled,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  FormBrowseArea,
  Status,
  StatusP,
  StatusThemes,
  StatusTheme,
  PopBrowseBtnBrowse,
  PopBrowseBtnEdit,
  Subttl,
} from "./popBrowse.styled";
import { CategoriesTheme } from "../PopapNewCard/popupNewCard.styled";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  deleteTasks,
  editTasks,
  getTask,
  type ITaskData,
} from "../../../services/api";
import { Calendar } from "../../Calendar";
import { TasksContext } from "../../../context/Tasks/TasksContext";

export const PopBrowse = () => {
  const { deleteCard, saveTask } = useContext(TasksContext)!;
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [activeStatus, setActiveStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const arrayTopic = [
    { name: "Web Design", className: "_orange" },
    { name: "Research", className: "_green" },
    { name: "Copywriting", className: "_purple" },
  ];
  const arrayStatus = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "В тестировании",
    "Готово",
  ];

  const [task, setTask] = useState<ITaskData | null>(null);
  const { id } = useParams() as { id: string };
  useEffect(() => {
    if (id) {
      getTask(id).then((body) => {
        setActiveTopic(body.task.topic);
        setActiveStatus(body.task.status);
        setSelectedDate(body.task.date);
        setTask(body.task);
        console.log(body);
      });
    }
  }, []);
  function changeDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;
    if (value && name) {
      setTask((prev) => ({ ...prev, [name]: value }));
    }
  }

  return (
    <PopBrowseStyled id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{task ? task.title : "Загрузка"}</PopBrowseTtl>
              <CategoriesTheme
                className={`${arrayTopic.find((el) => task?.topic === el.name)?.className} _active-category theme-top`}
              >
                <p
                  className={
                    arrayTopic.find((el) => task?.topic === el.name)?.className
                  }
                >
                  {task?.topic}
                </p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                {isOpenEdit ? (
                  arrayStatus.map((el) => (
                    <StatusTheme
                      onClick={() => {
                        setActiveStatus(el);
                      }}
                      className={activeStatus === el ? "_gray" : ""}
                    >
                      <p className={activeStatus === el ? "_gray" : ""}>{el}</p>
                    </StatusTheme>
                  ))
                ) : (
                  <StatusTheme className="_gray">
                    <p className="_gray">
                      {activeStatus ? activeStatus : "...loading"}
                    </p>
                  </StatusTheme>
                )}
              </StatusThemes>
              {/* <StatusTheme className="_gray">
                  <p className="_gray">Нужно сделать</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Готово</p>
                </StatusTheme> */}
              {/* </StatusThemes> */}
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Subttl as="label" htmlFor="textArea01">
                    Описание задачи
                  </Subttl>
                  <FormBrowseArea
                    name="description"
                    id="textArea01"
                    readOnly={!isOpenEdit}
                    placeholder="Введите описание задачи..."
                    value={task ? task.description : "Загрузка"}
                    onChange={changeDescription}
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
                isEdited={!isOpenEdit}
              />
            </PopBrowseWrap>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              {isOpenEdit ? (
                arrayTopic.map((el, index) => (
                  <CategoriesTheme
                    onClick={() => setActiveTopic(el.name)}
                    className={`${el.className} ${activeTopic === el.name ? "_active-category" : ""}`}
                    key={index}
                  >
                    <p className={el.className}>{el.name}</p>
                  </CategoriesTheme>
                ))
              ) : (
                <CategoriesTheme
                  className={`${arrayTopic.find((el) => task?.topic === el.name)?.className} _active-category `}
                >
                  <p
                    className={`${arrayTopic.find((el) => task?.topic === el.name)?.className}`}
                  >
                    {task?.topic}
                  </p>
                </CategoriesTheme>
              )}
            </div>
            {isOpenEdit ? (
              <PopBrowseBtnEdit>
                <div className="btn-group">
                  <button
                    disabled={loading}
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={() => {
                      saveTask(id, setLoading, {
                        ...task,
                        status: activeStatus as string,
                        topic: activeTopic as string,
                        date: selectedDate as string,
                      });
                    }}
                  >
                    Сохранить
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setIsOpenEdit(false);
                    }}
                    className="btn-edit__edit _btn-bor _hover03"
                  >
                    Отменить
                  </button>
                  <button
                    disabled={loading}
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                    onClick={() => {
                      deleteCard(id, setLoading);
                    }}
                  >
                    {loading ? "Загрузка" : "Удалить задачу"}
                  </button>
                </div>
                <button
                  onClick={() => {
                    setIsOpenEdit(false);
                  }}
                  className="btn-edit__close _btn-bg _hover01"
                >
                  <a href="#">Закрыть</a>
                </button>
              </PopBrowseBtnEdit>
            ) : (
              <PopBrowseBtnBrowse>
                <div className="btn-group">
                  <button
                    onClick={() => {
                      setIsOpenEdit(true);
                    }}
                    className="btn-browse__edit _btn-bor _hover03"
                    disabled={loading}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={() => {
                      deleteCard(id, setLoading);
                    }}
                    disabled={loading}
                  >
                    {loading ? "Загрузка" : "Удалить задачу"}
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </PopBrowseBtnBrowse>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseStyled>
  );
};

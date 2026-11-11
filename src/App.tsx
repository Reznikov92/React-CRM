import { GlobalStyles, Wrapper } from "./globalStyles";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";
import { PopBrowse } from "./components/Modals/PopBrowse";
import { PopExit } from "./components/Modals/PopExit";
import { PopapNewCard } from "./components/Modals/PopapNewCard";
import { Route, Routes } from "react-router-dom";
import { Authorization } from "./components/Authorization";
import { Registration } from "./components/Registration";
import { NotFound } from "./components/NotFound";
import { useContext, useEffect } from "react";
import { getTasks } from "./services/api";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { TasksContext } from "./context/Tasks/TasksContext";
import { ReactNotifications } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

function App() {
  const { tasks, setTasks } = useContext(TasksContext)!;
  useEffect(() => {
    getTasks().then((body) => {
      setTasks(body.tasks);
    });
  }, [setTasks]);

  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <ReactNotifications/>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Main cardsInfo={tasks} />
                </>
              }
            >
              <Route path="popexit" element={<PopExit />} />
              <Route path="popbrowse/:id" element={<PopBrowse />} />

              <Route path="popnewcard" element={<PopapNewCard />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute onlyUnAuth />}>
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;

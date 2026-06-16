import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Auth/AuthProvider.tsx";
import { TasksProvider } from "./context/Tasks/TasksProvider.tsx";
import { DarkProvider } from "./context/Dark/DarkProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TasksProvider>
          <DarkProvider>
            <App />
          </DarkProvider>
        </TasksProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

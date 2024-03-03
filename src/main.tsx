import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/typography.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import TimerContextProvider from "./store/timers-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TimerContextProvider>
      <App />
    </TimerContextProvider>
  </React.StrictMode>
);

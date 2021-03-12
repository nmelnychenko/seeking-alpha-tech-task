import React from "react";
import HomePage from "./containers/HomePage";
import { AlertsStatusProvider } from "./context/AlertsStatus";

import "./index.css";

function App() {
  return (
    <>
      <AlertsStatusProvider>
        <HomePage />
      </AlertsStatusProvider>
    </>
  );
}

export default App;

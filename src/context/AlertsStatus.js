import React, { createContext, useState } from "react";

const defaultCheckedItems = {
  "afk-alert-status": true
}
const AlertStatusContext = createContext(defaultCheckedItems);

const AlertsStatusProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState({...defaultCheckedItems});

  return (
    <AlertStatusContext.Provider value={{ checkedItems, setCheckedItems }}>
      {children}
    </AlertStatusContext.Provider>
  )
}

export { AlertStatusContext, AlertsStatusProvider };
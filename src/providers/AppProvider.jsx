import React from "react";
import { getGlobalData } from "../api/global";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [switchHighLights, setSwitchHighLights] = React.useState(true);
  const [globalData, setGlobalData] = React.useState({});

  React.useEffect(() => {
    if (switchHighLights) {
      getGlobalData().then((data) => setGlobalData(data));
    }
  }, [switchHighLights]);

  const context = {
    switchHighLights,
    globalData,
    setSwitchHighLights,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;

import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //defing different state values
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubMenuOpen] = useState(true);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubmenuOpen,
        openSideBar,
        closeSideBar,
        openSubMenu,
        closeSubMenu,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};
export { AppProvider };

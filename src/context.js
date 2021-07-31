import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //defing different state values
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubMenuOpen] = useState(false);
  const [page, setPage] = useState("");
  const [links, setLinks] = useState([]);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSubMenu = (text, coordianttes) => {
    setPage(text);
    for (let i = 0; i < sublinks.length; i++) {
      const links = sublinks[i];
      if (links.page === page) {
        setLinks(links.links);
        break;
      }
    }
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
        page,
        links,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};
export { AppProvider };

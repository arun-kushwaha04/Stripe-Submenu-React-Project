import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //defing different state values
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubMenuOpen] = useState(false);
  const [page, setPage] = useState("");
  const [links, setLinks] = useState([]);
  const [coordinates, setCoordinates] = useState({ center: 0, bottom: 0 });
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    setPage(text);
    setCoordinates(coordinates);
    for (let i = 0; i < sublinks.length; i++) {
      const links = sublinks[i];
      if (links.page === text) {
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
        coordinates,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};
export { AppProvider };

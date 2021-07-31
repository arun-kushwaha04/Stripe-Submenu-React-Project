import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobal } from "./context";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobal();
  return (
    <section
      className={`${
        isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((title, index) => {
            return (
              <article key={index}>
                <h4>{title.page}</h4>
                <div className="sidebar-sublinks">
                  {title.links.map((links, index) => {
                    const { label, icon, url } = links;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

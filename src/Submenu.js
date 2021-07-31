import React, { useState, useRef, useEffect } from "react";
import { useGlobal } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, page, links, coordinates } = useGlobal();
  const [columns, setColumns] = useState("col-2");
  const subMenuContainer = useRef(null);
  useEffect(() => {
    setColumns("col-2");
    subMenuContainer.current.style.left = `${coordinates.center}px`;
    subMenuContainer.current.style.top = `${coordinates.bottom}px`;
    if (links.length === 3) setColumns("col-3");
    if (links.length > 3) setColumns("col-4");
  }, [page, coordinates, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={subMenuContainer}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;

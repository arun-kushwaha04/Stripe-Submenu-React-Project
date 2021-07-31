import React, { useState, useRef, useEffect } from "react";
import { useGlobal } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, page, links } = useGlobal();
  const columns = "column-3";
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
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

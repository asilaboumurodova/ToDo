import uzb from "@i/uzb.svg";
import rus from "@i/rus.svg";
import searchImg from "@i/search.svg";
import backImg from "@i/back.svg";
import closeImg from "@i/close.svg";
import { useContext, useState } from "react";

import { Context } from "../context/Context";
function Navbar() {
  const { flag,lang, changeLange,search, setSearch } = useContext(Context);
  const [navItem, setNavItem] = useState(true);
  


  return (
    <nav className="nav">
      <div className={`nav__item ${navItem ? "active" : ""}`}>
        <button className={`nav__item-lang`} onClick={() => changeLange(flag)}>
          <img src={flag ? uzb : rus} alt="" />
          <span>{flag ? "UZ" : "RU"}</span>
        </button>
        <h1 className="nav__title">{lang.appbartitle}</h1>
        <button className="nav__item-search" onClick={() => setNavItem(false)}>
          <img src={searchImg} alt="" />
        </button>
      </div>
      <div className="nav__form">
        <button className="nav__form-btn" onClick={() => setNavItem(true)}>
          <img src={backImg} alt="" />
        </button>
        <input
          type="text"
          className="nav__form-inp"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className="nav__form-btn">
          <img src={closeImg} alt="" />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;

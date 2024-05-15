import React, { useContext } from "react";
import editImg from "@i/edit.svg";
import delImg from "@i/delete.svg";
import { Context } from "../context/Context";
function NotesItem({ note }) {
  const { delNote,changeNote} = useContext(Context);
  
  return (
    <div className="notes__item">
      <div className="notes__item-top">
        <h2 className="notes__item-title">{note.title}</h2>
        <p className="notes__item-date">{note.date}</p>
      </div>
      <p className="notes__item-text">{note.text}</p>
      <div className="buttons">
        <button className="btn edit" onClick={()=>changeNote(note)}>
          <img src={editImg} alt="" />
          <span>РЕДАКТИРОВАТЬ</span>
        </button>{" "}
        <button onClick={()=>delNote(note.id)} className="btn del">
          <img src={delImg} alt="" />
          <span>Удалить</span>
        </button>
      </div>
    </div>
  );
}

export default NotesItem;

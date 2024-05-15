import React, { useContext } from "react";
import { Context } from "../context/Context";

function Modal() {
  const {
    modal,
    setmodal,
    title,
    text,
    settitle,
    settext,
    addNote,
    edit,
    setedit,
    closeModal,
    editingNote
  } = useContext(Context);
  return (
    <div
      className={`modal ${modal ? "active" : ""}`}
      onClick={(e) => (e.currentTarget === e.target ? closeModal() : "")}
    >
      <div className="modal__window">
        <h2 className="modal__title">
          {edit ? "Заменить заметку" : "Добавить заметку"}
        </h2>
        <label className="modal__label">
          <span>Title</span>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </label>
        <label className="modal__label">
          <span>Content</span>
          <input
            type="text"
            placeholder="Content"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </label>
        <div className="buttons">
          <button className="btn del" onClick={() => closeModal()}>
            <span>Bekor qilish</span>
          </button>
          <button
            className={`edit btn ${edit ? "none" : ""}`}
            onClick={() => addNote(title, text)}
          >
            <span>Qo’shish</span>
          </button>
          <button className={`edit btn ${!edit ? "none" : ""}`} onClick={()=>editingNote()}>
            <span>O'zgartirish</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

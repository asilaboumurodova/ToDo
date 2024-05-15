import { createContext, useEffect, useState } from "react";
export const Context = createContext();
import { uz, ru } from "@/language";
function ContextProvider({ children }) {
  const [flag, setFlag] = useState(false);
  const [lang, setlang] = useState(ru);
  const [search, setSearch] = useState("");
  const [modal, setmodal] = useState(false);
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [notes, setNotes] = useState(getNotes());
  const [edit, setedit] = useState(false);
  const [editNote, seteditNote] = useState({})
  function changeLange(bool) {
    setlang(bool ? ru : uz);
    setFlag(!bool);
  }
  function delNote(id) {
    setNotes(notes.filter((note) => note.id != id));
  }
  function closeModal() {
    setmodal(false);
    setedit(false);
    settitle("");
    settext("");
  }
  function getNotes() {
    let notesStorage = localStorage.getItem("notes");
    if (JSON.parse(notesStorage)?.length > 0) {
      return JSON.parse(localStorage.notes);
    } else {
      return [
        {
          id: 1,
          title: "Lorem",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque laudantium nobis repellat, aperiam officiis",
          date: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          title: "Lorem",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque laudantium nobis repellat, aperiam officiis",
          date: new Date().toLocaleDateString(),
        },
        {
          id: 3,
          title: "Lorem",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque laudantium nobis repellat, aperiam officiis.",
          date: new Date().toLocaleDateString(),
        },
        {
          id: 4,
          title: "Lorem",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque laudantium nobis repellat, aperiam officiis.",
          date: new Date().toLocaleDateString(),
        },
      ];
    }
  }
  function addNote(title, text) {
    if (title != "" && text != "") {
      let newNote = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
        title: title,
        text: text,
        date: new Date().toLocaleDateString(),
      };
      setNotes([...notes, newNote]);
      settitle("");
      settext("");
      setmodal(false);
    }
  }
  function changeNote(note) {
    settitle(note.title);
    settext(note.text);
    seteditNote(note)
    setedit(true);
    setmodal(true);
  }
  function editingNote(){
    setNotes(notes.map(note => {
      if(note.id == editNote.id){
        note.title = title
        note.text = text
        note.date = new Date().toLocaleDateString()
      }
      return note
    }))
    closeModal()
  }
  useEffect(() => {
    localStorage.notes = JSON.stringify(notes);
  }, [notes]);
  return (
    <Context.Provider
      value={{
        flag,
        lang,
        changeLange,
        notes,
        search,
        setSearch,
        delNote,
        modal,
        setmodal,
        title,
        text,
        settitle,
        settext,
        addNote,
        setedit,
        edit,
        changeNote,
        closeModal,
        editingNote
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

import { useContext, useState } from "react"
import { Context } from "../context/Context"
import listImg from "@i/list.svg";
import gridImg from "@i/grid.svg";
import NotesItem from "./NotesItem";
function Notes() {
    const {lang, notes,search} = useContext(Context)
    const [grid, setgrid] = useState(false)
  return (
    <div className="notes container">
        <div className="notes__top">
            <h2 className="notes__top-title">{lang.infobar}</h2>
            <button className="notes__top-btn" onClick={()=> setgrid(!grid)}>
                <img src={grid ? gridImg : listImg} alt="" />
                <span>{grid ? lang.grid : lang.list}</span>
            </button>
        </div>
        <div className={`notes__list ${grid ? 'active' : ''}`}>
          {
            notes.filter((note)=>note.title.toLowerCase().includes(search.trim().toLowerCase())).map((note)=>{
             return <NotesItem key={note.id} note={note}/>
            })
          }
          
        </div>
    </div>
  )
}

export default Notes
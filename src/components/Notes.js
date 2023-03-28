import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";


const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((ele)=>{
          return <Noteitem key={ele._id} note={ele}/>
        })}
      </div>
  )
}

export default Notes

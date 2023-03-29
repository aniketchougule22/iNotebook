import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://127.0.0.1:3001";

  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes);

  // Add a note
  const addNote = async (title, description, tag) => {
    // console.log('Adding a new Note');

    const response = await fetch(`${host}/api/notes/add_notes`, {
        method: "POST",
        headers: {
          'token':
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFlZTA2OTJhY2FiZGE4NDcwYTY0NzEiLCJpYXQiOjE2ODAwNzU3MTB9.Uuw72S826s0sP9ckEV5OqCSuI3ZQ-tjAs4B5oQA6Kag",
        },
        body: JSON.stringify({title, description, tag}),
      });

    // const note = {
    //   _id: "6421791c8f79b3ee58a08b048",
    //   user_id: "641ea58f726ee9dcdd714221",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   created_at: "2023-03-27T11:08:12.518Z",
    //   __v: 0,
    // };
    console.log('response', response);
    setNotes(response.data);
  };

// Get all notes
const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/get_all_notes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'token':
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFlZTA2OTJhY2FiZGE4NDcwYTY0NzEiLCJpYXQiOjE2ODAwNzU3MTB9.Uuw72S826s0sP9ckEV5OqCSuI3ZQ-tjAs4B5oQA6Kag",
        }
        });
        const json = await response.json();
        console.log('json', json.data);
    // setNotes(notes.concat(json));
    setNotes(json.data);
    };

  // Delete a note
  const deleteNote = (id) => {
    console.log("Deleting a note with this id: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    
    const response = await fetch(`${host}/api/notes/update_note/${id}`, {
      method: "POST",
      headers: {
        'token':
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFlZTA2OTJhY2FiZGE4NDcwYTY0NzEiLCJpYXQiOjE2ODAwNzU3MTB9.Uuw72S826s0sP9ckEV5OqCSuI3ZQ-tjAs4B5oQA6Kag",
      },
      body: JSON.stringify({title, description, tag}),
    });

    const json = response.json();
    console.log('json', json)
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, getNotes, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

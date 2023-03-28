import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const initialNotes = [
        {
            "_id": "6421791c8f79b43ee58a0b049",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "subscription note",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        },

        {
            "_id": "6421791c8f79b3ee58a50b048",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "my title",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        },

        {
            "_id": "6421791c8f79b3ee58a0b6049",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "subscription note",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        },

        {
            "_id": "6421791c8f79b3ee58a0b7048",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "my title",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        },

        {
            "_id": "6421791c8f479b3ee58a0b049",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "subscription note",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        },

        {
            "_id": "6421791c8f79b3ee558a0b048",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "my title",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        },

        {
            "_id": "6421791c8f79b3ee58a20b049",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "subscription note",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        },

        {
            "_id": "6421791c8f79b3ee58a08b048",
            "user_id": "641ea58f726ee9dcdd714221",
            "title": "my title",
            "description": "This is subscription Note",
            "tag": "Instagram",
            "created_at": "2023-03-27T11:08:12.518Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
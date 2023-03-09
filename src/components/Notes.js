import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import NoteItem from './NoteItem';


function Notes() {
    const context = useContext(noteContext)
    const { Notes, setNotes } = context;
    return (
        <div className="row">
            <h1>Your Notes</h1>
            {Notes.map((note) => {
                return <NoteItem note={note}/>;
            })}
        </div>
    )
}

export default Notes
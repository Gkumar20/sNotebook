import React, { useContext,useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';


function Notes() {
    const context = useContext(noteContext)
    const { notes,getNotes} = context;
    useEffect(() => {
      getNotes();
      // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <AddNotes/>
            <div className="row">
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes
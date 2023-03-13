import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(noteContext)
    const { deleteNotes} = context;
    return (
        <div className="col-md-3 my-3">
            <div className="cardui">
            <div className="d-flex">
                <h3 className="cardui__title mx-2">{note.title}</h3>
                <i className="fa-solid fa-pen-to-square mx-2"></i>
                <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNotes(note._id)}}></i>
            </div>
                <p className="cardui__content">{note.description}</p>
                <div className="cardui__date">
                    April 15, 2022
                </div>
                

            </div>
        </div>
    )
}

export default NoteItem
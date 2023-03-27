import React, { useContext, useEffect,useState,useRef } from 'react'
import noteContext from "../context/notes/noteContext"
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';


function Notes(props) {
    const context = useContext(noteContext)
    const { notes, getNotes,editNotes } = context;
    const [note, setnote] = useState({id:"", etitle:"",edescription:"",etag:""})
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (currNote) => {
        ref.current.click();
        setnote({id:currNote._id,etitle:currNote.title,edescription:currNote.description,etag:currNote.tag})
    }

    //run func due to click on submit button
    const handleClick=(e)=>{
        editNotes(note.id,note.etitle,note.edescription,note.etag);
        refClose.current.click();
        props.showAlert("updated Successfully","success")
      }
  
      // run this function due to chnaging input
      const handleChange=(element)=>{
        // note remain but overrite the value with the input value 
        setnote({...note, [element.target.name]: element.target.value})
      }

    return (
        <>
            <AddNotes showAlert={props.showAlert}/>

            {/* to update the note using bootstapmodel  */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update New Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label"> Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" onChange={handleChange} value={note.etitle} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" onChange={handleChange} id="edescription" value={note.edescription} name="edescription" />
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label" htmlFor="tag">Tag</label>
                                    <input type="etag" className="form-control" onChange={handleChange} id="etag" value={note.etag} name="etag" />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <h1>Your Notes</h1>
                <div className="container mx-3">
                {notes.length===0 && "No Notes available to Display"}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
                })}
            </div>
        </>
    )
}

export default Notes
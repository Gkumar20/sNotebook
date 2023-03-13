import React, { useContext,useState } from 'react'
import noteContext from "../context/notes/noteContext"

function AddNotes() {
  const context = useContext(noteContext)
    const { addNotes} = context;
    const [note, setnote] = useState({title:"",description:"",tag:""})
    
    //run func due to click on submit button
    const handleClick=(e)=>{
      e.preventDefault();
      // after changing notes it will addnotes in addnotes 
      addNotes(note.title,note.description,note.tag);
    }

    // run this function due to chnaging input
    const handleChange=(element)=>{
      // note remain but overrite the value with the input value 
      setnote({...note, [element.target.name]: element.target.value})
    }
  return (
    <div>
        <h1>Add Your Notes</h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label"> Title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={handleChange} aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" onChange={handleChange} id="description" name="description" />
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="tag">Tag</label>
            <input type="tag" className="form-control" onChange={handleChange} id="tag" name="tag" />
          </div>
          <button type="submit" onClick={handleClick} className="btn btn-primary">AddNote</button>
        </form>
      </div>
    </div>
  )
}

export default AddNotes
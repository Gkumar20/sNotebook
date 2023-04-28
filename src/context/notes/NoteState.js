import React from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';
import {host} from '../../helper'



const NoteState = (props) => {
  // const host = "http://localhost:5000"
  const fetchnote = [];
  const [notes, setNotes] = useState(fetchnote)

  //Get all notes
  const getNotes = async () => {
    //TODO : API call
    const url = `${host}/api/notes/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",  
        "auth-token":localStorage.getItem('token')
      },
      
    });
    const json1 = await response.json()
    // console.log(json1)
    setNotes(json1)
  }

  //addNotes function
  const addNotes = async (title, desc, tag) => {
    //TODO : API call
    const url = `${host}/api/notes/addnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({"title":title,"description":desc,"tag":tag}),
    });
    const json = await response.json(); 

    setNotes(notes.concat(json))
  }

  //deleteNotes
  const deleteNotes = async(id) => {
    //TODO: API call
    const url = `${host}/api/notes//deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
    const json =  response.json(); 
    console.log(json)
    
    console.log("deleted note id  " + id)

    // newnote have only that note which is note equal to id 
    const newnote = notes.filter((note) => { return note._id !== id })
    setNotes(newnote)
  }

  //editNotes
  const editNotes = async (id, title, desc, tag) => {
    const url = `${host}/api/notes//updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({"title":title,"description":desc,"tag":tag}),
    });
    const json =await response.json(); 
    console.log(json);

    //update at client side
    const newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = desc;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)

  }

  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
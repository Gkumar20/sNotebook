import React from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';


const NoteState = (props) => {
  const host = "http://localhost:5000"
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
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzU4Y2U5M2RkZWU2ODVmNTYwM2Q1In0sImlhdCI6MTY3Nzk0MTA1NX0.DV3pEymerIBmuBge28SayESQLcILuT-shgpv6xxnYDo"
      },
      
    });
    const json1 = await response.json()
    console.log(json1)
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
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzU4Y2U5M2RkZWU2ODVmNTYwM2Q1In0sImlhdCI6MTY3Nzk0MTA1NX0.DV3pEymerIBmuBge28SayESQLcILuT-shgpv6xxnYDo"
      },
      body: JSON.stringify({title,desc,tag}),
    });
    // const json =  response.json(); 

    
    const note = {
      "_id": "64087838517eu7fbefc361125",
      "user": "640358ce93ddee685f5603d5",
      "title": title,
      "description": desc,
      "tag": tag,
      "date": "2023-03-08T11:57:44.103Z",
      "__v": 0
    }

    setNotes(notes.concat(note))
  }

  //deleteNotes
  const deleteNotes = (id) => {

    //TODO: API call
    console.log("deleted note id  " + id)

    // newnote have only that note which is note equal to id 
    const newnote = notes.filter((note) => { return note._id !== id })
    setNotes(newnote)
  }

  //editNotes
  const editNotes = async (id, title, desc, tag) => {
    const url = `${host}/api/notes//updatenote/${id}`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzU4Y2U5M2RkZWU2ODVmNTYwM2Q1In0sImlhdCI6MTY3Nzk0MTA1NX0.DV3pEymerIBmuBge28SayESQLcILuT-shgpv6xxnYDo"
      },
      body: JSON.stringify({title,desc,tag}),
    });
    const json =  response.json(); 

    //update at client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = desc;
        element.tag = tag;
      }
    }

  }

  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
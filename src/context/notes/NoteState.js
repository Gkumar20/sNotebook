import React from 'react';
import NoteContext from './noteContext';
import { useState } from 'react';


const NoteState=(props)=>{
    const fetchnote=[
        {
          "_id": "6404255bdfa98e26b3525938",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes",
          "description": "this is my first note",
          "tag": "study",
          "date": "2023-03-05T05:15:07.808Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "6408782a517e7fbefc361123",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes1",
          "description": "this is my f2nd note1",
          "tag": "study1",
          "date": "2023-03-08T11:57:30.247Z",
          "__v": 0
        },
        {
          "_id": "64087838517e7fbefc361125",
          "user": "640358ce93ddee685f5603d5",
          "title": "My Notes12",
          "description": "this is my 3rd note12",
          "tag": "study12",
          "date": "2023-03-08T11:57:44.103Z",
          "__v": 0
        }
      ]
      const [Notes, setNotes] = useState(fetchnote)
    
   
    return(
        <NoteContext.Provider value={{Notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
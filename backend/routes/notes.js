const express = require('express')
const router = express.Router()
const Notes = require("../models/Notes")
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


//Route- 1: fetch all notes  using : GET at "/api/auth/getuser"  login require
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes)
    return
  } catch (error) {
    console.error(error.message)
    // error send as a response at status 500
    res.status(500).send("Internal Error Occured")
    return
  }
})


//Route- 2: create Notes using : POST at "/api/auth/addnote"  login require
router.post('/addnote', fetchuser, [
  //here chekcing  of title  is valid or not 
  body('title', "Enter Valid Title").isLength({ min: 3 }),
  // Description must be at least 5 chars long min:5
  body('description', "Discription must be greater than 5 character").isLength({ min: 5 }),
], async (req, res) => {
  try {

    //destructuring or take data by user entered
    const { title, description, tag } = req.body
    //validator check the error of title & description 
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // post the data into databse 
    const note = new Notes({
      title, description, tag, user: req.user.id
    })
    const savenote = await note.save()
    res.json(savenote)
    // return

  } catch (error) {
    console.error(error.message)
    // error send as a response at status 500
    res.status(500).send("Internal Error Occured")
    // return
  }
})

module.exports = router
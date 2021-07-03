const router = require('express').Router();

const { getNotes, saveNote, deleteNote } = require('../../public/assets/js/index');
const { notes } = require('../../db/db.json');

// get route to return all saved notes as json
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = getNotes(req.query, results);
    }
    res.json(results);
})

// post route to save new notes
router.post('/api/notes', (req, res) => {
    const newNote = saveNote(req.body, notes);
    res.json(newNote);
  });

// // gets a note with specific id
// router.get("/api/notes/:id", (req,res) => {
//     res.json(notes[req.params.id]);
// });

// // deletes a note with specific id
// router.delete("/api/notes/:id", (req, res) => {
//     notes.splice(req.params.id, 1);
//     updateDb();
//     console.log("Deleted note with id "+req.params.id);
// });

module.exports = router;
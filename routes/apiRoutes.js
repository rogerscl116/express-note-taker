const router = require('express').Router();
const keep = require('../db/keep.js');

// get route for all notes
router.get("/notes", function (req, res) {
    keep
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  });
  
  // post route for creating a note
  router.post("/notes", (req, res) => {
    keep
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch(err => res.status(500).json(err));
  });
  
  
  // delete route for deleting a note
  router.delete("/notes/:id", function (req, res) {
    keep
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });
  
  module.exports = router;
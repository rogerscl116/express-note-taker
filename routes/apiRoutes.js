const router = require('express').Router();
const keep = require('../db/keep.js');

// get route for all notes
router.get('/notes', (req, res) => {
    keep
        .getNotes()
        .then((notes) => {
            return res.json(notes)
        })
        .catch((err) => res.status(500).json(err))
});

// post route to create note
router.post('/notes', (req, res) => {
    keep
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err))
});

// delete route to delete note
router.delete('/notes/:id', (req, res) => {
    keep
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err))
})

module.exports = router;
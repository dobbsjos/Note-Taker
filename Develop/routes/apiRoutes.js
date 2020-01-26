const router = require("express").Router();
const DBStorage = require("./db/storage");

router.get("/notes", function (req, res) {
    DBStorage
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});

router.post("/notes", function (req, res) {
    DBStorage
    .writeNotes(req.body)
    .then(note => res.json(note))
    .catch(err => res.status(500).json(err))
});

router.delete("/notes/:id", function (req, res) {
    DBStorage
    .deleteNote(req.params.id)
    .then(() => res.json({
        ok: true
    }))
    .catch(err => res.status(500).json(err))
});

module.exports = router;
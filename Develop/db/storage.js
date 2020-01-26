const fs = require("fs");

const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class DBStorage {
    constructor() {
        this.lastId = 0
    }
    retrieveNotes() {
        return readFileAsync("db/db.json", "utf8").then(notes => {
            try {
                return [].concat(JSON.parse(notes));
            } catch(err) {
                return [];
            } 
        });
    }
    writeNotes(note) {
        const {title, text} = note
        const newNote = {title, text, id: ++ this.lastId}
        return this.retrieveNotes()
        .then(notes => [...notes, newNote])
        .then(mergeNotes => writeFileAsync("db/db.json", JSON.stringify(mergeNotes)))
        .then(() => newNote);
    }
    deleteNote(id) {
        return this.retrieveNotes()
        .then(notes => notes.filter(note => note.id !== parseInt(id)))
        .then(filterNotes => writeFileAsync("db/db.json", JSON.stringify(filterNotes)))
    }
}
module.exports = new DBStorage();
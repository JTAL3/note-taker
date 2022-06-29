const fs = require('fs');
const path = require('path');

//creating new note and writing data
const newNote = (body, notesList) => {

    const note = body;
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesList }, null, 2)
    );
    return note;
}

//consider best formatting practice

const findId = (id, notesList) => {
    const response = notesList.filter(note => note.id === id)[0];
    return response;
}

//experimenting with t
// function (note) {
//     if (!note.title || type note.title !== 'string') {
//         return false;
//     }
//     if (!note.text || type note.text !== 'string') {
//         return false;
//     }
//     return true;
// }


module.exports = { newNote, findId };
const fs = require('fs');
const path = require('path');

//creating new note and writing data
function createNote (body, notesArray) {

    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}


function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

//consider best formatting practice

function findId(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
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

// function findId(id, notesArray) {
//     const result = notesArray.filter(notes => notes.id === id)[0];
//     return result;
// }

//  const findByIdAndDelete = (id, notesArray) => {
//     const removeIndex = notesArray.map((item) => { return item.id }).indexOf(id);
//     notesArray.splice(removeIndex, 1);
//     return removeIndex;
//  }

module.exports = { createNote, findId, validateNote };



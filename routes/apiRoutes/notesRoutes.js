
const router = require('express').Router();
const { createNote, findById } = require('../../lib/createNotes');
const { notes } = require('../../db/db.json');


router.get('/notes', (req, res) => {
    
    let results = notes;
    res.json(results);

});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('Please correct the note.');
    } 
    
    else {
        const newNote = createNote(req.body, notes);
        res.json(newNote);
    }
});

//trying to get the extra credit assignment of creating a delete option
// router.delete ('/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (!result) {
//         res.status(404);
//     } else {
//         console.log(req.params.id);
//         res.json(req.params.id);
//     }
// });

module.exports = router;

const router = require('express').Router();
const { newNote } = require('../../lib/createNotes');
const { notes } = require('../../db/db.json');


router.get('/notes', (req, res) => {
    
    let result = notes;
    res.json(result);

});


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('Please correct the note.');
    } 
    
    else {
        const additionalNote = newNote(req.body, notes);
        res.json(req.body);
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
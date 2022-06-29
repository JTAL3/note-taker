
const path = require('path');
const { pathToFileURL } = require('url');
const router = require('express').Router();

//html routes so html functionality appears
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// router.get('/', (rew,res) => {
//     res.sendFile(pathToFileURL(__dirname, '../../public/index.html'))
// })

module.exports = router;

//router.get('/notes',) (req,res) => {
//     res,sendFile(path.join(__dirname, ../));

// }



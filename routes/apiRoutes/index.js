
const router = require('express').Router();
const noteRouter = require('./notes');


router.use(noteRouter);




module.exports = router;
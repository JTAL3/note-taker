// https://serene-cliffs-45384.herokuapp.com/


const express = require('express');



const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//parse string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));


// function createNewNote(body, notesArray) {
//     notesArray = notes.notes
//     const newNote = body;
//     newNote.id = uuidv4();
//     notesArray.push(newNote);
//     fs.writeFileSync(
//       path.join(__dirname, './db/db.json'),
//       JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return newNote;
//   }
  
//   function validateNote() {
//     if (!notes.title || typeof notes.title !== 'string') {
//       return false;
//     }
//     if (!notes.text || typeof notes.text !== 'string') {
//     return false;
//     }
//     return true;
//   };
  
  
  
//   app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });
  
//   app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
//   });

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

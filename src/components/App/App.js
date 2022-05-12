// == Import
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotesList from '../NotesList/NotesList';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Faq from '../Faq/Faq';

import { updateNote, removeNote, addNote } from '../../tools/dataUtils';

import './stylesApp.scss';

// == Composant
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // lors du mount on recupere la valeur du note et on la set dans le state
    const jsonNotes = localStorage.getItem('notes');
    if (!jsonNotes) {
      return;
    }

    const localStorageNote = JSON.parse(jsonNotes);
    if (!Array.isArray(localStorageNote)) {
      return;
    }
    setNotes(localStorageNote);
  }, []);

  useEffect(() => {
    // à chaque mise à jour de note on l'enregistre dans le localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNoteEdit = (id, text) => {
    const newNotes = updateNote(notes, id, text);
    setNotes(newNotes);
  };

  const handleNoteDelete = (id) => {
    const newNotes = removeNote(notes, id);
    setNotes(newNotes);
  };

  const handleAddNote = (text) => {
    const newNotes = addNote(notes, text);
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="*"
          element={(
            <>
              <NotesList
                notes={notes}
                onNoteEdit={handleNoteEdit}
                onNoteDelete={handleNoteDelete}
              />
              <Form
                onAddNote={handleAddNote}
              />
            </>
        )}
        />
        <Route
          path="/faq"
          element={<Faq />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;

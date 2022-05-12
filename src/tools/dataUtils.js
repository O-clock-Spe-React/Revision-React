import DomPurify from 'dompurify';
/**
 * Permet de recupérer un nouvel id pour un tableau de note
 * @param {Array<Object>} notes Tableau de notes
 * @returns {Number}
 */
export function getNewId(notes) {
  if (notes.length === 0) {
    // si il n'y a plus aucune note on sort le 1er id
    return 1;
  }
  const ids = notes.map((note) => note.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}

/**
 * Supprime un element du tableau, et retourne le nouveau tableau
 * @param {Array<Object>} notes Tableau de notes
 * @param {number} id number
 * @returns {Array<Object>}
 */
export function removeNote(notes, id) {
  const notesCopy = [...notes];
  const index = notesCopy.findIndex((note) => note.id === id);
  if (index >= 0) {
    notesCopy.splice(index, 1);
  }
  return notesCopy;
}

/**
 * Modifie un element du tableau
 * @param {Array<Object>} notes Tableau de notes
 * @param {number} id number
 * @returns {Array<Object>}
 */
export function updateNote(notes, id, text) {
  const notesCopy = [...notes];
  const index = notesCopy.findIndex((note) => note.id === id);
  if (index >= 0) {
    notesCopy[index] = {
      ...notesCopy[index],
      text,
      timestamp: Date.now(),
    };
  }
  return notesCopy;
}

/**
 * Ajoute un element dans le tableau
 * @param {Array<Object>} notes Tableau de notes
 * @param {String} text le texte de la nouvelle note
 * @returns {Array<Object>}
 */
export function addNote(notes, text) {
  const notesCopy = [...notes];
  notesCopy.push({
    text,
    timestamp: Date.now(),
    id: getNewId(notes),
  });
  return notesCopy;
}

/**
 * Permet de formatter le texte d'une note
 * @param {String} text le texte à formatter
 * @returns {String}
 */
export function formatNoteText(text) {
  return DomPurify.sanitize(text.trim());
}

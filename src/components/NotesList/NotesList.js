import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note/Note';
import './notesListStyles.scss';

function NotesList({
  notes,
  onNoteEdit,
  onNoteDelete,
  className,
  ...rest
}) {
  return (
    <div
      {...rest}
      className={`notes-list ${className || ''}`}
    >
      {notes.map(({ id, ...noteRest }) => (
        <Note
          key={id}
          onEdit={(text) => onNoteEdit(id, text)}
          onDelete={() => onNoteDelete(id)}
          {...noteRest}
        />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  className: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onNoteEdit: PropTypes.func.isRequired,
  onNoteDelete: PropTypes.func.isRequired,
};
NotesList.defaultProps = {
  className: '',
};
export default React.memo(NotesList);

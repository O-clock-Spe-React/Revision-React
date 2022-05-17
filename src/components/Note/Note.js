import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';

import { formatNoteText } from '../../tools/dataUtils';
import './noteStyles.scss';

function Note({
  onDelete,
  onEdit,
  text,
  timestamp,
  className,
  ...rest
}) {
  const [editMode, setEditMode] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(text);

  const date = new Date(timestamp);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedValue = formatNoteText(textAreaValue);
    if (formattedValue) {
      // si il y a une valeur au nouveau texte on envoi pour enregistrement
      onEdit(textAreaValue);
    }
    else {
      // si le nouveau texte n'a pas de texte, on le supprime
      onDelete();
    }
    // on ferme le textarea
    setEditMode(false);
  };

  return (
    <div
      {...rest}
      className={`note ${className || ''}`}
    >
      <span className="note--date">{date.toLocaleString()}</span>
      {editMode ? (
        <form onSubmit={handleSubmit} className="note--form">
          <textarea
            onChange={(event) => setTextAreaValue(event.target.value)}
            value={textAreaValue}
          />
          <button
            type="submit"
            className="note--form-button"
          >
            Valider
          </button>
        </form>
      ) : (
        <p className="note--text">
          {text}
        </p>
      )}
      <div className="note--button-group">
        <button
          className="note--button note--button__delete"
          type="button"
          onClick={() => onDelete()}
        >
          <FeatherIcon icon="trash" size={15} />
        </button>
        <button
          className="note--button note--button__edit"
          type="button"
          onClick={() => setEditMode(true)}
        >
          <FeatherIcon icon="edit-2" size={15} />
        </button>
      </div>
    </div>
  );
}

Note.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
Note.defaultProps = {
  className: '',
};
export default React.memo(Note);

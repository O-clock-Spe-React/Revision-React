import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatNoteText } from '../../tools/dataUtils';
import './formStyles.scss';

function Form({ onAddNote, className, ...rest }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedValue = formatNoteText(value);
    if (formattedValue) {
      onAddNote(value);
      setValue('');
    }
  };

  return (
    <form
      {...rest}
      className={`form ${className || ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="form--button"
        type="submit"
      >
        Ajouter
      </button>
    </form>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  onAddNote: PropTypes.func.isRequired,
};
Form.defaultProps = {
  className: '',
};
export default React.memo(Form);

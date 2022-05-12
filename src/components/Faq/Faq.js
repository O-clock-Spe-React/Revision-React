import React from 'react';
import PropTypes from 'prop-types';
import './faqStyles.scss';

function Faq({ className, ...rest }) {
  return (
    <div
      {...rest}
      className={`faq ${className || ''}`}
    />
  );
}

Faq.propTypes = {
  className: PropTypes.string,
};
Faq.defaultProps = {
  className: '',
};
export default React.memo(Faq);

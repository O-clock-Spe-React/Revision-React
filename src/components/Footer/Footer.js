import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './footerStyles.scss';

function Footer({ className, ...rest }) {
  return (
    <footer
      {...rest}
      className={`footer ${className || ''}`}
    >
      <Link to="/">
        Accueil
      </Link>
      <Link to="/faq">
        FAQ
      </Link>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
Footer.defaultProps = {
  className: '',
};
export default React.memo(Footer);

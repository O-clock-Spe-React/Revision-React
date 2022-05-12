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
        Le lien pour l'app
      </Link>
      <Link to="/faq">
        Le lien pour la FAQ
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

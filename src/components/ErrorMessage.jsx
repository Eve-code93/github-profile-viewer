 
import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message, className, style }) => {
  return message ? (
    <div className={className} style={{ color: 'red', ...style }}>
      {message}
    </div>
  ) : null;
};

// Prop validation
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

ErrorMessage.defaultProps = {
  className: '',
  style: {},
};

export default ErrorMessage;

import React from 'react'
import PropTypes from 'prop-types'

const FormLoginErrors = ({ text }) => (
  <span style={{color: 'red'}}>{text}</span>
)

FormLoginErrors.propTypes = {
  text: PropTypes.string.isRequired
};

export default FormLoginErrors;

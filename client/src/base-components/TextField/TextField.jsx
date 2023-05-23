import React from 'react';
import PropTypes from 'prop-types';

import { MuiTextField, InputAdornment } from './TextField.styled';

export default function TextField({
  label,
  id,
  name,
  color,
  variant,
  onChange,
  value,
  startCmp,
  endCmp,
  fullWidth,
  required,
  disabled,
  readOnly,
  type,
  multiline,
  rows,
  maxRows,
  autoComplete,
  error,
  margin,
  focused,
  helperText,
  ...props
}) {
  return (
    <MuiTextField
      fullWidth={fullWidth}
      label={label}
      id={id}
      name={name}
      color={color}
      error={error}
      helperText={helperText}
      onChange={onChange}
      required={required}
      disabled={disabled}
      value={value}
      margin={margin}
      focused={focused}
      multiline={multiline}
      maxRows={maxRows}
      rows={rows}
      autoComplete={autoComplete}
      type={type}
      variant={variant}
      InputProps={{
        readOnly,
        ...(startCmp && {
          startAdornment: (
            <InputAdornment position="start">{startCmp}</InputAdornment>
          ),
        }),
        ...(endCmp && {
          endAdornment: (
            <InputAdornment position="end">{endCmp}</InputAdornment>
          ),
        }),
      }}
      {...props}
    />
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
  onChange: PropTypes.func,
  value: PropTypes.string,
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  autoComplete: PropTypes.string,
  error: PropTypes.bool,
  margin: PropTypes.oneOf(['normal', 'dense']),
  focused: PropTypes.bool,
  helperText: PropTypes.string,
};

TextField.defaultProps = {
  label: undefined,
  id: undefined,
  name: undefined,
  color: 'primary',
  variant: 'outlined',
  onChange: undefined,
  value: undefined,
  startCmp: undefined,
  endCmp: undefined,
  fullWidth: true,
  required: undefined,
  disabled: undefined,
  readOnly: undefined,
  type: 'text',
  multiline: undefined,
  rows: undefined,
  maxRows: undefined,
  autoComplete: 'off',
  error: undefined,
  margin: undefined,
  focused: undefined,
  helperText: undefined,
};

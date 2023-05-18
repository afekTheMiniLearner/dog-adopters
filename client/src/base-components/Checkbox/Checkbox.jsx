import React from 'react';
import PropTypes from 'prop-types';

import { MuiCheckbox } from './Checkbox.styled';

export default function Checkbox({
  label,
  size,
  color,
  textColor,
  muiColor,
  checked,
  onChange,
  icon,
  checkedIcon,
  defaultChecked,
  required,
  disabled,
  labelPlacement,
  fontSize,
  ...props
}) {
  return (
    <MuiCheckbox
      label={label}
      size={size}
      color={color}
      textcolor={textColor}
      muicolor={muiColor}
      icon={icon}
      checkedIcon={checkedIcon}
      defaultChecked={defaultChecked}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      labelplacement={labelPlacement}
      fontSize={fontSize}
      {...props}
    />
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'information',
  ]),
  textColor: PropTypes.string,
  muiColor: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'information',
  ]),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['top', 'start', 'bottom', 'end']),
  fontSize: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
  size: 'small',
  color: 'primary',
  textColor: undefined,
  muiColor: undefined,
  checked: undefined,
  onChange: undefined,
  icon: undefined,
  checkedIcon: undefined,
  defaultChecked: undefined,
  required: false,
  disabled: false,
  labelPlacement: undefined,
  fontSize: undefined,
};
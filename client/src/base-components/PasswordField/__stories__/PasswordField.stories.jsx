import React from 'react';

import { MUI_COlORS, MUI_INPUT_TYPES } from '@utils';
import PasswordField from '../PasswordField';

export default {
  title: 'base-components/PasswordField',
  parameters: {
    controls: { exclude: /^(onChange|id|name|autoComplete|startCmp|endCmp)$/g },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '800px',
          height: '500px',
          border: 'lightgrey 1px solid',
          padding: '0.5em',
          gap: '1em',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: PasswordField,
};

export const Default = () => <PasswordField />;

const Template = (args) => <PasswordField {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'Password' },
  value: { control: { type: 'text' }, defaultValue: '' },
  variant: {
    control: 'inline-radio',
    options: ['filled', 'standard', 'outlined'],
    defaultValue: 'outlined',
  },
  color: {
    control: 'inline-radio',
    options: MUI_COlORS,
    defaultValue: 'primary',
  },
  fullWidth: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  required: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  readOnly: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  type: {
    control: 'inline-radio',
    options: MUI_INPUT_TYPES,
    defaultValue: 'text',
  },
  multiline: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  rows: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    defaultValue: 1,
  },
  maxRows: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    defaultValue: 5,
  },
  error: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  margin: {
    control: 'inline-radio',
    options: ['normal', 'dense'],
    defaultValue: 'normal',
  },
  focused: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  helperText: { control: { type: 'text' }, defaultValue: 'Helper-Text' },
};

export const HiddenContent = () => {
  const passwordInitialValue = 'password123';

  return (
    <>
      <PasswordField
        value={passwordInitialValue}
        hideByDefault
        label="Hidden by default"
      />
      <PasswordField
        value={passwordInitialValue}
        hideByDefault={false}
        label="Revealed by default"
      />
    </>
  );
};
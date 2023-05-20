import React, { useState } from 'react';

import TextField from '../TextField';

export default {
  title: 'base-components/TextField',
  parameters: {
    controls: {
      exclude: /^(onChange|id|name|autoComplete|startCmp|endCmp)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '800px',
          height: '800px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: TextField,
};

export const Default = () => <TextField />;

const Template = (args) => <TextField {...args} />;

export const Custom = Template.bind({});

Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'Label' },
  value: { control: { type: 'text' }, defaultValue: 'Value' },
  variant: {
    control: 'inline-radio',
    options: ['filled', 'standard', 'outlined'],
    defaultValue: 'standard',
  },
  color: {
    control: 'inline-radio',
    options: ['primary', 'success', 'warning', 'error'],
    defaultValue: 'primary',
  },
  fullWidth: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  required: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  type: {
    control: 'inline-radio',
    options: ['text', 'search', 'number', 'password'],
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
Custom.decorators = [
  (Story) => (
    <div
      style={{
        padding: '1em',
        width: '300px',
        height: '300px',
      }}
    >
      <Story />
    </div>
  ),
];

export const Labeled = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      label="labeled text field"
    />
  );
};

export const NoLabeled = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
    />
  );
};

export const Required = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      required
      label="required text field"
    />
  );
};

export const disabled = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      label="read only text field"
      disabled
    />
  );
};

export const TextFieldTypes = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <TextField
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        type="search"
        label="search type"
      />
      <TextField
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        type="text"
        label="text type"
      />
      <TextField
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        value={number}
        type="number"
        label="number type"
      />

      <TextField
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        type="password"
        label="password type"
      />
    </div>
  );
};

export const TextFieldVariants = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <TextField
        onChange={(event) => {
          setText1(event.target.value);
        }}
        value={text1}
        label="filled"
        variant="filled"
      />
      <TextField
        onChange={(event) => {
          setText2(event.target.value);
        }}
        value={text2}
        label="standard"
        variant="standard"
      />
      <TextField
        onChange={(event) => {
          setText3(event.target.value);
        }}
        value={text3}
        label="outlined"
        variant="outlined"
      />
    </div>
  );
};
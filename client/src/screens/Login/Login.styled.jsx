import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MuiBox from '@mui/material/Box';

import {
  TextField as MyTextField,
  PasswordField as MyPasswordField,
  Button as MyButton,
} from '@base-components';

export const PageContainer = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Paper = styled(MuiPaper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  padding: 2.3em 6em;
`;

export const Title = styled(({ children, ...props }) => (
  <MuiTypography component="div" variant="h4" {...props}>
    {children}
  </MuiTypography>
))`
  flex: 2.2;
  font-weight: bold;
`;

export const Text = styled(({ children, ...props }) => (
  <MuiTypography component="div" variant="h7" {...props}>
    {children}
  </MuiTypography>
))`
  display: flex;
  align-items: flex-end;
  flex: 1.3;
  font-weight: bold;
  white-space: pre-wrap;
  margin-bottom: 15px;
`;

export const Link = styled(MuiLink)`
  font-weight: bold;
`;

export const TextField = styled(MyTextField)`
  flex: 1.5;
`;

export const PasswordField = styled(MyPasswordField)`
  flex: 1.7;
`;

export const Button = styled(MyButton)`
  flex: 0.7;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
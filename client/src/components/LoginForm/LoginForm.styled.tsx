import React, { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
    Link as MuiLink,
    Paper as MuiPaper,
    Box as MuiBox,
    Typography as MuiTypography,
    Divider as MuiDivider,
} from '@mui/material';

import {
    TextField as MyTextField,
    PasswordField as MyPasswordField,
    Button as MyButton,
} from '@/base-components';

export const FormContainer = styled(MuiPaper)(({ theme }) => ({
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',

    [theme.breakpoints.down('md')]: {
        width: '65%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '78%',
        padding: '1em 2em',
    },
}));

export const MainContentWrapper = styled(MuiBox)`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const FormTitle = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" variant="h5" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    margin: 0,
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.6em',
    },
}));

export const Text = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    position: 'absolute',
    top: 38,
    right: 45,
    fontWeight: 'bold',
    whiteSpace: 'pre-wrap',

    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8em',
    },
}));

export const Link = styled(MuiLink)`
    font-weight: bold;
    cursor: pointer;
`;

export const TextField = styled(MyTextField)`
    margin-bottom: 20px;
`;

export const PasswordField = styled(MyPasswordField)`
    margin-bottom: 14px;
`;

export const SubmitButton = styled(MyButton)(({ theme }) => ({
    width: '45%',
    height: '47px',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8em',
    },
}));

export const Divider = styled(MuiDivider)`
    margin-top: 30px;
    margin-bottom: 35px;
`;

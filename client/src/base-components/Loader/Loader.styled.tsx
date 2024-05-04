import { Theme, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    CircularProgress as CircularLoader,
    LinearProgress as LinearLoader,
    Typography as MuiTypography,
} from '@mui/material';

import type { MuiColor } from '@/types';

export const LoaderWrapper = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }: { color: MuiColor; theme: Theme }) => ({
    ...(color ? { color } : { color: '#1976d2' }),
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '40px',
    padding: '40px',
    borderRadius: '15px',

    // @ts-ignore
    [theme.breakpoints.down('xxl')]: {
        width: '35%',
    },

    [theme.breakpoints.down('md')]: {
        width: '45%',
        padding: '30px',
    },

    [theme.breakpoints.down('sm')]: {
        width: '65%',
        padding: '20px',
    },
}));

export const CircularLoaderAnimation = styled(CircularLoader)`
    margin: auto;
`;

export const LinearLoaderAnimation = styled(LinearLoader)`
    width: 100%;
    height: 10px;
    border-radius: 5px;
`;

export const LoaderTitle = styled(MuiTypography)(
    ({ theme }: { theme: Theme }) => ({
        minHeight: '60px',
        color: 'inherit',
        fontSize: '2.5em',
        fontWeight: 'bold',

        [theme.breakpoints.down('md')]: {
            fontSize: '2em',
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em',
        },

        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em',
        },
    })
);

import { createTheme, css } from '@mui/material';

export const MAIN_COLORS = {
    primary: '#F1AB61',
    primaryLight: '#ffdda6a6',
    secondary: '#b1a195',
    bgColor: 'white',
    bgAltColor: '#f2f2f2',
    error: '#d32f2f',
    textSecondary: '#735A47',
    textSecondaryLight: '#FEE9C5',
    male: '#2986cc',
    female: '#c90076',
    safe: '#388e3c',
    feature: '#f09298',
} as const;

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 350,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1350,
            // @ts-expect-error - mui breakpoints types error, will be fixed later
            xxl: 1800,
        },
    },
    palette: {
        primary: { main: MAIN_COLORS.primary },
        secondary: { main: MAIN_COLORS.secondary },
    },
});

export const mainScrollbarStyles = css`
    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #dddddd;
        border-radius: 15px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #a7a7a7;
    }
`;

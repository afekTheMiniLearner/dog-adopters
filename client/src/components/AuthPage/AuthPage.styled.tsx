import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
    Typography as MuiTypography,
} from '@mui/material';

import { Loader as MyLoader } from '@/base-components';
import { IMAGES_SRC } from '@/utils';

export const PageContainer = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
`;

export const WebsiteDescriptionContainer = styled(MuiBox)`
    width: 73%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const WebsiteDescription = styled(MuiTypography)`
    white-space: pre-line;
    font-size: 1.35rem;
    line-height: 1.4em;
    font-weight: 600;
    color: #735a47;
`;

export const SideContentWrapper = styled(MuiBox)`
    height: 100%;
    flex: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    background-color: #ffdda6a6;
`;

export const FormContentWrapper = styled(MuiBox)`
    height: 100%;
    flex: 16;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = MyLoader;

export const AppLogo = styled('img')(({ theme }) => ({
    width: '112px',
    height: '63px',
    transition: 'transform 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.07)',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '56px',
    },
}));

export const AdoptionImage = styled(MuiBox)(() => ({
    width: '68%',
    height: '68%',
    background: `url(${IMAGES_SRC.ADOPTION_IMAGE_1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));
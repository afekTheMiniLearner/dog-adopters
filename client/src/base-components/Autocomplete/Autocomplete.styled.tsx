import { styled } from '@mui/material/styles';
import { Autocomplete as MyAutocomplete } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const MuiAutocomplete = styled(MyAutocomplete)`
    & .MuiOutlinedInput-notchedOutline {
        border-radius: 17px;
    }
`;

import React from 'react';

import { LoginButton, RegisterButton, AppBar } from './NavBar.styled';

export default function NavBar({ children, ...props }) {
    const handleSubmit = () => {};

    return (
        <AppBar sx={{ backgroundColor: 'white' }} {...props}>
            <LoginButton
                label="Log-In"
                fullWidth
                onClick={() => handleSubmit()}
            />
            <RegisterButton
                label="Register"
                fullWidth
                onClick={() => handleSubmit()}
            />
            {children}
        </AppBar>
    );
}

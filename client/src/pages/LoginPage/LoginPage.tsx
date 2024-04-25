import type { ReactNode } from 'react';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

import type { MuiColor, User } from '@/types';
import { AuthProxy } from '@/proxies';
import { initUserAction } from '@/store';
import {
    APP_PATHS,
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    PAGES_ALERT_RESPONSES,
} from '@/utils';
import {
    Alert,
    Loader,
    LoginForm,
    PageContainer,
    Snackbar,
} from './LoginPage.styled';

interface LoginPageProps {
    onLogin: (userData: User) => void;
}

function LoginPage({ onLogin }: LoginPageProps): ReactNode {
    const [responseState, setResponseState] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const navigate: NavigateFunction = useNavigate();
    const navigateToHomePage = (): void => {
        setTimeout(
            () => navigate(APP_PATHS.DOGS_DATA),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };

    const handleSubmit = async (data: User, onSuccess: () => void) => {
        await AuthProxy.loginUser({ userData: data })
            .then((userDataResponse: User) => {
                setResponseState({
                    isSuccess: true,
                    // @ts-ignore
                    message: PAGES_ALERT_RESPONSES.USER_PAGE.LOGIN.success,
                });
                onSuccess();

                onLogin(userDataResponse);
            })
            .then(() => {
                setIsRedirecting(true);
                navigateToHomePage();
            })
            .catch((e) => {
                setResponseState({
                    isSuccess: false,
                    // @ts-ignore
                    message: PAGES_ALERT_RESPONSES.USER_PAGE.LOGIN.failure,
                });
                data.password = '';
                console.error(e);
            });
    };

    const alert = useMemo(() => {
        if (responseState?.isSuccess === undefined) return null;

        const severity: MuiColor = responseState.isSuccess
            ? 'success'
            : 'error';
        return (
            <Alert severity={severity} variant="filled">
                {responseState?.message}
            </Alert>
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return (
        <PageContainer>
            {isRedirecting ? (
                <Loader
                    BgColor="#ffffffeb"
                    title={COMPONENTS_CONTENT.LOADER.LOGIN_SUCCESS}
                />
            ) : (
                <LoginForm onSubmit={handleSubmit} />
            )}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={() => setResponseState(null)}
                open={responseState !== null}
            >
                {alert}
            </Snackbar>
        </PageContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onLogin: (user: User) => {
        dispatch(initUserAction({ user }));
    },
});

export default connect(null, mapDispatchToProps)(LoginPage);
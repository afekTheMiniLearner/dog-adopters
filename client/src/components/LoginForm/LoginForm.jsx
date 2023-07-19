/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { userSchema } from '@validations';
import { AuthProxy } from '@proxies';
import { removeSpacesFromObjectValues } from '@utils';
import {
    Button,
    PasswordField,
    TextField,
    Paper,
    Title,
    Text,
    Link,
} from './LoginForm.styled';

const LoginForm = (props) => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;

    return (
        <Paper variant="elevation" elevation={7}>
            <Title>Sign In</Title>
            <TextField
                error={errors.username && touched.username}
                helperText={touched.username ? errors.username : ''}
                label="Username"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.username}
            />
            <PasswordField
                error={errors.password && touched.password}
                helperText={touched.password ? errors.password : ''}
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
            />
            <Text>
                {"Don't have an account yet ? "}
                <Link href="/register" underline="hover">
                    click here
                </Link>
            </Text>
            <Button
                label="Login"
                sx={{ padding: '0.7em' }}
                fullWidth
                onClick={() => handleSubmit()}
            />
        </Paper>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        username: '',
        password: '',
    }),
    validationSchema: userSchema,

    handleSubmit: async (values, { props, resetForm }) => {
        const { username, password } = values;
        const loginData = removeSpacesFromObjectValues({ username, password });

        console.log(loginData);

        await AuthProxy.loginUser(loginData)
            .then(() => props.setResponseState?.(1))
            .then(() => {
                props.onSubmit?.(loginData);
                resetForm();
            })
            .catch((e) => {
                props.onSubmit?.(null);
                props.setResponseState?.(-1);
                loginData.password = '';
                console.error(e);
            });
    },

    displayName: 'LoginForm',
})(LoginForm);

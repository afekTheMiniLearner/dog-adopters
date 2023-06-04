import React, { useState } from 'react';

import {
  Button,
  PasswordField,
  TextField,
  Paper,
  Title,
  Text,
  Link,
  Alert,
  Snackbar,
  PageContainer,
} from './Login.styled';

export default function Login() {
  // Will change that to Formik usage later
  const [invalidLogin, setInvalidLogin] = useState(false);
  // If you want to see the Snackbar alert for visual check, change to true.
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <PageContainer>
      <Paper variant="elevation" elevation={7}>
        <Title>Sign In</Title>
        <TextField label="Username" required />
        <PasswordField label="Password" />
        <Text>
          {"Don't have an account yet ? "}
          <Link href="http://localhost:3030/register" underline="hover">
            click here
          </Link>
        </Text>
        <Button label="Login" sx={{ padding: '0.7em' }} fullWidth />
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => {
          setIsSubmitted(false);
          setInvalidLogin(false);
        }}
        open={isSubmitted}
      >
        {invalidLogin ? (
          <Alert severity="error">Invalid username or password</Alert>
        ) : (
          <Alert severity="success">
            Logged in successfully, you are being redirected...
          </Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}

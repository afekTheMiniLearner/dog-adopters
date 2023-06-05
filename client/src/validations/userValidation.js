import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const userSchema = yup.object().shape({
  username: yup.string().min(5).max(20).required('Please enter username'),
  password: yup.string().min(5).max(20).required('Please enter password'),
  fullName: yup.string().min(5).max(20),
  phoneNumber: yup.string().min(5).max(20),
});

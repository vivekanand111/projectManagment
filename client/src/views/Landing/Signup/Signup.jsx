import React, { useState } from 'react';
import FormInput from '../../../shared/components/Form/IconInput/IconInput';
import CheckBox from '../../../shared/components/Form/CheckBox/CheckBox';
import FormButton from '../../../shared/components/Form/FormButton/FormButton';
import { Margin } from '../../../shared/utils/global';
import {
  FormTitle,
  GrayText,
  LoginContainer,
  FormSmallText,
  LinkText,
} from './Signup.style';
import { register } from '../../../redux/auth/auth.actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorMessage from '../../../shared/components/ErrorMessage/ErrorMessage';
import { Redirect } from 'react-router-dom';
import { SubmitButton } from '../Landing.style'

const SignupForm = ({ register, isAuthenticated, errorMessage }) => {
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Admin'
  });

  const { name, email, password, confirmPassword, role } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      register({ name, email, password, role });
    }
  }

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  if (isAuthenticated) {
    return <Redirect to="/app/dashboard" />;
  }

  return (
    <LoginContainer>
      <FormTitle>
        Sign up <GrayText>for your account</GrayText>
      </FormTitle>
      {errorMessage ?
        <Margin bottom={40} >
          <ErrorMessage errorMessage={errorMessage} />
        </Margin> : ''}
      <form onSubmit={handleSubmit}>
        <Margin bottom={40} >
          <FormInput
            type='text'
            name='name'
            label='Name'
            iconType="user"
            value={name}
            handleChange={handleChange}
            required
          />
        </Margin>
        <Margin bottom={40} >
          <FormInput
            type='email'
            name='email'
            label='Email'
            iconType="envelope-open"
            value={email}
            handleChange={handleChange}
            required
          />
        </Margin>
        <Margin bottom={40} >
          <FormInput
            type='password'
            name='password'
            label='Password'
            iconType="lock"
            value={password}
            handleChange={handleChange}
            required
          />
        </Margin>
        <Margin bottom={40} >
          <FormInput
            type='password'
            name='confirmPassword'
            label='Confirm password'
            iconType="lock"
            value={confirmPassword}
            handleChange={handleChange}
            required
          />
        </Margin>
        <Margin bottom={40} >
          <CheckBox
            name='checkbox'
            type='checkbox'
          />
        </Margin>
        <Margin bottom={30} >
          <SubmitButton name='button' type='submit' value='Sign up now' />
        </Margin>
        <FormSmallText>Try right now ? <LinkText to="/">Use guest login</LinkText></FormSmallText>
      </form>
    </LoginContainer>
  );
};

SignupForm.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps, { register })(SignupForm);

import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
  main: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1526277952-75f4fd942470?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80")',
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center'

  },
  avatar: {
    // height: 80,
  },
  icon: {
    // display: 'none',
    background: 'url(https://st4.depositphotos.com/3277955/39107/v/950/depositphotos_391075196-stock-illustration-portrait-young-asian-man-wearing.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  paper: {
    border: "blue",
    borderWidth: 2
  }
});

const CustomLoginForm = withStyles({
  button: { background: '#F15922' },
})(LoginForm);

const CustomLoginPage = props => (
  <Login
    loginForm={<CustomLoginForm />}
    {...props}
  />
);

export default withStyles(styles)(CustomLoginPage);
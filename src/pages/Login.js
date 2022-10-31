import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import submitEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validationEmail();
  };

  validationEmail = () => {
    const six = 6;
    const regex = /\S+@\S+\.\S+/;
    const { email, password } = this.state;
    const emailRegex = regex.test(email);
    return !(emailRegex && password.length >= six);
  };

  clickButton = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(submitEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          type="tex"
          data-testid="email-input"
          placeholder="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="senha"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ this.validationEmail() }
          onClick={ this.clickButton }
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);

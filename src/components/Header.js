import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../imgs/Logo.png';
import { DivHeader, Expenditure, Profile } from '../styles/headerStyle';
import profile from '../imgs/Vector.png';
import coins from '../imgs/coins.png';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const sumExpenses = expenses.reduce((acc, cur) => {
      console.log(cur.exchangeRates[cur.currency].ask);
      const newValue = Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask);
      return acc + newValue;
    }, 0);
    return (
      <DivHeader>
        <img src={ Logo } alt="Logo TrybeWallet" />
        <Expenditure>
          <img src={ coins } alt="Moedas" />
          <p data-testid="total-field">
            Total de Despesas:
            {' '}
            {sumExpenses.toFixed(2)}
            {' '}
            BRL
          </p>
        </Expenditure>
        <Profile>
          <img src={ profile } alt="profile" />
          <p data-testid="email-field">{email}</p>
        </Profile>

      </DivHeader>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const sumExpenses = expenses.reduce((acc, cur) => {
      const rates = Object.entries(cur.exchangeRates);
      const currency = rates.find((e) => e[0] === cur.currency)[1];
      const convertValue = cur.value * currency.ask;
      return acc + convertValue;
    }, 0);
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">0</p>
        <p data-testid="total-field">{parseFloat(sumExpenses).toFixed(2)}</p>
        <select data-testid="header-currency-field">
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>

        </select>
      </div>
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

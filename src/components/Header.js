import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const sumExpenses = expenses.reduce((acc, cur) => {
      console.log(cur.exchangeRates[cur.currency].ask);
      const newValue = Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask);
      return acc + newValue;
    }, 0);
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{sumExpenses.toFixed(2)}</p>
        <select data-testid="header-currency-field">
          <option value="BRL">BRL</option>

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

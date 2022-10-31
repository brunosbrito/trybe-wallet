import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch, currencies } = this.props;
    dispatch(fetchApi());
    console.log(currencies);
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <input data-testid="value-input" type="text" placeholder="valor" />
        <input data-testid="description-input" type="text" placeholder="despesa" />
        <select data-testid="currency-input">
          {currencies.map((coin) => (
            <option key={ coin } data-testid={ coin }>{ coin }</option>
          ))}
        </select>
        <select data-testid="method-input">
          <option value="dinehiro">Dinheiro</option>
          <option value="cartão-credito">Cartão de crédito</option>
          <option value="cartao-debito">Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,

};
export default connect(mapStateToProps)(WalletForm);

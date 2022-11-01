import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, addExpenses } from '../redux/actions';
import economyApi from '../Service/api';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: '',
    method: '',
    tag: '',
    id: 0,
  };

  componentDidMount() {
    const { currencyApi } = this.props;
    currencyApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  testeButton = async () => {
    const { addExpenseProp } = this.props;
    const api = await economyApi();
    console.log('teste');
    this.setState({
      exchangeRates: api,
    }, () => {
      addExpenseProp(this.state);
      this.setState((prev) => ({
        id: prev.id + 1,
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      }));
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <input
          name="value"
          value={ value }
          data-testid="value-input"
          type="number"
          placeholder="valor"
          onChange={ this.handleChange }
        />
        <input
          name="description"
          value={ description }
          data-testid="description-input"
          type="text"
          placeholder="despesa"
          onChange={ this.handleChange }
        />
        <select
          name="currency"
          value={ currency }
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {currencies.map((coin) => (
            <option key={ coin } data-testid={ coin }>{ coin }</option>
          ))}
        </select>
        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="dinehiro">Dinheiro</option>
          <option value="cartão-credito">Cartão de crédito</option>
          <option value="cartao-debito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ () => {
            this.testeButton();
          } }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseProp: (expense) => dispatch(addExpenses(expense)),
  currencyApi: () => dispatch(fetchApi()),
});

WalletForm.propTypes = {
  addExpenseProp: PropTypes.func.isRequired,
  currencyApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,

};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

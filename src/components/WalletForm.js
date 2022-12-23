import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, addExpenses } from '../redux/actions';
import economyApi from '../Service/api';
import { Div } from '../styles/walletFormStyle';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
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

  handleButton = async () => {
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
      }));
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <Div>
        <label htmlFor="description">
          Descrição da despesa:
          <input
            name="description"
            value={ description }
            data-testid="description-input"
            type="text"
            placeholder="despesa"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="tag">
          Categoria da despesa:
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
        </label>

        <label htmlFor="value">
          Valor:
          <input
            name="value"
            value={ value }
            data-testid="value-input"
            type="number"
            placeholder="valor"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="method">
          Metodo de pagamento:
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="currency">
          Moeda:
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
        </label>
        <button
          type="button"
          onClick={ () => {
            this.handleButton();
          } }
        >
          Adicionar despesa

        </button>
      </Div>
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

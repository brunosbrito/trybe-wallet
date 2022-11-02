import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tbody>
          {expenses.map((e, index) => (
            <tr key={ index }>
              <td>
                {e.description}
              </td>
              <td>
                {e.tag}
              </td>
              <td>
                {e.method}
              </td>
              <td>
                {Number(e.value).toFixed(2)}
              </td>
              <td>
                {e.exchangeRates[e.currency].name}
              </td>
              <td>
                {Number(e.exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>
                {(e.value * e.exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>
                Real
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Table);

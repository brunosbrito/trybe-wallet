import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../redux/actions';
import { Div } from '../styles/tableStyle';

class Table extends Component {
  deleteExpenses = (e) => {
    const { dispatch } = this.props;
    dispatch(deleteExpenses(e));
  };

  render() {
    const { expenses } = this.props;
    return (
      <Div expenses={ expenses }>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((e) => (
              <tr key={ e.id }>
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
                <td>
                  <button
                    type="submit"
                    data-testid="delete-btn"
                    onClick={ () => this.deleteExpenses(e.id) }
                  >
                    Excluir
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Div>
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
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);

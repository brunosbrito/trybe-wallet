// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RESPONSE_API_SUCESS':
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((element) => element !== 'USDT'),
    };
  case 'ADD_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case 'DELETE_EXPENSES':
    return {
      ...state,
      expenses: state.expenses.filter((obj) => obj.id !== action.id),

    };
  default:
    return state;
  }
};

export default wallet;

// Coloque aqui suas actions
import economyApi from '../../Service/api';

export const submitEmail = (email) => ({
  type: 'USE_EMAIL',
  payload: email,
});

export const addExpenses = (expense) => ({
  type: 'ADD_EXPENSES',
  expense,
});

export const responseApiSucess = (currencies) => ({
  type: 'RESPONSE_API_SUCESS',
  payload: currencies,
});

export const deleteExpenses = (e) => ({
  type: 'DELETE_EXPENSES',
  id: e,
});

// thunk
export function fetchApi() {
  return async (dispatch) => {
    const response = await economyApi();
    dispatch(responseApiSucess(response));
  };
}

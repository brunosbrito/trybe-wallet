// Coloque aqui suas actions
import economyApi from '../../Service/api';

export const submitEmail = (email) => ({
  type: 'USE_EMAIL',
  payload: email,
});

export const responseApiSucess = (currencies) => ({
  type: 'RESPONSE_API_SUCESS',
  payload: currencies,
});
// thunk
export function fetchApi() {
  return async (dispatch) => {
    const response = await economyApi();
    dispatch(responseApiSucess(response));
  };
}

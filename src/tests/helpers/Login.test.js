import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe(' Testa a pagina de login', () => {
  test('Verifica se tem o campo email', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('textbox');
    expect(email).toBeInTheDocument();
  });
  test('verifica se tem o campo de senha', () => {
    renderWithRouterAndRedux(<App />);
    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();
  });
  test('testa se te ao clicar no botão entrar ele vai para pagina da carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('textbox');
    const password = screen.getByTestId('password-input');
    const btnLogin = screen.getByRole('button', {
      name: /entrar/i,
    });

    userEvent.type(email, 'email@teste.com');
    userEvent.type(password, '123456');

    expect(btnLogin).toBeEnabled();
    userEvent.click(btnLogin);
    expect(history.location.pathname).toBe('/carteira');
  });
});

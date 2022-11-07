import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../../pages/Wallet';
import { renderWithRedux } from './renderWith';

const mail = 'test@email.com';
describe('testa a pagina wallet', () => {
  test('Verifica estado inicial de Header', () => {
    const INITIAL_STATE = { user: { email: mail } };
    renderWithRedux(<Wallet />, { initialState: INITIAL_STATE });
    const user = screen.getByTestId('email-field');
    expect(user).toHaveTextContent(mail);
    const total = screen.getByTestId('total-field');
    expect(total).toHaveTextContent('0');
    const headerCurrency = screen.getByTestId('header-currency-field');
    expect(headerCurrency).toHaveTextContent('BRL');
  });
  it('Verifica se botão `Adicionar despesa` está funcionando', async () => {
    renderWithRedux(<Wallet />);

    const addBtn = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(addBtn);

    expect(await screen.findByRole('button', { name: /excluir/i })).toBeInTheDocument();
  });
});

import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import Div from '../styles/walletStyle';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Div>
          <Header />
          <WalletForm />
        </Div>
        <Table />
      </div>
    );
  }
}

export default Wallet;

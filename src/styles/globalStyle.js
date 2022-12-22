import { createGlobalStyle } from 'styled-components';
import backGround from '../imgs/background.png';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-image: url(${backGround});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-color: #44d898;
  background-size: cover;
}`;

export default GlobalStyle;

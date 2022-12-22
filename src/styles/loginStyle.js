import styled from 'styled-components';

export const Div = styled.div`
  background-color: white;
  width: 525px;
  height: 356px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow : -4px 9px 13px rgba ( 3 , 107 , 82 , 0,3 ) ;
  margin: 200px auto;
`;

export const Logo = styled.img`
  width: 268.6px;
  height: 56.14px;
  margin-bottom: 20px;

`;

export const Input = styled.input`
  width: 330px;
  height: 40px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #003BE5;
  border-radius: 5px;
  margin-top: 10px;

  ::placeholder {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #003BE5;
    padding-left: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;;
  width: 330px;
  height: 40px;
  background-color: #003BE5;
  border: 1px solid #003BE5;
  border-radius: 5px;
  margin-top: 10px;
  color: white
`;

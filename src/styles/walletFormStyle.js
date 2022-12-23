import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px auto;
  width: 1037px;
  height: 134px;
  left: 121px;
  top: 156px;
  background-color: rgba(225, 229, 235, 0.49);

  label {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #003BE5;
    margin-top: 20px;
  }
  input {
    margin-left: 10px;
    width: 288.86px;
    height: 30px;
    border: 1px solid #003BE5;
    border-radius: 5px;
  }

  /* input[type='number'] {
    width: 270px;
  }
     */
  select {
    margin-left: 10px;
    height: 30px;
    border: 1px solid #003BE5;
    border-radius: 5px;
  }

  button {
    box-sizing: border-box;
    width: 330px;
    height: 40px;
    background: #2FC18C;
    border: 1px solid #2FC18C;
    border-radius: 5px;
    margin: 50px auto;
  }
`;

export const Tes = styled.p`
`;

import styled from 'styled-components';

const FOR = 4;

export const Div = styled.div`
  width: 1155px;
  height: 600px;
  margin: -250px auto;
  background-color: #003BE5;
  box-shadow: -4px 9px 13px rgba(3, 107, 82, 0.3);
  border-radius: 10px;
  ${({ expenses }) => ((expenses.length > FOR) && `
  overflow-y: scroll;
  `)
}


  table {
    padding-top: 300px;
    margin: 0 auto;
    width: 1040px;
    margin-bottom: 40px;
    
  }

  th {
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid white;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 13px;
    color: #FFFFFF;
  }

  td {
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #2FC18C;
    color: #2FC18C;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 13px;
  }

  button {
    background: #2FC18C;
    border: 1px solid #2FC18C;
    border-radius: 5px;
    width: 70px;
    height: 25px
  }
`;

export const Tr = styled.tbody`
`;

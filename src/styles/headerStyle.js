import styled from 'styled-components';

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 70px ;
`;

export const Expenditure = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #003BE5;
    margin-left: 5px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-right: 5px;
  }

  p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #2FC18C;
  }
 `;

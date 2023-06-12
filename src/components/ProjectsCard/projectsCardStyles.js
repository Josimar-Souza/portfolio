import styled from 'styled-components';
import { Button } from 'antd';

export const CardContainer = styled.div`
  align-items: center;
  background-color: #5C469C;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 0;
  min-height: 250px;
  padding: 5px;
  width: 18%;

  @media only screen and (max-width: 512px) {
    width: 60%;
  }
`;

export const CardImageContainer = styled.div`
  border-radius: 15px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.3);
  height: 120px;
  width: 80%;
`;

export const CardImage = styled.img`
  border-radius: 15px;
  height: 100%;
  width: 100%;
`;

export const CardTitle = styled.h1`
  color: #D4ADFC;
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
`;

export const CardDescription = styled.p`
  color: #D4ADFC;
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
`;

export const CardButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-height: 45px;
  margin: 10px 0;
  width: 100%;
`;

export const CustomButon = styled(Button)`
  background-color: #1D267D;
  border: none;
  color: #D4ADFC;
`;

import styled from 'styled-components';
import { Divider } from 'antd';

export const AboutMeContainer = styled.div`
  align-items: center;
  background-color: #1D267D;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 18px;
  width: 80%;

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const AboutMeParagraph = styled.p`
  color: #D4ADFC;
  text-align: center;
  font-size: 16px;
  line-height: 25px;
  width: 80%;

  @media only screen and (max-width: 512px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const AboutMeTitle = styled.h1`
  color: #D4ADFC;
  text-decoration: underline;

  @media only screen and (max-width: 512px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

export const AboutMeSection = styled.h2`
  color: #D4ADFC;

  @media only screen and (max-width: 512px) {
    margin-bottom: 20px;
  }
`;

export const CustomDivider = styled(Divider)`
  background-color: rgba(255, 255, 255, 0.2);
`;

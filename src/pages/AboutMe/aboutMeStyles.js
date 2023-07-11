import styled from 'styled-components';
import { Divider } from 'antd';

export const AboutMeContainer = styled.div`
  align-items: center;
  background-color: #FAF0D7;
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
  color: black;
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
  color: black;
  text-decoration: underline;

  @media only screen and (max-width: 512px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

export const AboutMeSection = styled.h2`
  color: black;

  @media only screen and (max-width: 512px) {
    margin-bottom: 20px;
  }
`;

export const CustomDivider = styled(Divider)`
  background-color: rgba(255, 255, 255, 0.2);
`;

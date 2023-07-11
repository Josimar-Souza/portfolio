import styled from 'styled-components';

export const TecnologiesPageContainer = styled.div`
  background-color: #FAF0D7;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 80%;

  @media only screen and (max-width: 512px) {
    align-items: center;
    width: 100%;
  }
`;

export const TecnologiesImage = styled.img`
  height: 100vh;
  width: 80%;

  @media only screen and (max-width: 512px) {
    height: 50vh;
    width: 100%;
  }
`;

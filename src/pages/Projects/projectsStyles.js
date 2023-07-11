import styled from 'styled-components';

export const ProjectsPageContainer = styled.div`
  align-items: center;
  background-color: #FAF0D7;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 18px;
  width: 80%;

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3rem;
  width: 100%;

  @media only screen and (max-width: 512px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ProjectsPageTitle = styled.h1`
  color: black;

  @media only screen and (max-width: 512px) {
    font-size: 5vw;
    margin-top: 30px;
  }
`;

import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  DasBoardContainer,
  DashBoardAside,
  ProfileImage,
  CustomButton,
  ButtonsContainer,
  ContactContainer,
  CustomLinkedinIcon,
  CustomGitHubIcon,
} from './dashBoardStyles';
import ProfilePic from '../../images/ProfilePic.jpeg';

function DashBoard() {
  return (
    <DasBoardContainer>
      <DashBoardAside>
        <ProfileImage src={ProfilePic} />
        <ButtonsContainer>
          <CustomButton>Sobre min</CustomButton>
          <CustomButton>Projetos principais</CustomButton>
          <CustomButton>Principais tecnologias</CustomButton>
        </ButtonsContainer>
        <ContactContainer>
          <CustomLinkedinIcon />
          <CustomGitHubIcon />
        </ContactContainer>
      </DashBoardAside>
      <Outlet />
    </DasBoardContainer>
  );
}

export default DashBoard;

import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  DasBoardContainer,
  DashBoardAside,
  ProfileImage,
  CustomButton,
  ButtonsContainer,
  ContactContainer,
  CustomLinkedinIcon,
  CustomGitHubIcon,
  InfoContainer,
  Info,
  CustomMailIcon,
  MobileSideToggle,
  SideToggleBars,
} from './dashBoardStyles';
import ProfilePic from '../../images/ProfilePic.jpeg';

function DashBoard() {
  const navigate = useNavigate();
  const [sideInfo, setSideInfo] = useState({
    animation: false,
    animationDirection: 'reverse',
  });

  const onSideToggleClicked = () => {
    if (sideInfo.animationDirection === 'reverse') {
      setSideInfo({ ...setSideInfo, animationDirection: 'normal', animation: true });
    } else {
      setSideInfo({ ...setSideInfo, animationDirection: 'reverse', animation: true });
    }
  };

  const onLinkButtonClicked = (link) => {
    navigate(`/${link}`);
    onSideToggleClicked();
  };

  // This image needs to change before publishing,
  // its recomend to have an even resolution like 512x512
  return (
    <DasBoardContainer>
      <DashBoardAside
        animation={sideInfo.animation}
        animationDirection={sideInfo.animationDirection}
      >
        {isMobile
          ? (
            <MobileSideToggle onClick={onSideToggleClicked}>
              <SideToggleBars />
              <SideToggleBars />
              <SideToggleBars />
            </MobileSideToggle>
          )
          : null}
        <ProfileImage src={ProfilePic} />
        <InfoContainer>
          <Info fontSize="26px">Josimar Souza Brito</Info>
          <Info fontSize="14px">
            <CustomMailIcon />
            contact.josimarsouza@gmail.com
          </Info>
        </InfoContainer>
        <ButtonsContainer>
          <CustomButton
            onClick={() => onLinkButtonClicked('about-me')}
          >
            Sobre min
          </CustomButton>
          <CustomButton
            onClick={() => onLinkButtonClicked('projects')}
          >
            Projetos principais
          </CustomButton>
          <CustomButton
            onClick={() => onLinkButtonClicked('tecnologies')}
          >
            Principais tecnologias
          </CustomButton>
        </ButtonsContainer>
        <ContactContainer>
          <a rel="noreferrer" href="https://www.linkedin.com/in/josimar-souza-brito/" target="_blank">
            <CustomLinkedinIcon />
          </a>
          <a rel="noreferrer" href="https://github.com/Josimar-Souza" target="_blank">
            <CustomGitHubIcon />
          </a>
        </ContactContainer>
      </DashBoardAside>
      <Outlet />
    </DasBoardContainer>
  );
}

export default DashBoard;

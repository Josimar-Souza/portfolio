import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const getScreenWidth = () => ((80 * window.innerWidth) / 100);

const dashBoardEnterAnimation = keyframes`
  from { left: -${getScreenWidth() + 2}px; }
  to { left: 0; }
`;

const dashBoardExitAnimation = keyframes`
  from { left: 0; }
  to { left: -${getScreenWidth() + 2}px; }
`;

const getAnimation = ({ animation, animationDirection }) => {
  if (animation && animationDirection === 'normal') {
    return dashBoardEnterAnimation;
  }

  if (animation && animationDirection === 'reverse') {
    return dashBoardExitAnimation;
  }

  return '';
};

export const DasBoardContainer = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const DashBoardAside = styled.aside`
  align-items: center;
  background-color: #FFD9C0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 25%;
  z-index: 2;

  @media only screen and (max-width: 512px) {
    position: fixed;
    height: 100vh;
    left: -${getScreenWidth() + 2}px;;
    width: 80%;

    animation-name: ${getAnimation};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 30%;
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 35px;
  width: 100%;
`;

export const CustomButton = styled(Button)`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 10px;
  color: black;
  font-size: 14px;
  height: fit-content;
  text-align: center;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};

  @media only screen and (max-width: 512px) {
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;

export const ContactContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 150px;
  width: 100%;
`;

export const CustomLinkedinIcon = styled(LinkedinOutlined)`
  color: #1866C2;
  font-size: 2rem;
  margin: 0 10px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }
`;

export const CustomGitHubIcon = styled(GithubOutlined)`
  color: black;
  font-size: 2rem;
  margin: 0 10px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 50px;
  width: 100%;
`;

export const Info = styled.p`
  color: black;
  font-size: ${({ fontSize }) => fontSize};
  margin: 10px 0;
`;

export const CustomMailIcon = styled(MailOutlined)`
  margin-right: 12px;
`;

export const MobileSideToggle = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
  position: absolute;
  right: -35px;
  top: 10px;
  width: 20px;
`;

export const SideToggleBars = styled.div`
  background-color: white;
  border-radius: 15px;
  height: 2px;
  width: 100%;
`;

export const RootContainer = styled.div`
  align-items: center;
  background-color: #FAF0D7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 80%;

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const RootTitle = styled.h1`
  color: black;
  margin-bottom: 30px;

  @media only screen and (max-width: 512px) {
    font-size: 20px;
  }
`;

export const RootButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 512px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const RootInfo = styled.p`
  color: black;
  margin-bottom: 50px;
`;

import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const dashBoardEnterAnimation = keyframes`
  from { left: -320px; }
  to { left: 0; }
`;

const dashBoardExitAnimation = keyframes`
  from { left: 0; }
  to { left: -320px; }
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
  background-color: #0C134F;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 25%;
  z-index: 2;

  @media only screen and (max-width: 512px) {
    position: fixed;
    height: 100vh;
    left: -320px;
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
  border-bottom: 1px solid white;
  border-radius: 10px;
  color: #D4ADFC;
  font-size: 14px;
  height: fit-content;
  text-align: center;
  margin: 10px 0;
  width: 80%;
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
  color: white;
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
  color: #D4ADFC;
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

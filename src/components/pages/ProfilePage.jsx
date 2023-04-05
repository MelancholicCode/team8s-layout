import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import avatarImg from "../../img/avatar.jpg";
import chatIcon from "../../img/icons/chat.svg";
import userIcon from "../../img/icons/user.svg";
import starIcon from "../../img/icons/star.svg";
import markerIcon from "../../img/icons/marker.svg";
import cakeIcon from "../../img/icons/cake.svg";
import mailIcon from "../../img/icons/mail.svg";
import githubIcon from "../../img/icons/github.svg";
import behanceIcon from "../../img/icons/behance.svg";
import telegramIcon from "../../img/icons/telegram.svg";
import linkedinIcon from "../../img/icons/linkedin.svg";
import crownImg from "../../img/crown.png";

const StyledPage = styled.div`
`;

const Icon = styled.div`
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
background: url(${props => props.src}) center center no-repeat;
`;

const ProfileSection = styled.div`
display: flex;
flex-direction: column;
width: ${props => props.width || 'auto'};
min-height: 600px;
height: 100%;
background-color: #1A1C22;
border-radius: 15px;
padding: ${props => props.padding || '0'}
`;

const UserInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
`;

const AvatarWrapper = styled.div`
position: relative;
`;

const AvatarImg = styled.img.attrs({
  src: avatarImg
})`
display: block;
border-radius: 50%;
width: 100px;
height: 100px;
`;

const Crown = styled.div`
z-index: 1;
position: absolute;
top: -23px;
right: -5px;
width: 42px;
height: 42px;
background: url(${crownImg}) center center no-repeat;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const UserName = styled.p`
font-weight: 500;
font-size: 20px;
`;

const UserLogin = styled.p`
font-weight: 300;
font-size: 14px;
color: #C1C1C4;
`;

const MessageBtn = styled.div`
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
width: 100%;
background: transparent;
padding: 10px 0;
border: 2px solid #46A11B;
border-radius: 10px;
`;

const InfoList = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
gap: 9px;
`;

const InfoListItem = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

const SocialList = styled.ul`
margin-top: auto;
display: flex;
justify-content: center;
gap: 24px;
`;

const ProfilePage = () => {
  const isLeader = true;

  const infoListArr = [
    {icon: userIcon, infoEl: <p>Front-end Developer</p>},
    {icon: starIcon, infoEl: <p>3-5 years of experience</p>},
    {icon: markerIcon, infoEl: <p>Ukraine</p>},
    {icon: cakeIcon, infoEl: <p>25 years old</p>},
    {icon: mailIcon, infoEl: <a href='mailto:nikita888@gmail.com'>nikita888@gmail.com</a>}
  ];

  const socialArr = [
    {icon: githubIcon, link: '#'},
    {icon: behanceIcon, link: '#'},
    {icon: telegramIcon, link: '#'},
    {icon: linkedinIcon, link: '#'}
  ];
  return (
    <StyledPage>
      <Container maxWidth="800px" display="flex" gap="30px">
        <ProfileSection width="270px" padding="36px 24px 24px">
          <UserInfo>            
            <AvatarWrapper>
              {isLeader && <Crown/>}
              <AvatarImg/>
            </AvatarWrapper>
            <NameWrapper>
              <UserName>Nikita Maksimov</UserName>
              <UserLogin>@StacyRivieraX</UserLogin>
            </NameWrapper>
            <MessageBtn>
              <p>Message</p>
              <Icon src={chatIcon} width="20px" height="20px"/>
            </MessageBtn>
          </UserInfo>
          <InfoList>
            {infoListArr.map((item) => (
              <InfoListItem>
                <Icon src={item.icon} width="20px" height="20px"/>
                {item.infoEl}
              </InfoListItem>
            ))}
          </InfoList>
          <SocialList>
            {socialArr.map(social => (
              <li>
                <a href={social.link}>
                  <Icon src={social.icon} width="28px" height="28px"/>
                </a>
              </li>
            ))}
          </SocialList>
        </ProfileSection>
        <ProfileSection width="470px" padding="27px 32px 49px">

        </ProfileSection>
      </Container>
    </StyledPage>
  );
};

export default ProfilePage;
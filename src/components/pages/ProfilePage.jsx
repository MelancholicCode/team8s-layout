import React from 'react';
import styled, {css} from 'styled-components';
import Container from '../UI/Container';
import Icon from '../UI/Icon';
import TagLink from '../UI/TagLink';
import FlexWrapper from '../UI/FlexWrapper';

import crownImg from "../../img/crown.png";
import avatarImg from "../../img/avatar.jpg";

import * as icons from "../../img/icons";

const StyledPage = styled.div`
`;

const Text = styled.p`
font-weight: 300;
font-size: 14px;
line-height: 120%;
`;

const Title = styled.h2`
font-weight: 400;
font-size: 16px;
line-height: 120%;
`;

const ProfileSection = styled.div`
display: flex;
flex-direction: column;
width: ${props => props.width || 'auto'};
min-height: 600px;
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

const InfoList = styled.ul`
margin-top: 32px;
display: flex;
flex-direction: column;
gap: 9px;
`;

const InfoListItem = styled.li`
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

const ResumePartBox = styled.div`
height: 32px;
display: flex;
align-items: center;
gap: 16px;
`;

const ResumePartBtn = styled.div`
position: relative;
cursor: pointer;
color: ${props => props.isActive ? '#5BD424' : '#fff'};
${props => props.isActive && css`
&:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 1px;
  background-color: #5BD424;
  width: 100%;
}
`}
`;

const WrappableList = styled.ul`
display: flex;
gap: 8px;
flex-wrap: wrap;
`;

const FrameWorkItem = styled.li`
padding: 5px 0;
width: 100px;
text-align: center;
border-radius: 5px;
background-color: ${props => props.color || '#2F3239'}
`;

const LanguageItem = styled.li`
padding: 8px;
background-color: #2F3239;
border-radius: 5px;
`;

const ProfilePage = () => {
  const isLeader = true;

  const infoListArr = [
    {icon: icons.user, infoEl: <p>Front-end Developer</p>},
    {icon: icons.star, infoEl: <p>3-5 years of experience</p>},
    {icon: icons.marker, infoEl: <p>Ukraine</p>},
    {icon: icons.cake, infoEl: <p>25 years old</p>},
    {icon: icons.mail, infoEl: <a href='mailto:nikita888@gmail.com'>nikita888@gmail.com</a>}
  ];

  const socialArr = [
    {icon: icons.github, link: '#'},
    {icon: icons.behance, link: '#'},
    {icon: icons.telegram, link: '#'},
    {icon: icons.linkedin, link: '#'}
  ];

  const projectsArr = [
    {text: 'Team8s', link: '#'},
    {text: 'BankingApp', link: '#'},
    {text: 'Snake', link: '#'},
    {text: 'Shopping App', link: '#'},
    {text: 'E-learning', link: '#'}
  ];

  const frameworksArr = [
    {color: '#5A9E54', text: 'Node'},
    {color: '#8D3DF5', text: 'Figma'},
    {color: '#00A4D3', text: 'React'},
    {color: '#E57609', text: 'Spark'},
    {color: '#900E04', text: 'Ruby'},
    {color: '#194838', text: 'Django'}
  ];

  const languageIconsArr = [
    icons.python,
    icons.html,
    icons.csharp,
    icons.js,
    icons.swift,
    icons.dart,
    icons.scala,
    icons.ruby
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
            <FlexWrapper direction="column" align="center" gap="8px">
              <UserName>Nikita Maksimov</UserName>
              <UserLogin>@StacyRivieraX</UserLogin>
            </FlexWrapper>
            <MessageBtn>
              <p>Message</p>
              <Icon src={icons.chat} width="20px" height="20px"/>
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
        <ProfileSection width="470px" padding="24px 32px 49px">
          <FlexWrapper direction="column" gap="24px">
            <ResumePartBox>
              <ResumePartBtn isActive>Projects & Skills</ResumePartBtn>
              <ResumePartBtn>Education & Work</ResumePartBtn>
            </ResumePartBox>
            <FlexWrapper direction="column" gap="16px">
              <FlexWrapper direction="column" gap="8px">
                <Title>About me</Title>
                <Text>Front-end developer with 4 years of experience. Passionate about solving complex problems and building innovative solutions. I have a strong understanding of software development best practices. Collaborative team player with effective communication skills.</Text>
              </FlexWrapper>
              <FlexWrapper gap="16px" align="center">
                <Title>Team</Title>
                <TagLink src={icons.users} to="#">Cool Developers</TagLink>
              </FlexWrapper>
              <FlexWrapper direction="column" gap="8px">
                <Title>Projects</Title>
                <WrappableList>
                  {projectsArr.map(({link, text}) => <li><TagLink to={link} src={icons.extLink}>{text}</TagLink></li>)}
                </WrappableList>
              </FlexWrapper>
              <FlexWrapper direction="column" gap="8px">
                <Title>Frameworks</Title>
                <WrappableList>
                  {frameworksArr.map(({color, text}) => (
                    <FrameWorkItem color={color}>{text}</FrameWorkItem>
                  ))}
                </WrappableList>
              </FlexWrapper>
              <FlexWrapper direction="column" gap="8px">
                <Title>Languages</Title>
                <WrappableList>
                  {languageIconsArr.map(icon => <LanguageItem><Icon width="24px" height="24px" src={icon}/></LanguageItem>)}
                </WrappableList>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </ProfileSection>
      </Container>
    </StyledPage>
  );
};

export default ProfilePage;
import styled, { css } from 'styled-components';

import ProfileSection from './UI/ProfileSection';
import FlexWrapper from './UI/FlexWrapper';
import TagLink from "./UI/TagLink";
import Icon from './UI/Icon';

import * as icons from "../img/icons";

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
transition: opacity .3s;
&:hover {
  opacity: .6;
}
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
flex-wrap: wrap;
gap: ${props => props.gap || '0'};
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

const ResumeInfo = ({projectsArr, frameworksArr, languageIconsArr}) => {
  return (
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
            <WrappableList gap="8px">
              {projectsArr.map(({link, text}) => <li><TagLink to={link} src={icons.extLink}>{text}</TagLink></li>)}
            </WrappableList>
          </FlexWrapper>
          <FlexWrapper direction="column" gap="8px">
            <Title>Frameworks</Title>
            <WrappableList gap="8px">
              {frameworksArr.map(({color, text}) => (
                <FrameWorkItem color={color}>{text}</FrameWorkItem>
              ))}
            </WrappableList>
          </FlexWrapper>
          <FlexWrapper direction="column" gap="8px">
            <Title>Languages</Title>
            <WrappableList gap="8px">
              {languageIconsArr.map(icon => <LanguageItem><Icon width="24px" height="24px" src={icon}/></LanguageItem>)}
            </WrappableList>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </ProfileSection>
  );
};

export default ResumeInfo;
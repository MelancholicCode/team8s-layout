import styled from 'styled-components';

import Container from '../UI/Container';
import ProfileInfo from '../ProfileInfo';
import ResumeInfo from '../ResumeInfo';

import * as icons from "../../img/icons";

const StyledPage = styled.div`
`;

const ProfileContainer = styled(Container)`
@media (max-width: 768px) {
  max-width: 470px;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
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
      <ProfileContainer maxWidth="800px" display="flex" gap="30px">
        <ProfileInfo
          isLeader={isLeader}
          infoListArr={infoListArr}
          socialArr={socialArr}
        />
        <ResumeInfo
          projectsArr={projectsArr}
          frameworksArr={frameworksArr}
          languageIconsArr={languageIconsArr}
        />
      </ProfileContainer>
    </StyledPage>
  );
};

export default ProfilePage;
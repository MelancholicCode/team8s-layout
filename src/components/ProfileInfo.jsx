import styled from 'styled-components';

import ProfileSection from './UI/ProfileSection';
import FlexWrapper from './UI/FlexWrapper';
import Icon from './UI/Icon';

import crownImg from "../img/crown.png";
import avatarImg from "../img/avatar.jpg";
import * as icons from "../img/icons";

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
transition: background-color .3s;
&:hover {
  background-color: rgba(250, 250, 250, 0.05);
}
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
flex-wrap: wrap;
& div {
  transition: opacity .3s;
  &:hover {
    opacity: .6;
  }
}
@media (max-width: 768px) {
  margin-top: 32px;
}
`;

const ProfileInfo = ({isLeader, infoListArr, socialArr}) => {
  return (
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
  );
};

export default ProfileInfo;
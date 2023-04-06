import styled from 'styled-components';

const StyledProfileSection = styled.div`
display: flex;
flex-direction: column;
align-items: ${props => props.align || "normal"};
gap: ${props => props.gap || "0"};
width: ${props => props.width || 'auto'};
min-height: 600px;
background-color: #1A1C22;
border-radius: 15px;
padding: ${props => props.padding || '0'};
@media (max-width: 768px) {
  background-color: transparent;
  width: 100%;
  min-height: auto;
  padding-left: 0;
  padding-right: 0;
}
`;

const ProfileSection = (props) => {
  return <StyledProfileSection {...props}/>
};

export default ProfileSection;
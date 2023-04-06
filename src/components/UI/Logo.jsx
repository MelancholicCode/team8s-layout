import styled from 'styled-components';

import logo from "../../img/logo.png";

const LogoWrapper = styled.div`
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
`;

const Logo = (props) => {
  return (
    <LogoWrapper {...props}>
      <img src={logo} width="100%" height="100%" alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
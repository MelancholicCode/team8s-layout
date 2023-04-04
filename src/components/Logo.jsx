import React from 'react';

import logo from "../img/logo.png";
import styled from 'styled-components';

const LogoWrapper = styled.div`
width: 144px;
height: 40px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} width="100%" height="100%" alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
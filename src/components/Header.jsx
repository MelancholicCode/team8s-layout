import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Container from './Container';
import arrowImg from "../img/arrow.svg";
import burgerImg from "../img/burger.svg";

const HeaderEl = styled.div`
padding: 48px 0;
display: flex;
justify-content: center;
align-items: center;
`;

const BtnsWrapper = styled.div`
position: absolute;
left: 0;
display: flex;
align-items: center;
gap: 16px;
`;

const BurgerBtn = styled.div`
cursor: pointer;
padding: 8px;
width: 40px;
height: 40px;
`;

const BackBtn = styled.div`
cursor: pointer;
display: flex;
align-items: center;
gap: 6px;
padding: 10px 15px 10px 20px;
img {
  transform: translateY(2px);
}
p {
  font-size: 16px;
}
`;

const HeaderContainer = styled(Container)`
position: relative;
display: flex;
width: 100%;
max-width: 1168px;
justify-content: center;
`;

const Header = () => {
  return (
    <HeaderEl>
      <HeaderContainer>
        <BtnsWrapper>
          <BurgerBtn>
            <img width="100%" height="100%" src={burgerImg} alt="" />
          </BurgerBtn>
          <BackBtn>
            <img src={arrowImg} width="20px" height="20px" alt="" />
            <p>Back</p>
          </BackBtn>
        </BtnsWrapper>
          <Logo/>
      </HeaderContainer>
    </HeaderEl>
  );
};

export default Header;
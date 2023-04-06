import styled from 'styled-components';

import Logo from './UI/Logo';
import BackBtn from './UI/BackBtn';
import Container from './UI/Container';

import burgerImg from "../img/burger.svg";

const HeaderEl = styled.div`
padding: 48px 0;
display: flex;
justify-content: center;
align-items: center;
`;

const BtnsWrapper = styled.div`
position: absolute;
left: 15px;
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

const HeaderContainer = styled(Container)`
position: relative;
width: 100%;
justify-content: center;
`;

const Header = () => {
  return (
    <HeaderEl>
      <HeaderContainer display="flex" maxWidth="1168px">
        <BtnsWrapper>
          <BurgerBtn>
            <img width="100%" height="100%" src={burgerImg} alt="" />
          </BurgerBtn>
          <BackBtn/>
        </BtnsWrapper>
          <Logo width="144px" height="40px"/>
      </HeaderContainer>
    </HeaderEl>
  );
};

export default Header;
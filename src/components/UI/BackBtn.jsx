import styled from "styled-components";

import arrowImg from "../../img/arrow.svg";

const StyledBackBtn = styled.div`
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
@media (max-width: 640px) {
  display: none;
}
`;

const BackBtn = () => {
  return (
    <StyledBackBtn>
      <img src={arrowImg} width="20px" height="20px" alt="" />
      <p>Back</p>
    </StyledBackBtn>
  );
};

export default BackBtn;
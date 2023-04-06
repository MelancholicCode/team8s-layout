import styled from "styled-components";

import Icon from "./Icon";

const TagText = styled.p`
font-weight: 300;
font-size: 14px;
`;

const StyledTagLink = styled.a`
cursor: pointer;
display: flex;
gap: 6px;
align-items: center;
padding: 5px 8px;
background-color: #2F3239;
border-radius: 5px;
transition: opacity .3s;
&:hover {
  opacity: 0.8;
}
`;

const TagLink = ({src, to, children}) => {
  return (
    <StyledTagLink href={to}>
      <Icon src={src} width="16px" height="16px"/>
      <TagText>{children}</TagText>
    </StyledTagLink>
  );
};

export default TagLink;
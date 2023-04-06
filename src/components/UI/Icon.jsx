import styled from "styled-components";

const StyledIcon = styled.div`
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
background: url(${props => props.src}) center center no-repeat;
`;

const Icon = (props) => {
  return <StyledIcon {...props}/>
};

export default Icon;
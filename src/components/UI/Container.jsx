import styled from 'styled-components';

const StyledContainer = styled.div`
display: ${props => props.display || 'block'};
max-width: ${props => props.maxWidth || '770px'};
gap: ${props => props.gap || '0'};
margin: 0 auto;
padding: 0 15px;
`;

const Container = (props) => {
  return <StyledContainer {...props}/>
};

export default Container;
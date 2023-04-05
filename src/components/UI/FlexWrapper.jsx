import React from 'react';
import styled from 'styled-components';

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  gap: ${props => props.gap || '0'};
`;

const FlexWrapper = (props) => {
  return <StyledFlexWrapper {...props}/>
};

export default FlexWrapper;
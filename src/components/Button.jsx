import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const StyledButton = styled.button.attrs((props) => ({
  outlined: true,
}))`
  align-self: ${({ align }) => align || 'stretch'};
  font-size: 18px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 0.7s infinite alternate;
  }
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || '#fff'};
      background: ${(props) => props.background || '#fff'};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || '#fff'};
      border: 1px solid ${(props) => props.color || '#fff'};
      background: transparent;
    `}
`;

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

const Button = (props) => {
  return <LargeButton {...props} />;
};

export default Button;
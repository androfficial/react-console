import React from 'react';
import styled from 'styled-components';

import { Flex, Line } from '.';

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: #000;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props) => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }
  @media ${(props) => props.theme.media.tablet} {
  }
  @media ${(props) => props.theme.media.phone} {
  }
`;

const Console = ({ color, ...props }) => {
  const [lines, setLines] = React.useState(['C:\\Windows\\System32>']);

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines((prev) => [...prev, 'C:\\Windows\\System32>']);
    }
  };

  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {lines.map((line, index) => (
          <Line color={color} key={index}>
            {line}
          </Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
};

export default Console;

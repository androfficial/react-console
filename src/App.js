import React from 'react';
import styled from 'styled-components';

import { Button, Console, Flex, Title } from './components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #000;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Consoled 2021. With styled-components</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console />
        <Button
          onClick={() => alert('Нажми Enter чтобы отправить команду.')}
          color="green"
          align="flex-end">
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
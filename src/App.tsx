import React from 'react';
import { ChakraProvider, theme, Container, Input } from '@chakra-ui/react';

export function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Input placeholder="Basic usage" />
      </Container>
    </ChakraProvider>
  );
}

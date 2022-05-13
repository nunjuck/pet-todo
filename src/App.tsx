import { useState } from 'react'
import { ChakraProvider, theme, Container, Heading } from '@chakra-ui/react'

import CreateTask from './components/CreateTask/CreateTask'
import ListTask from './components/ListTask/ListTask'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { taskSlice } from './store/reducers/TaskSlice'
import { ITask } from './types'
import './app.css'

export function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Container p={4}>
        <Heading mb={4}>Project Todo</Heading>
        <CreateTask />
        <ListTask />
      </Container>
    </ChakraProvider>
  )
}

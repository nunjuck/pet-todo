import { useState } from 'react'
import { ChakraProvider, theme, Container, Heading } from '@chakra-ui/react'

import CreateTask from './components/CreateTask/CreateTask'
import ListTask from './components/ListTask/ListTask'

import './app.css'
import { Task } from './types'

export function App(): JSX.Element {
  const [list, setList] = useState<Task[]>([])

  const createTask = (task: Task) => {
    setList([...list, task])
  }

  const removeTask = (id: string) => {
    setList(list.filter((task) => task.id !== id))
  }
  return (
    <ChakraProvider theme={theme}>
      <Container p={4}>
        <Heading mb={4}>Project Todo</Heading>
        <CreateTask onCreateTask={createTask} />
        <ListTask list={list} onRemoveTask={removeTask} />
      </Container>
    </ChakraProvider>
  )
}

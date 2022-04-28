import React, { FC, useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import nextId from 'react-id-generator'

import { Task } from '../../types'

import styles from './CreateTask.module.css'

interface ICreateTask {
  onCreateTask: (task: Task) => void
}

const CreateTask: FC<ICreateTask> = (props) => {
  const [textTask, setTextTask] = useState('')
  const { onCreateTask } = props

  const htmlId = nextId()

  const onSubmitTask = (e: React.FormEvent) => {
    e.preventDefault()
    onCreateTask({
      id: htmlId,
      text: textTask,
      isCompleted: false
    })
    setTextTask('')
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTask(e.target.value)
  }
  return (
    <form className={styles.createTaskForm} onSubmit={onSubmitTask}>
      <Input placeholder='Basic usage' value={textTask} onChange={handleChangeText} />
      <Button colorScheme='teal' size='md'>
        Button
      </Button>
    </form>
  )
}

export default CreateTask

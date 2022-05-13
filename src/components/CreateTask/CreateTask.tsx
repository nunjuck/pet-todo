import React, { FC, useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import nextId from 'react-id-generator'

import { useAppDispatch } from '../../hooks/redux'
import { taskSlice } from '../../store/reducers/TaskSlice'

import styles from './CreateTask.module.css'

const CreateTask: FC = () => {
  const [textTask, setTextTask] = useState('')

  const { addTask } = taskSlice.actions
  const dispatch = useAppDispatch()

  const htmlId = nextId()

  const onSubmitTask = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(addTask({ id: htmlId, text: textTask, isCompleted: false }))
    setTextTask('')
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTask(e.target.value)
  }
  return (
    <form className={styles.createTaskForm} onSubmit={onSubmitTask}>
      <Input placeholder='...' value={textTask} onChange={handleChangeText} />
      <Button colorScheme='teal' size='md' type='submit'>
        Добавить
      </Button>
    </form>
  )
}

export default CreateTask

import { Button, Checkbox, Input } from '@chakra-ui/react'
import React, { FC, useState } from 'react'

import { useAppDispatch } from '../../hooks/redux'
import { taskSlice } from '../../store/reducers/TaskSlice'

import { ITask } from '../../types'

import styles from './Task.module.css'

interface ITaskProps {
  task: ITask
}
export const Task: FC<ITaskProps> = (props) => {
  const { task } = props

  const { removeTask, toggleTask, updateTextTask } = taskSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={styles.task}>
      <Checkbox
        size='lg'
        colorScheme='teal'
        checked={task.isCompleted}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(toggleTask(task.id))}
      />
      <Input
        value={task.text}
        disabled={task.isCompleted}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(updateTextTask({ id: task.id, text: e.currentTarget.value }))
        }
      />
      <Button
        colorScheme='red'
        size='md'
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(removeTask(task.id))}
      >
        Удалить
      </Button>
    </div>
  )
}

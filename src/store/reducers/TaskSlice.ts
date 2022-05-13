import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITask } from '../../types'

interface ITaskSate {
  tasks: ITask[]
}

const initialState: ITaskSate = {
  tasks: []
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks = [...state.tasks, action.payload]
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    toggleTask(state, acton: PayloadAction<string>) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === acton.payload) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    },
    updateTextTask(state, action: PayloadAction<{ id: string; text: string }>) {
      console.log('update')

      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, text: action.payload.text }
        }
        return task
      })
    }
  }
})

export default taskSlice.reducer

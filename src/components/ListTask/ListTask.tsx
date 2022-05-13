import { FC } from 'react'

import { useAppSelector } from '../../hooks/redux'
import { Task } from '../Task'

const ListTask: FC = (props) => {
  const { tasks } = useAppSelector((state) => state.taskReducer)

  if (!tasks || !tasks.length) {
    return <p>Список пуст</p>
  }

  return (
    <div className='list'>
      {tasks?.map((task) => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))}
    </div>
  )
}

export default ListTask

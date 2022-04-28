import { FC } from 'react'

import { Task } from '../../types'

interface IListTask {
  list?: Task[]
  onRemoveTask: (id: string) => void
}

const ListTask: FC<IListTask> = (props) => {
  const { list, onRemoveTask } = props

  if (!list || !list.length) {
    return <p>Список пуст</p>
  }

  return (
    <div className='list'>
      {list?.map(({ id, text }) => (
        <li key={id} onClick={(e) => onRemoveTask(id)}>
          {text}
        </li>
      ))}
    </div>
  )
}

export default ListTask

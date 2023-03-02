// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TasksList = lazy(() => import('./TasksListPage'))
const NotFound = lazy(() => import('./NotFoundPage'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TasksList />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TaskPage = lazy(() => import('./TaskPage'))
const NotFound = lazy(() => import('./NotFoundPage'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TaskPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

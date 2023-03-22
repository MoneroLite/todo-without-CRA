// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage/index'
import { TaskPage } from './TaskPage/index'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TaskPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

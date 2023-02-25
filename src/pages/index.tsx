// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TestPaget = lazy(() => import('./testTwo'))
const TestPage = lazy(() => import('./test'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TestPage />} />
      <Route path='/test' element={<TestPaget />} />
      {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  )
}

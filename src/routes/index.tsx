import { Route, Routes } from 'react-router-dom'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'

export function Routess() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
      <Route path="/page/:page" element={<Home />}></Route>
    </Routes>
  )
}

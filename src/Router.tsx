import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import History from './pages/History'
import React from 'react'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default Router

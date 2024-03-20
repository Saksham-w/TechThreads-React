import React, { useState } from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import { Outlet } from 'react-router-dom'

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('isDark')) || false
  )
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Outlet context={[isDark]} />
    </>
  )
}

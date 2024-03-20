import React from 'react'
import Logo from '../public/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar({ isDark, setIsDark }) {
  return (
    <div id="nav">
      <div className="innerNav">
        <Link to="/" className="ficjc">
          <img id="logo" src={Logo} alt="logo" />
          <div id="siteName">HackerNews</div>
        </Link>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem('isDark', !isDark)
          }}
        >
          {isDark ? (
            <i
              className="ri-sun-fill"
              style={{ fontSize: '25px', marginRight: '20px' }}
            ></i>
          ) : (
            <i
              className="ri-moon-fill"
              style={{ fontSize: '25px', marginRight: '20px' }}
            ></i>
          )}
        </div>
      </div>
    </div>
  )
}

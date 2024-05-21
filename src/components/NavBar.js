import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <p>Logo</p>
        <div>
            <NavLink to="/"><p>Home</p></NavLink>
            <NavLink to="/cart"><p>Cart</p></NavLink>
        </div>
    </div>
  )
}

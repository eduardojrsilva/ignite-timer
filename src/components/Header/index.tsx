import { Scroll, Timer } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header

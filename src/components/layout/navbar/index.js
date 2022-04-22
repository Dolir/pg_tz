import React from "react"
import { NavLink } from "react-router-dom"
import ModalLogin from "./ModalLogin"
import { ReactComponent as LogoIcon } from "../assets/logo.svg"
import { ReactComponent as LogoNoTextIcon } from "../assets/logoNoText.svg"
import './navbar.scss'
const Navbar = () => {
  
  return (  
    <nav>
      <NavLink to="/">
        <LogoNoTextIcon title="Главная" className="d-block d-md-none"/>
        <LogoIcon title="Главная" className="d-none d-md-block"/>
      </NavLink>
      <NavLink to="news"><h4 className="m-0">Новости</h4></NavLink>
      <ModalLogin />
    </nav>
  )
}

export default Navbar

import Navbar from "./navbar"
import React from "react"

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default LayoutWrapper

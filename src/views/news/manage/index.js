import React from "react"
import { useSelector } from "react-redux"
import ModalCreate from "./ModalCreate"
import ModalResolve from "./ModalResolve"

const ManageNews = () => {
  const userData = useSelector((state) => state.auth.userData)
  const isAdmin = userData.role === "admin"
  return (
    <div className="news__manage">
      <ModalCreate />
      {isAdmin && <ModalResolve />}
    </div>
  )
}

export default ManageNews

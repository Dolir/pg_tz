import React from "react"
import { useSelector } from "react-redux"
import ModalCreate from "./ModalCreate"
import ModalResolve from "./ModalResolve"

const ManageNews = () => {
  const auth = useSelector((state) => state.auth)
  const isAdmin = auth.userData?.role === "admin"
  return (
    <div className="news__manage">
      {auth.isAuthenticated && <ModalCreate />}
      {isAdmin && <ModalResolve />}
    </div>
  )
}

export default ManageNews

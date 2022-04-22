import React, { useCallback, useEffect, useState } from "react"
import { useMutation } from "react-query"
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap"
import jwtService from "../../../services/auth/jwtService"
import { login as loginAction, logout } from "../../../redux/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toggleModal } from "../../../redux/layout/layoutSlice"
const ModalLogin = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState("")
  const auth = useSelector((state) => state.auth)
  const open = useSelector((state) => state.layout.modalLogin)
  const dispatch = useDispatch()

  const loginMutation = useMutation((data) => jwtService.login(data), {
    onError: (e) => setError(e.response.data.error.login)
  })

  const handleModalClose = useCallback(() => {
    dispatch(toggleModal(false))
  }, [dispatch])

  const clearForm = () => {
    setLogin(null)
    setPassword(null)
  }

  useEffect(() => {
    setError("")
  }, [password, login])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (login === "" || password === "") return
    const result = await loginMutation.mutateAsync({ password, login })
    handleModalClose()
    dispatch(loginAction(result.data))
  }
  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  const modalTrigger = () => {
    if (auth.isAuthenticated)
      return (
        <h4 className="m-0" onClick={handleLogout}>
          Выход
        </h4>
      )
    return (
      <h4 onClick={() => dispatch(toggleModal(true))} className="m-0">
        Вход
      </h4>
    )
  }
  return (
    <>
      {modalTrigger()}
      {open && (
        <Modal
          toggle={() => dispatch(toggleModal(!open))}
          isOpen={open}
          centered
          fade={false}
          onExit={clearForm}
        >
          <ModalHeader
            close={<Button close onClick={handleModalClose}></Button>}
          >
            Войти
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="login">Логин</Label>
                <Input
                  className="no-default-shadow"
                  id="login"
                  name="login"
                  placeholder="Логин"
                  value={login || ""}
                  onChange={(e) => setLogin(e.target.value)}
                  invalid={login === ""}
                />
                <FormFeedback>Поле обязательное!</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Пароль</Label>
                <Input
                  className="no-default-shadow"
                  id="password"
                  name="password"
                  placeholder="Введите пароль"
                  type="password"
                  value={password || ""}
                  invalid={password === ""}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormFeedback>Поле обязательное!</FormFeedback>
              </FormGroup>
            </Form>
            {error && <span className="text-danger">{error}</span>}
          </ModalBody>

          <ModalFooter>
            <Button
              color="danger"
              outline
              onClick={handleModalClose}
              disabled={loginMutation.isLoading}
            >
              Отмена
            </Button>
            <Button
              color="dark"
              onClick={handleSubmit}
              disabled={loginMutation.isLoading}
            >
              Войти
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  )
}

export default ModalLogin

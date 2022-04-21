import React, { useCallback, useState } from "react"
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
const ModalLogin = () => {
  const [open, setOpen] = useState(false)
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const loginMutation = useMutation((data) => jwtService.login(data))
  const handleModalClose = useCallback(() => {
    setOpen(false)
  }, [])
  const clearForm = () => {
    setLogin(null)
    setPassword(null)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (login === "" || password === "") return
    const result = await loginMutation.mutateAsync({password, login})
    console.log(result)
  }
  return (
    <>
      <h4 onClick={() => setOpen(true)} className="m-0">
        Вход
      </h4>
      {open && (
        <Modal
          toggle={() => setOpen((prev) => !prev)}
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
                  id="login"
                  name="login"
                  placeholder="Логин"
                  value={login || ''}
                  onChange={(e) => setLogin(e.target.value)}
                  invalid={login === ""}
                />
                <FormFeedback>Поле обязательное!</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Пароль</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Введите пароль"
                  type="password"
                  value={password || ''}
                  invalid={password === ''}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormFeedback>Поле обязательное!</FormFeedback>
              </FormGroup>
            </Form>
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

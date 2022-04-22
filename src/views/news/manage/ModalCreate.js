import React, { useCallback, useEffect, useState } from "react"
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
import { useDispatch } from "react-redux"
import { addInReview } from "../../../redux/news/newsSlice"
import useDebounce from "../../../utils/hooks/useDebounce"
const ModalCreate = () => {
  const [title, setTitle] = useState(null)
  const [text, setText] = useState(null)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleModalClose = useCallback(() => {
    setOpen(false)
  }, [])
  const debounce = useDebounce(handleModalClose, 3000)
  const clearForm = () => {
    setText(null)
    setTitle(null)
    setSuccess(null)
  }

  useEffect(() => {
    setError("")
  }, [title, text])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (title === "" || text === "") return
    dispatch(addInReview({ title, text, created_at: Date.now() }))
    setSuccess("Ваш запрос успешно отправлен на модерацию!")

    debounce()
  }
  const modalContent = success ? (
    <>
      <ModalBody>
        <h3 className="py-5 text-success text-center">{success}</h3>
      </ModalBody>
    </>
  ) : (
    <>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title">Название</Label>
            <Input
              id="title"
              name="title"
              className="no-default-shadow"
              placeholder="Название новости"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
              invalid={title === ""}
            />
            <FormFeedback>Поле обязательное!</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="text">Описание</Label>
            <Input
              id="text"
              className="no-default-shadow"
              name="text"
              placeholder="Введите новость"
              type="textarea"
              value={text || ""}
              invalid={text === ""}
              onChange={(e) => setText(e.target.value)}
            />
            <FormFeedback>Поле обязательное!</FormFeedback>
          </FormGroup>
        </Form>
        {error && <span className="text-danger">{error}</span>}
      </ModalBody>
    </>
  )

  return (
    <>
      <Button color="success" onClick={() => setOpen(true)}>
        Добавить новость
      </Button>
      {open && (
        <Modal
          toggle={() => setOpen(!open)}
          isOpen={open}
          centered
          fade={false}
          onExit={clearForm}
        >
          <ModalHeader
            close={<Button close onClick={handleModalClose}></Button>}
          >
            Добавить новость
          </ModalHeader>
          {modalContent}{" "}
          <ModalFooter>
            <Button color="danger" outline onClick={handleModalClose}>
              Закрыть
            </Button>
            <Button color="dark" onClick={handleSubmit} disabled={!!success}>
              Создать
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  )
}

export default ModalCreate

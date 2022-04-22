import React, { useCallback, useState } from "react"
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import { formatDate } from "../../../utils/utility"
import { addOneNews, removeInReview } from "../../../redux/news/newsSlice"
const ModalResolve = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState()
  const inReview = useSelector((state) => state.news.newsInReview)
  const handleModalClose = useCallback(() => {
    setOpen(false)
  }, [])
  const handleDeny = () => {
    if (!selectedNews) return
    dispatch(removeInReview(selectedNews))
    setSelectedNews(null)
  }
  const handleApprove = () => {
    if (!selectedNews) return
    dispatch(addOneNews(selectedNews))
    dispatch(removeInReview(selectedNews))
    setSelectedNews(null)
  }
  const options = inReview.map((news) => ({ label: news.title, value: news }))
  return (
    <>
      <Button color="warning" onClick={() => setOpen(true)}>
        Проверить новости
      </Button>
      {open && (
        <Modal
          toggle={() => setOpen(!open)}
          isOpen={open}
          centered
          fade={false}
          size="xl"
        >
          <ModalHeader
            close={<Button close onClick={handleModalClose}></Button>}
          >
            Проверить новости
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormGroup>
                <Label for="title">Название</Label>
                <Select
                  value={
                    selectedNews
                      ? { value: selectedNews, label: selectedNews?.title }
                      : null
                  }
                  options={options}
                  onChange={(option) => setSelectedNews(option.value)}
                  placeholder="Выбрать новость"
                  noOptionsMessage={() => "Ничего не найдено"}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: "#b8b8b8",
                      primary: "#2f2f2f"
                    }
                  })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="text">Описание</Label>
                <Input
                  id="text"
                  className="no-default-shadow"
                  name="text"
                  placeholder=""
                  type="textarea"
                  readOnly
                  value={selectedNews?.text || ""}
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Дата создания</Label>
                <Input
                  id="date"
                  className="no-default-shadow"
                  name="date"
                  placeholder=""
                  type="text"
                  readOnly
                  value={formatDate(selectedNews?.created_at) || ""}
                />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="danger" outline onClick={handleModalClose}>
              Закрыть
            </Button>
            <Button color="warning" onClick={handleDeny}>
              Отказать
            </Button>
            <Button color="success" onClick={handleApprove}>
              Одобрить
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  )
}

export default ModalResolve

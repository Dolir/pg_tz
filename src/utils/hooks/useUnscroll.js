import { useEffect } from "react"
/** Хук для отключения скролла*/
function useUnscroll(isOpened) {
  useEffect(() => {
    //В сафари браузере может не работать без стилей на html тег
    const bodyElement = document.querySelector("body")
    const htmlElement = document.querySelector("html")
    if (isOpened) {
      bodyElement.classList.add("overflow-hidden")
      htmlElement.classList.add("overflow-hidden")
    } else {
      bodyElement.classList.remove("overflow-hidden")
      htmlElement.classList.remove("overflow-hidden")
    }
  }, [isOpened])
}

export default useUnscroll

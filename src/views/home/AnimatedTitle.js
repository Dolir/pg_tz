import React, { useState } from "react"
import Delayed from "../../components/utility/Delayed"
import Trail from "../../components/utility/Trail"
import useDebounce from "../../utils/hooks/useDebounce"
const AnimatedTitle = ({ title = "Гость" }) => {
  const [open, setOpen] = useState(true)
  const animateTitle = useDebounce(() => setOpen(true), 500)

  const handleAnimate = () => {
    setOpen((prev) => !prev)
    animateTitle()
  }

  return (
    <h1 className="home__title home-title" onClick={handleAnimate}>
      <Delayed waitBeforeShow={800}>
        <Trail open={open} className="home-title__container trail">
          {"Привет,".split("").map((letter) => letter)}
          {"divider"}
          {`${title}!`.split("").map((letter, index) => (
            <span className="text-danger" key={letter + index}>
              {letter}
            </span>
          ))}
        </Trail>
      </Delayed>
    </h1>
  )
}

export default AnimatedTitle

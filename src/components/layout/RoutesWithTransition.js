import { Routes, useLocation } from "react-router-dom"
import { useTransition, animated } from "@react-spring/web"

const RoutesWithTransition = ({ children }) => {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translateY(-20vh)" },
    enter: { opacity: 1, transform: "translateY(0vh)" },
    leave: { opacity: 0, transform: "translateY(20vh)" },
    exitBeforeEnter: true
  })

  return (
    <>
      {transitions((props, location) => (
        <animated.div key={location.pathname} style={props}>
          <Routes location={location}>{children}</Routes>
        </animated.div>
      ))}
    </>
  )
}
export default RoutesWithTransition

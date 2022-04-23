import Routes from "./routes"
import { Route, useLocation, useNavigate } from "react-router-dom"
import RoutesWithTransition from "../components/layout/RoutesWithTransition"
import { isUserLoggedIn } from "../utils/utility"
import { useEffect } from "react"
import LayoutWrapper from "../components/layout/LayoutWrapper"
import { useDispatch } from "react-redux"
import { toggleModal } from "../redux/layout/layoutSlice"

const Redirect = ({ to = "/" }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    navigate(to)
    dispatch(toggleModal(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
//Тут есть возможность создавать авторизирванные роуты
const Router = () => {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation()

  const resolveFinalRoute = (route) => {
    if (route.auth && !isUserLoggedIn()) return <Redirect />
    return <route.component />
  }
  const resolveRoutes = () => {
    return Routes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={resolveFinalRoute(route)}
        ></Route>
      )
    })
  }
  return (
    <LayoutWrapper>
      <RoutesWithTransition>{resolveRoutes()}</RoutesWithTransition>
    </LayoutWrapper>
  )
}

export default Router

import Home from "../views/home/Home"
import News from "../views/news"
const Routes = [
  {
    path: "/",
    component: Home
  },

  {
    path: "/news",
    component: News,
    auth: true
  }
]
export default Routes

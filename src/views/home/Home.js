import React from "react"
import "./home.scss"

import AnimatedTitle from "./AnimatedTitle"
import { useSelector } from "react-redux"
const Home = () => {
  const auth = useSelector((state) => state.auth)
  const title = auth.isAuthenticated ? auth.userData.username : "Гость"
  return (
    <div className="home content">
      <AnimatedTitle title={title} />
    </div>
  )
}

export default Home

// export default function App() {
//   const [open, set] = useState(true)
//   return (
//     <div className={styles.container} onClick={() => set(state => !state)}>
//       <Trail open={open}>
//         {'Привет гость'.split('').map(l => <span>{l}</span>)}
//       </Trail>
//     </div>
//   )
// }

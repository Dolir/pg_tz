import React, { useState } from "react"
import "./home.scss"
import Trail from "../../components/utility/Trail"
const Home = () => {
  const isAuthenticated = false
  const [open, setOpen] = useState(true)
  return (
    <div className="home">
      <h1 className="home__title" onClick={() => setOpen(!open)}>
        <Trail
          open={open}
        >
          {"Привет".split('').map((letter) => letter)}
          <div className="mx-3"></div>
          {"Админ!".split('').map((letter) => <span className="text-danger">{letter}</span>)}

        </Trail>
      </h1>
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

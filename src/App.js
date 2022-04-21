import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/home/Home"
import News from "./views/news"
import Navbar from "./components/layout/navbar"
import RoutesWithTransition from "./components/layout/RoutesWithTransition"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesWithTransition>
        <Route path="/" element={<Home />}></Route>
        <Route path="news" element={<News />}></Route>
      </RoutesWithTransition>
    </BrowserRouter>
  )
}

export default App

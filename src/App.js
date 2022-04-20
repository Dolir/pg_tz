import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./views/Main"
import News from "./views/news"
import NewsPage from "./views/news/NewsPage"
import Navbar from "./components/Navbar"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="news/:id" element={<NewsPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

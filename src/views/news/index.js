import React from "react"
import NewsList from "./list/NewsList"
import ManageNews from "./manage"
import "./news.scss"
const News = () => {
  return (
    <div className="content news">
      <ManageNews />
      <NewsList />
    </div>
  )
}

export default News

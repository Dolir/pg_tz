import React from "react"
import { formatDate } from "../../../utils/utility"
const NewsItem = ({ data }) => {
  return (
    <li className="news-list__item news-item">
      <h4 className="news-item__title">{data.title}</h4>
      <p className="news-item__text">{data.text}</p>
      <div className="news-item__divider"></div>

      <div>{formatDate(data.created_at)}</div>
    </li>
  )
}

export default NewsItem

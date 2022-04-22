import React, { useEffect, useMemo, useState } from "react"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { Input, Spinner } from "reactstrap"
import { addNews } from "../../../redux/news/newsSlice"
import newsService, { NewsAlias } from "../../../services/news/newsService"
import useDebounce from "../../../utils/hooks/useDebounce"
import NewsItem from "./NewsItem"
const NewsList = () => {
  const [searchValue, setSearchValue] = useState("")
  const debounce = useDebounce((val) => setSearchValue(val), 300)
  const dispatch = useDispatch()
  const newsItems = useSelector((state) => state.news.newsItems)
  const newsQuery = useQuery([NewsAlias.GET_NEWS, searchValue], () =>
    newsService.getNews(searchValue)
  )
  const data = useMemo(() => newsQuery.data?.data, [newsQuery.data?.data])

  useEffect(() => {
    if (newsQuery.isSuccess) {
      dispatch(addNews(data))
    }
  }, [data, dispatch, newsQuery.isLoading, newsQuery.isSuccess])

  return (
    <div className="news">
      <Input
        className="news__input no-default-shadow "
        placeholder="Поиск..."
        onChange={(e) => debounce(e.target.value)}
      />
      {newsQuery.isLoading ? (
        <Spinner className="news__spinner" />
      ) : (
        <ul className="news__list news-list">
          {newsItems?.map((news, index) => (
            <NewsItem data={news} key={news.title + index} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default NewsList

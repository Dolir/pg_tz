import axios from "axios"

export const NewsAlias = {
  GET_NEWS: "GET_NEWS"
}
class newsService {
  getNews(searchValue) {
    return axios.get("/news", { searchValue })
  }
}

export default new newsService()

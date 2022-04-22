import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { store } from "./redux/app/store"
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query"
import './fake-db'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.scss"
const Index = () => {
  const client = new QueryClient()
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById("root"))

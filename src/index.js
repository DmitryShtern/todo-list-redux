import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Header, List, Bar } from "./containers"
// import App from "./containers/App"
import "./styles/app.css"
import configureStore from "./store/configureStore"

const store = configureStore()

render(
  <Provider store={store}>
    {/* <App /> */}
    <Header />
    <List />
    <Bar />
  </Provider>,
  document.getElementById("root"),
)

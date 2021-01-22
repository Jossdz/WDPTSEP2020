import React from "react"
import ReactDOM from "react-dom"
import "antd/dist/antd.dark.css"
// import App from './App';
// import Events from "./questions/Events"
import AntDApp from "./AntDApp"
import reportWebVitals from "./reportWebVitals"
import LayoutApp from "./components/LayoutApp"

ReactDOM.render(
  <React.StrictMode>
    <LayoutApp title='Antd App'>
      <AntDApp />
    </LayoutApp>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

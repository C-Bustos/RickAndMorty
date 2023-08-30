import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'


ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>

  

)

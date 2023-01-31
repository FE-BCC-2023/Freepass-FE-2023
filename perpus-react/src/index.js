import React from 'react'
import ReactDOM from 'react-dom/client'
import Data from './components/Data/Data'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Data>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Data>
)

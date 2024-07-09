import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Qrgen from './Qrgen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2>QR Code Generator</h2>
    <Qrgen />
  </React.StrictMode>,
)

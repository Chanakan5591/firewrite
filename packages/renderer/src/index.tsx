import './shim'
import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './app'

const container = document.getElementById('root')

if (container) {
  const root = ReactDOMClient.createRoot(container)
  root.render(<App />)
}

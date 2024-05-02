import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    </Router>
  </React.StrictMode>
)

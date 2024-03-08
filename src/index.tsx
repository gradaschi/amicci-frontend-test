import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { AlertProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AlertProvider>
    <App />
  </AlertProvider>,
)

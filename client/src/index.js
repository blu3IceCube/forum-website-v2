import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const node = document.getElementById('root')
const root = createRoot(node)
root.render(
    <App />
)

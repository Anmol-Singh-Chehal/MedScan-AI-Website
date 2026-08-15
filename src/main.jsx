import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ThemeProvider } from './components/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider attribute="class" defaultTheme = "light" enableSystem disableTransitionOnChange>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)

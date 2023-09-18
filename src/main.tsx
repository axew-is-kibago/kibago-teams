import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'; 
import "./index.css";

const root = document.getElementById('root');

if (root) {
const appRoot = createRoot(root);
appRoot.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
} else {
    console.error("Root element not found");
}

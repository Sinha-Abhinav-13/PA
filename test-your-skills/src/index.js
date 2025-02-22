import React from 'react';
import * as ReactDOM from 'react-dom/client'; // Ensure correct import
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element not found!");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

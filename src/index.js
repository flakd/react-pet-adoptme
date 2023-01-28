import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import App from './App';

/* const root = createRoot(document.getElementById('root'));
root.render(<App />); */

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));

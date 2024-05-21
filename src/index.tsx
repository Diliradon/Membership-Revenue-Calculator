import { HashRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>
);

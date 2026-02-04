import { createRoot } from 'react-dom/client';
import Router from './app/Router/Router.tsx';
import './app/styles/index.scss';

createRoot(document.getElementById('root')!).render(<Router />)

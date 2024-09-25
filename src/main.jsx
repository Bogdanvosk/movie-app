import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import 'react-loading-skeleton/dist/skeleton.css';
import './styles/globals.scss';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

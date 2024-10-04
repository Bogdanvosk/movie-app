import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ModalPovider from './components/common/ModalPovider/ModalPovider';

import store from './store';

import './styles/globals.scss';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ModalPovider>
        <App />
      </ModalPovider>
    </BrowserRouter>
  </Provider>
);

import '@hotwired/turbo-rails';
import './controllers';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Greeting from './components/Greeting';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/greeting',
    element: <Greeting />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

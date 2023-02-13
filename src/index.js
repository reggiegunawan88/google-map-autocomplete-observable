import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'rxjs';
import store from 'store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

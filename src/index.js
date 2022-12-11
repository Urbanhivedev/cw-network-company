import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/custom-animated.css';
import './assets/css/default.css';
import './assets/css/font-awesome.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/main.css';
import './assets/css/style.css';

//Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

//redux imports
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';



let persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import uiReducer, { initialState } from "./reducers/uiReducer";
import { thunk } from 'redux-thunk';

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
// Web Entry
import './index.css';
import App from './App';

// Method 1
import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});

// Method 2
// import React from 'react';
// import {createRoot} from 'react-dom/client';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// src/index.tsx
import './polyfills';  // This must be the very first import

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App';
import './index.css';
import awsConfig from './config/amplifyConfig';

Amplify.configure(awsConfig as any);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






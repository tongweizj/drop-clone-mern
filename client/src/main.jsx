import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App.jsx';
import AppProviders from '@/components/AppProviders'
import './index.css'

const Root = (
   <AppProviders>
        <App />
  </AppProviders>
);
const container = document.getElementById('root');
const webroot = createRoot(container);
webroot.render(
  import.meta.env.DEV ? Root : <StrictMode>{Root}</StrictMode>
);



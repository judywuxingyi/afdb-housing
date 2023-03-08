import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container : any = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <App />
);

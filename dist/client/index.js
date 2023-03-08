import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
var container = document.getElementById('root');
if (!container)
    throw new Error('Failed to find the root element');
var root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(React.createElement(App, null));

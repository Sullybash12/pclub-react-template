import * as React from 'react';
import { render } from 'react-dom';

import Home from './pages/home';
import Login from './pages/login';

const rootElement = document.getElementById('root');
render(<Login />, rootElement);

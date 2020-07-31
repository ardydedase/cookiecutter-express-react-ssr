import React from 'react';
import { hydrate } from 'react-dom';
import Home from './app';

hydrate(React.createElement(Home), document.getElementById('reactele'));

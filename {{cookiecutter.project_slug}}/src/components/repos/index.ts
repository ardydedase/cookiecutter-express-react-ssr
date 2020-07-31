import React from 'react';
import { hydrate } from 'react-dom';
import Repos from './app';

hydrate(React.createElement(Repos), document.getElementById('reactele'));

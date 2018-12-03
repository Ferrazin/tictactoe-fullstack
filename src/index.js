import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import {Provider} from 'react-redux'

import Game from './components/game'

import './index.css'  

  ReactDOM.render(
	<Provider store={store}>
		<Game />
	</Provider>,
	document.getElementById('root')
)

  
  
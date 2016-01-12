import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import DevTools from './devtools'

import { todoApp } from './reducers'

let store = compose( DevTools.instrument())(createStore)(todoApp)

import App from './app.jsx'

class Root extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<div>
				<App />
				<DevTools />
				</div>
			</Provider>

		)
	}
}

ReactDOM.render(<Root />, document.getElementById('hello'))

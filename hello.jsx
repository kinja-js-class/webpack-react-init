import React from 'react';
import ReactDOM from 'react-dom';


import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { todoApp } from './reducers'

let store = createStore(todoApp)

class Hello extends React.Component {
  render() {
    return (
			<Provider store={store}>
				<h1>Hello</h1>
			</Provider>
  )}
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));

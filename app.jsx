import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { addTodo } from './actions';

class App extends React.Component {
	handleClick (e) {
		this.props.dispatch(addTodo('make this a todo app'))

	}

  render() {

    return (

		<button onClick={e => this.handleClick(e)}>🐳</button>
  )}
}

function selector (state) {
	return state;
}

export default connect(selector)(App)

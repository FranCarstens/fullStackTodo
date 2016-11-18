import React from 'react'
import Actions from '../actions'

class ToDoItem extends React.Component {
	_toggleChecked(e) {
		Actions.toggleChecked(this.props.model.cid)
	}
	_deleteTodo(e) {
		Actions.removeItem(this.props.model.cid)
	}
	render() {
		var todo = this.props.model
		var checked = todo.get('done') === false ? 'open' : 'closed'
		var desc = todo.get('description') !== '' ? todo.get('description')  : ''
		return(
			<section className={`todo_item ${todo.get('done')} ${todo.get('priority')}`}>
				<div className="todo_detail">
					<div className={todo.get('priority')}></div>
					<h3>{todo.get('title')}</h3>
					<p>{desc}</p>
					<span className="category">{todo.get('category')}</span>
				</div>
				<div className="todo_actions">
					<button className="remove icon-ban" onClick={this._deleteTodo.bind(this)}>delete</button>
					<button className="checkbox icon-check" onClick={this._toggleChecked.bind(this)}>{checked}</button>
				</div>
			</section>
		)
	}
}

export default ToDoItem


	// var desc = {todo.get('description') !== '' ? { '<p>' + {todo.get('description')} + '</p>' } : ''}
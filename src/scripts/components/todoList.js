import React from 'react'
import ToDoItem from './todoItem'

class ToDoList extends React.Component {
	render() {
		return (
			<section id="todo_list">
				{this.props.collection.models.map((item, index) => <ToDoItem model={this.props.collection.models[index]} />)}
			</section>
		)
	}
}

export default ToDoList

